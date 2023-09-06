/*
 * Copyright 2023 Uppsala University Library
 *
 * This file is part of DiVA Client.
 *
 *     DiVA Client is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     DiVA Client is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with DiVA Client.  If not, see <http://www.gnu.org/licenses/>.
 */

import {
  DataGroup,
  DataListWrapper,
  RecordWrapper,
} from '../utils/cora-data/CoraData';
import {
  extractIdFromRecordInfo,
  extractAttributeValueByName,
} from '../utils/cora-data/CoraDataTransforms';
import {
  getAllDataGroupsWithNameInDataAndAttributes,
  getFirstDataGroupWithNameInData,
} from '../utils/cora-data/CoraDataUtils';
import { getFirstDataAtomicValueWithNameInData } from '../utils/cora-data/CoraDataUtilsWrappers';
import { extractLinkedRecordIdFromNamedRecordLink } from './transformValidationTypes';

interface BFFMetadata {
  id: string;
  nameInData: string;
  type:
    | 'group'
    | 'numberVariable'
    | 'resourceLink'
    | 'collectionItem'
    | 'recordLink'
    | 'textVariable'
    | 'collectionVariable'
    | 'itemCollection';
  textId: string;
  defTextId: string;
}
interface BFFMetadataTextVariable extends BFFMetadata {
  regEx: string;
  finalValue?: string;
}
interface BFFMetadataGroup extends BFFMetadata {
  children: unknown[];
  repeatMin: string;
  repeatMax: string;
}

export const transformMetadata = (
  dataListWrapper: DataListWrapper,
): BFFMetadata[] => {
  if (dataListWrapper.dataList.data.length === 0) {
    return [];
  }

  const coraRecords = dataListWrapper.dataList.data;
  return coraRecords.map(transformCoraRecordToBFFMetaData);
};

const transformCoraRecordToBFFMetaData = (
  coraRecordWrapper: RecordWrapper,
): BFFMetadata => {
  const coraRecord = coraRecordWrapper.record;
  const dataRecordGroup = coraRecord.data;
  return transformRecordGroupToBFF(dataRecordGroup) as BFFMetadata;
};

const transformRecordGroupToBFF = (dataRecordGroup: DataGroup) => {
  let metadata = transformBasicMetadata(dataRecordGroup);

  const finalValue = getFirstDataAtomicValueWithNameInData(
    dataRecordGroup,
    'finalValue',
  );

  if (finalValue) {
    metadata = { ...metadata, finalValue } as BFFMetadata;
  }

  switch (metadata.type) {
    case 'group': {
      return transformMetadataGroup(dataRecordGroup, metadata);
    }
    default: {
      // case 'textVariable': {
      const regEx = getFirstDataAtomicValueWithNameInData(
        dataRecordGroup,
        'regEx',
      );
      return { ...metadata, regEx } as BFFMetadataTextVariable;
    }
  }
};

const transformBasicMetadata = (dataRecordGroup: DataGroup) => {
  const id = extractIdFromRecordInfo(dataRecordGroup);
  const nameInData = getFirstDataAtomicValueWithNameInData(
    dataRecordGroup,
    'nameInData',
  );
  const type = extractAttributeValueByName(dataRecordGroup, 'type');
  const textId = extractLinkedRecordIdFromNamedRecordLink(
    dataRecordGroup,
    'textId',
  );
  const defTextId = extractLinkedRecordIdFromNamedRecordLink(
    dataRecordGroup,
    'defTextId',
  );

  return {
    id,
    nameInData,
    type,
    textId,
    defTextId,
  } as BFFMetadata;
};

const transformMetadataGroup = (
  dataRecordGroup: DataGroup,
  metadata: BFFMetadata,
) => {
  const childReferences = getFirstDataGroupWithNameInData(
    dataRecordGroup,
    'childReferences',
  );
  const childReferencesList = getAllDataGroupsWithNameInDataAndAttributes(
    childReferences as DataGroup,
    'childReference',
  );

  const children = childReferencesList.map((childReference) => {
    const childId = extractLinkedRecordIdFromNamedRecordLink(
      childReference,
      'ref',
    );
    const repeatMin = getFirstDataAtomicValueWithNameInData(
      childReference as DataGroup,
      'repeatMin',
    );
    const repeatMax = getFirstDataAtomicValueWithNameInData(
      childReference as DataGroup,
      'repeatMax',
    );

    const recordPartConstraint = getFirstDataAtomicValueWithNameInData(
      childReference as DataGroup,
      'recordPartConstraint',
    );

    if (recordPartConstraint) {
      return { childId, repeatMin, repeatMax, recordPartConstraint };
    }

    return { childId, repeatMin, repeatMax };
  });

  return {
    ...metadata,
    children,
  } as BFFMetadataGroup;
};
