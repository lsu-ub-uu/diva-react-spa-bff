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

import { DataGroup, DataListWrapper, RecordLink, RecordWrapper } from '../utils/cora-data/CoraData';
import {
  extractAttributeValueByName,
  extractIdFromRecordInfo,
  extractLinkedRecordIdFromNamedRecordLink
} from '../utils/cora-data/CoraDataTransforms';
import {
  containsChildWithNameInData,
  getAllChildrenWithNameInData,
  getAllDataAtomicValueFromDataGroup,
  getAllDataGroupsWithNameInDataAndAttributes,
  getFirstDataGroupWithNameInData
} from '../utils/cora-data/CoraDataUtils';
import { getFirstDataAtomicValueWithNameInData } from '../utils/cora-data/CoraDataUtilsWrappers';
import {
  BFFMetadata,
  BFFMetadataChildReference,
  BFFMetadataCollectionVariable,
  BFFMetadataGroup,
  BFFMetadataNumberVariable,
  BFFMetadataRecordLink,
  BFFMetadataTextVariable
} from './bffTypes';
import { removeEmpty } from '../utils/structs/removeEmpty';

export const transformMetadata = (dataListWrapper: DataListWrapper): BFFMetadata[] => {
  if (dataListWrapper.dataList.data.length === 0) {
    return [];
  }

  const coraRecords = dataListWrapper.dataList.data;
  return coraRecords.map(transformCoraRecordToBFFMetaData).filter((item) => item !== undefined);
};

const transformCoraRecordToBFFMetaData = (coraRecordWrapper: RecordWrapper): BFFMetadata => {
  const coraRecord = coraRecordWrapper.record;
  const dataRecordGroup = coraRecord.data;
  const transformedData = transformRecordGroupMetadataToBFF(dataRecordGroup) as BFFMetadata;
  return transformedData;
};

const transformRecordGroupMetadataToBFF = (dataRecordGroup: DataGroup) => {
  const metadata = transformBasicMetadata(dataRecordGroup);
  switch (metadata.type) {
    case 'group': {
      return transformMetadataGroup(dataRecordGroup, metadata);
    }
    case 'textVariable':
    case 'numberVariable': {
      return transformMetadataVariable<BFFMetadataTextVariable | BFFMetadataNumberVariable>(
        dataRecordGroup,
        metadata
      );
    }
    case 'collectionVariable': {
      return transformCollectionVariable(dataRecordGroup, metadata);
    }
    case 'itemCollection': {
      return transformItemCollection(dataRecordGroup, metadata);
    }
    case 'collectionItem': {
      // Basic metadata is enough for a collectionItem
      return metadata;
    }
    case 'recordLink': {
      return transformRecordLink(dataRecordGroup, metadata);
    }
    // TODO add more types
    default: {
      return undefined;
    }
  }
};

const transformBasicMetadata = (dataRecordGroup: DataGroup) => {
  const id = extractIdFromRecordInfo(dataRecordGroup);
  const nameInData = getFirstDataAtomicValueWithNameInData(dataRecordGroup, 'nameInData');
  const type = extractAttributeValueByName(dataRecordGroup, 'type');
  const textId = extractLinkedRecordIdFromNamedRecordLink(dataRecordGroup, 'textId');
  const defTextId = extractLinkedRecordIdFromNamedRecordLink(dataRecordGroup, 'defTextId');

  return {
    id,
    nameInData,
    type,
    textId,
    defTextId
  } as BFFMetadata;
};

const transformMetadataVariable = <T extends BFFMetadata>(
  dataRecordGroup: DataGroup,
  metadata: BFFMetadata
): BFFMetadata => {
  const attributeReferences = extractAttributesReferences(dataRecordGroup);
  return removeEmpty({
    attributeReferences,
    ...getAllDataAtomicValueFromDataGroup(dataRecordGroup),
    ...metadata
  }) as T;
};

const transformCollectionVariable = (
  dataRecordGroup: DataGroup,
  metadata: BFFMetadata
): BFFMetadata => {
  if (containsChildWithNameInData(dataRecordGroup, 'finalValue')) {
    const finalValue = getFirstDataAtomicValueWithNameInData(dataRecordGroup, 'finalValue');
    metadata = { ...metadata, finalValue } as BFFMetadata;
  }
  const attributeReferences = extractAttributesReferences(dataRecordGroup);
  const refCollection = extractLinkedRecordIdFromNamedRecordLink(dataRecordGroup, 'refCollection');

  return removeEmpty({
    ...metadata,
    refCollection,
    attributeReferences
  }) as BFFMetadataCollectionVariable;
};

const transformRecordLink = (
  dataRecordGroup: DataGroup,
  metadata: BFFMetadata
): BFFMetadataRecordLink => {
  if (containsChildWithNameInData(dataRecordGroup, 'finalValue')) {
    const finalValue = getFirstDataAtomicValueWithNameInData(dataRecordGroup, 'finalValue');
    metadata = { ...metadata, finalValue } as BFFMetadata;
  }

  const attributeReferences = extractAttributesReferences(dataRecordGroup);
  const linkedRecordType = extractLinkedRecordIdFromNamedRecordLink(
    dataRecordGroup,
    'linkedRecordType'
  );

  return removeEmpty({
    ...metadata,
    linkedRecordType,
    attributeReferences
  }) as BFFMetadataRecordLink;
};

const transformItemCollection = (dataRecordGroup: DataGroup, metadata: BFFMetadata) => {
  const collectionItemReferences = getCollectionItemReferencesFromGroup(dataRecordGroup); // collectionItemReferences

  return {
    ...metadata,
    collectionItemReferences
  } as BFFMetadata;
};

const transformMetadataGroup = (dataRecordGroup: DataGroup, metadata: BFFMetadata) => {
  const childReferencesList = getChildReferencesListFromGroup(dataRecordGroup);

  const children: BFFMetadataChildReference[] = childReferencesList.map((childReference) => {
    return transformChildReference(childReference);
  });

  const attributeReferences = extractAttributesReferences(dataRecordGroup);

  return removeEmpty({
    ...metadata,
    attributeReferences,
    children
  }) as BFFMetadataGroup;
};

export const extractAttributesReferences = (dataRecordGroup: DataGroup) => {
  if (containsChildWithNameInData(dataRecordGroup, 'attributeReferences')) {
    const attributesReferencesGroup = getFirstDataGroupWithNameInData(
      dataRecordGroup,
      'attributeReferences'
    );
    const attribRefs = getAllChildrenWithNameInData(attributesReferencesGroup, 'ref');
    return attribRefs.map((attribRef) => {
      const refCollectionVarId = getFirstDataAtomicValueWithNameInData(
        attribRef as RecordLink,
        'linkedRecordId'
      );
      return { refCollectionVarId };
    });
  }
  return undefined;
};

export const getChildReferencesListFromGroup = (dataRecordGroup: DataGroup) => {
  const childReferences = getFirstDataGroupWithNameInData(dataRecordGroup, 'childReferences');

  return getAllDataGroupsWithNameInDataAndAttributes(childReferences, 'childReference');
};

export const getCollectionItemReferencesFromGroup = (dataRecordGroup: DataGroup) => {
  const collectionItemReferencesGroup = getFirstDataGroupWithNameInData(
    dataRecordGroup,
    'collectionItemReferences'
  );
  return collectionItemReferencesGroup.children.map((collectionRef) => {
    return {
      refCollectionItemId: getFirstDataAtomicValueWithNameInData(
        collectionRef as DataGroup,
        'linkedRecordId'
      )
    };
  });
};

const transformChildReference = (childReference: DataGroup): BFFMetadataChildReference => {
  const childId = extractLinkedRecordIdFromNamedRecordLink(childReference, 'ref');
  const repeatMin = getFirstDataAtomicValueWithNameInData(childReference, 'repeatMin');
  const repeatMax = getFirstDataAtomicValueWithNameInData(childReference, 'repeatMax');

  let recordPartConstraint;
  if (containsChildWithNameInData(childReference, 'recordPartConstraint')) {
    recordPartConstraint = getFirstDataAtomicValueWithNameInData(
      childReference,
      'recordPartConstraint'
    );
  }

  return removeEmpty({
    childId,
    repeatMin,
    repeatMax,
    recordPartConstraint
  }) as BFFMetadataChildReference;
};
