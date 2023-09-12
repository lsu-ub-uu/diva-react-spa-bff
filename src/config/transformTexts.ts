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

import { DataGroup, DataListWrapper, RecordWrapper } from '../utils/cora-data/CoraData';
import { extractAttributeValueByName, extractIdFromRecordInfo } from '../utils/cora-data/CoraDataTransforms';
import {
  getAllChildrenWithNameInData,
  getAllDataGroupsWithNameInDataAndAttributes,
} from '../utils/cora-data/CoraDataUtils';

export interface BFFText {
  id: string;
}

export const transformCoraTexts = (dataListWrapper: DataListWrapper): BFFText[] => {
  if (dataListWrapper.dataList.data.length === 0) {
    return [];
  }

  const coraRecordWrappers = dataListWrapper.dataList.data;
  return coraRecordWrappers.map(transformCoraTextToBFFText);
};

const transformCoraTextToBFFText = (coraRecordWrapper: RecordWrapper) => {
  const coraRecord = coraRecordWrapper.record;
  const dataRecordGroup = coraRecord.data;
  const id = extractIdFromRecordInfo(dataRecordGroup);

  const textParts = getAllChildrenWithNameInData(dataRecordGroup, 'textPart')

  textParts.map((textPart) => {
    const dg = textPart as DataGroup;
  })
  // const lang = extractAttributeValueByName(textParts[0], 'lang');
  return { id, test: JSON.stringify(textParts) } as BFFText;
};
