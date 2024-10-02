import { DataGroup } from './CoraData';
import { getFirstDataGroupWithNameInData } from './CoraDataUtils';
import { getFirstDataAtomicValueWithNameInData } from './CoraDataUtilsWrappers';

export const extractIdFromRecordInfo = (coraRecordGroup: DataGroup) => {
  const recordInfo = getFirstDataGroupWithNameInData(coraRecordGroup, 'recordInfo') as DataGroup;
  return getFirstDataAtomicValueWithNameInData(recordInfo, 'id');
};

export const extractDataDividerFromRecordInfo = (coraRecordGroup: DataGroup) => {
  const recordInfo = getFirstDataGroupWithNameInData(coraRecordGroup, 'recordInfo') as DataGroup;
  return extractLinkedRecordIdFromNamedRecordLink(recordInfo, 'dataDivider');
};

export const extractAttributeValueByName = (
  dataRecordGroup: DataGroup,
  attributeName: string
): string => {
  if (
    dataRecordGroup.attributes === undefined ||
    dataRecordGroup.attributes[attributeName] === undefined
  ) {
    throw new Error(`Attribute with name [${attributeName}] does not exist`);
  }

  return dataRecordGroup.attributes[attributeName];
};

export const extractLinkedRecordIdFromNamedRecordLink = (
  coraRecordGroup: DataGroup,
  linkName: string
) => {
  const recordLink = getFirstDataGroupWithNameInData(coraRecordGroup, linkName) as DataGroup;
  return getFirstDataAtomicValueWithNameInData(recordLink, 'linkedRecordId');
};
