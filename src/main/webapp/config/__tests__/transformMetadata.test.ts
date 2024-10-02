import { transformMetadata } from '../transformMetadata';
import emptyTestData from '../../__mocks__/emptyDataList.json';
import testMetaData from '../../__mocks__/coraMetadata.json';
import testMetaDataWithFinalValue from '../../__mocks__/coraMetadataWithFinalValue.json';
import testMetaDataForGroupWithTwoChildren from '../../__mocks__/coraMetadataForGroupWithTwoChildren.json';
import testNumberVariableMetaData from '../../__mocks__/coraMetadataNumberVariable.json';
import testNumberVariableWithFinalValueMetaData from '../../__mocks__/coraMetadataNumberVariableWithFinalValue.json';
import testCollectionVariableMetaData from '../../__mocks__/coraMetadataCollectionVariable.json';
import testCollectionVariableMetaDataWithFinalValue from '../../__mocks__/coraMetadataCollectionVariableWithFinalValue.json';
import testItemCollection from '../../__mocks__/coraMetadataItemCollection.json';
import testTestCollectionItem from '../../__mocks__/coraMetadataCollectionItem.json';
import testTextWithOneAttribute from '../../__mocks__/coraMetadataTextVarWithOneAttribute.json';
import testTestWithTwoAttributes from '../../__mocks__/coraMetadataTextVarWithTwoAttributes.json';
import testNumberWithTwoAttributes from '../../__mocks__/coraMetadataNumberVarWithTwoAttributes.json';
import testCollectionWithTwoAttributes from '../../__mocks__/coraMetadataCollectionVarWithTwoAttributes.json';
import testMetadataGroupWithAttribute from '../../__mocks__/coraMetadataGroupWithAttribute.json';
import testMetadataRecordLink from '../../__mocks__/coraMetadataRecordLink.json';
import testMetadataRecordLinkWithFinalValue from '../../__mocks__/coraMetadataRecordLinkWithFinalValue.json';
import { DataListWrapper } from '../../utils/cora-data/CoraData';

describe('transformMetadata', () => {
  it('Empty list should return empty', () => {
    const metadataList = transformMetadata(emptyTestData);
    expect(metadataList).toStrictEqual([]);
  });

  it('Returns one metadata entry', () => {
    const metadataList = transformMetadata(testMetaData);
    expect(metadataList).toHaveLength(1);
  });

  it('Returns one metadata entry with id', () => {
    const metadataList = transformMetadata(testMetaData);
    const firstMetadata = metadataList[0];
    expect(firstMetadata.id).toEqual('someTextVar');
  });

  it('Return one metadata with type from attribute', () => {
    const metadataList = transformMetadata(testMetaData);
    const firstMetadata = metadataList[0];
    expect(firstMetadata.type).toEqual('textVariable');
  });

  describe('textVariable', () => {
    it('Returns one BFFMetadata for textVariable without finalValue', () => {
      const metadataList = transformMetadata(testMetaData);
      expect(metadataList).toHaveLength(1);
      expect(metadataList[0]).toStrictEqual({
        id: 'someTextVar',
        dataDivider: 'someDataDivider',
        nameInData: 'someNameInData',
        type: 'textVariable',
        textId: 'someTextVarText',
        defTextId: 'someTextVarDefText',
        regEx: '.*'
      });
      expect(Object.hasOwn(metadataList[0], 'finalValue')).toBe(false);
    });

    it('Returns one BFFMetadata for textVariable with finalValue', () => {
      const metadataList = transformMetadata(testMetaDataWithFinalValue);
      expect(metadataList).toHaveLength(1);
      expect(metadataList[0]).toStrictEqual({
        id: 'someTextVar',
        dataDivider: 'cora',
        nameInData: 'someNameInData',
        type: 'textVariable',
        textId: 'someTextVarText',
        defTextId: 'someTextVarDefText',
        regEx: '.*',
        finalValue: 'someFinalValue'
      });
    });
  });

  describe('metadataGroup', () => {
    it('Returns one BFFMetadata for group', () => {
      const metadataList = transformMetadata(testMetaDataForGroupWithTwoChildren);
      expect(metadataList).toHaveLength(1);
      expect(metadataList[0]).toStrictEqual({
        id: 'someGroup',
        dataDivider: 'testSystem',
        nameInData: 'someGroupNameInData',
        type: 'group',
        textId: 'someGroupText',
        defTextId: 'someGroupDefText',
        children: [
          {
            childId: 'someChild0',
            repeatMin: '0',
            repeatMax: '1',
            recordPartConstraint: 'readWrite'
          },
          {
            childId: 'someChild1',
            repeatMin: '2',
            repeatMax: '3',
            recordPartConstraint: 'write'
          },
          {
            childId: 'someChild2',
            repeatMin: '4',
            repeatMax: '5'
          }
        ]
      });

      expect(Object.hasOwn(metadataList[0], 'finalValue')).toBe(false);
    });
  });

  describe('numberVariable', () => {
    it('Returns one BFFMetadata for numberVariable without finalValue', () => {
      const metadataList = transformMetadata(testNumberVariableMetaData);
      expect(metadataList).toHaveLength(1);
      expect(metadataList[0]).toStrictEqual({
        id: 'someNumberVar',
        dataDivider: 'cora',
        nameInData: 'someNameInDataNumberVar',
        type: 'numberVariable',
        textId: 'someNumberVarText',
        defTextId: 'someNumberVarDefText',
        min: '0',
        max: '20',
        warningMin: '2',
        warningMax: '10',
        numberOfDecimals: '3'
      });
      expect(Object.hasOwn(metadataList[0], 'finalValue')).toBe(false);
    });

    it('Returns one BFFMetadata for numberVariable with finalValue', () => {
      const metadataList = transformMetadata(testNumberVariableWithFinalValueMetaData);
      expect(metadataList).toHaveLength(1);
      expect(metadataList[0]).toStrictEqual({
        id: 'someNumberVar',
        dataDivider: 'cora',
        nameInData: 'someNameInDataNumberVar',
        type: 'numberVariable',
        textId: 'someNumberVarText',
        defTextId: 'someNumberVarDefText',
        min: '0',
        max: '20',
        warningMin: '2',
        warningMax: '10',
        numberOfDecimals: '3',
        finalValue: '50.123'
      });
      expect(Object.hasOwn(metadataList[0], 'finalValue')).toBe(true);
    });
  });

  describe('collectionVariable', () => {
    it('Returns one BFFMetadata for collectionVariable without finalValue', () => {
      const metadataList = transformMetadata(testCollectionVariableMetaData as DataListWrapper);
      expect(metadataList).toHaveLength(1);
      expect(metadataList[0]).toStrictEqual({
        id: 'exampleCollectionVar',
        dataDivider: 'testSystem',
        nameInData: 'colour',
        type: 'collectionVariable',
        textId: 'exampleCollectionVarText',
        defTextId: 'exampleCollectionVarDefText',
        refCollection: 'exampleCollection'
      });
      expect(Object.hasOwn(metadataList[0], 'finalValue')).toBe(false);
    });

    it('Returns one BFFMetadata for collectionVariable with finalValue', () => {
      const metadataList = transformMetadata(
        testCollectionVariableMetaDataWithFinalValue as DataListWrapper
      );
      expect(metadataList).toHaveLength(1);
      expect(metadataList[0]).toStrictEqual({
        id: 'exampleCollectionVar',
        dataDivider: 'testSystem',
        nameInData: 'colour',
        type: 'collectionVariable',
        textId: 'exampleCollectionVarText',
        defTextId: 'exampleCollectionVarDefText',
        refCollection: 'exampleCollection',
        finalValue: 'blue'
      });
      expect(Object.hasOwn(metadataList[0], 'finalValue')).toBe(true);
    });
  });

  describe('itemCollection', () => {
    it('Returns one BFFMetadata for itemCollection', () => {
      // @ts-ignore
      const metadataList = transformMetadata(testItemCollection as DataListWrapper);
      expect(metadataList).toHaveLength(1);
      expect(metadataList[0]).toStrictEqual({
        id: 'exampleCollection',
        dataDivider: 'testSystem',
        nameInData: 'colour',
        type: 'itemCollection',
        textId: 'exampleCollectionText',
        defTextId: 'exampleCollectionDefText',
        collectionItemReferences: [
          { refCollectionItemId: 'exampleBlueItem' },
          { refCollectionItemId: 'examplePinkItem' },
          { refCollectionItemId: 'exampleYellowItem' }
        ]
      });
    });
  });

  describe('collectionItem', () => {
    it('Returns one BFFMetadata for collectionItem', () => {
      const metadataList = transformMetadata(testTestCollectionItem as DataListWrapper);
      expect(metadataList).toHaveLength(1);
      expect(metadataList[0]).toStrictEqual({
        id: 'exampleBlueItem',
        dataDivider: 'testSystem',
        nameInData: 'blue',
        type: 'collectionItem',
        textId: 'exampleBlueItemText',
        defTextId: 'exampleBlueItemDefText'
      });
    });
  });

  describe('attributeReference', () => {
    it('Returns one BFFMetadataGroup with one attributeReference', () => {
      const metadataList = transformMetadata(testMetadataGroupWithAttribute as DataListWrapper);
      expect(metadataList).toHaveLength(1);
      expect(metadataList[0]).toStrictEqual({
        id: 'demoNewGroup',
        dataDivider: 'testSystem',
        nameInData: 'book',
        type: 'group',
        textId: 'demoGroupText',
        defTextId: 'demoGroupDefText',
        attributeReferences: [
          {
            refCollectionVarId: 'exampleAttributeFinalCollectionVar'
          }
        ],
        children: [
          {
            childId: 'recordInfoNewGroup',
            repeatMin: '1',
            repeatMax: '1'
          }
        ]
      });
    });
    it('Returns one BFFMetadataTextVariable with one attributeReference', () => {
      const metadataList = transformMetadata(testTextWithOneAttribute as DataListWrapper);
      expect(metadataList).toHaveLength(1);
      expect(metadataList[0]).toStrictEqual({
        id: 'someTextVar',
        dataDivider: 'testSystem',
        nameInData: 'someNameInData',
        type: 'textVariable',
        textId: 'someTextVarText',
        defTextId: 'someTextVarDefText',
        regEx: 'someRegEx',
        attributeReferences: [
          {
            refCollectionVarId: 'exampleAttributeFinalCollectionVar'
          }
        ]
      });
    });
    it('Returns one BFFMetadataTextVariable with two attributeReference', () => {
      const metadataList = transformMetadata(testTestWithTwoAttributes as DataListWrapper);
      expect(metadataList).toHaveLength(1);
      expect(metadataList[0]).toStrictEqual({
        id: 'someTextVar',
        dataDivider: 'testSystem',
        nameInData: 'someNameInData',
        type: 'textVariable',
        textId: 'someTextVarText',
        defTextId: 'someTextVarDefText',
        regEx: 'someRegEx',
        attributeReferences: [
          {
            refCollectionVarId: 'exampleAttributeFinalCollectionVar1'
          },
          {
            refCollectionVarId: 'exampleAttributeFinalCollectionVar2'
          }
        ]
      });
    });
    it('Returns one BFFMetadataNumberVariable with two attributeReference', () => {
      const metadataList = transformMetadata(testNumberWithTwoAttributes as DataListWrapper);
      expect(metadataList).toHaveLength(1);
      expect(metadataList[0]).toStrictEqual({
        id: 'someNumberVar',
        dataDivider: 'testSystem',
        nameInData: 'someNameInData',
        type: 'numberVariable',
        textId: 'someTextVarText',
        defTextId: 'someTextVarDefText',
        min: '0',
        max: '20',
        warningMin: '2',
        warningMax: '10',
        numberOfDecimals: '3',
        attributeReferences: [
          {
            refCollectionVarId: 'exampleAttributeFinalCollectionVar1'
          },
          {
            refCollectionVarId: 'exampleAttributeFinalCollectionVar2'
          }
        ]
      });
    });

    it('Returns one BFFMetadataCollectionVariable with two attributeReference', () => {
      const metadataList = transformMetadata(testCollectionWithTwoAttributes as DataListWrapper);
      expect(metadataList).toHaveLength(1);
      expect(metadataList[0]).toStrictEqual({
        id: 'someCollectionVar',
        dataDivider: 'testSystem',
        nameInData: 'someNameInData',
        type: 'collectionVariable',
        textId: 'someTextVarText',
        defTextId: 'someTextVarDefText',
        refCollection: 'exampleCollection',
        attributeReferences: [
          {
            refCollectionVarId: 'exampleAttributeFinalCollectionVar1'
          },
          {
            refCollectionVarId: 'exampleAttributeFinalCollectionVar2'
          }
        ]
      });
    });
  });

  describe('recordLink', () => {
    it('Returns one BFFMetadata for recordLink without finalValue', () => {
      const metadataList = transformMetadata(testMetadataRecordLink as DataListWrapper);
      expect(metadataList).toHaveLength(1);
      expect(metadataList[0]).toStrictEqual({
        id: 'nationalSubjectCategoryLink',
        dataDivider: 'diva',
        nameInData: 'nationalSubjectCategory',
        type: 'recordLink',
        textId: 'nationalSubjectCategoryLinkText',
        defTextId: 'nationalSubjectCategoryLinkDefText',
        linkedRecordType: 'nationalSubjectCategory'
      });
    });

    it('Returns one BFFMetadata for recordLink with finalValue and one attribute', () => {
      const metadataList = transformMetadata(
        testMetadataRecordLinkWithFinalValue as DataListWrapper
      );
      expect(metadataList).toHaveLength(1);
      expect(metadataList[0]).toStrictEqual({
        id: 'nationalSubjectCategoryLink',
        dataDivider: 'diva',
        nameInData: 'nationalSubjectCategory',
        type: 'recordLink',
        textId: 'nationalSubjectCategoryLinkText',
        defTextId: 'nationalSubjectCategoryLinkDefText',
        linkedRecordType: 'nationalSubjectCategory',
        finalValue: 'someFinalSubjectCategory',
        attributeReferences: [
          {
            refCollectionVarId: 'exampleAttributeFinalCollectionVar'
          }
        ]
      });
    });
  });
});
