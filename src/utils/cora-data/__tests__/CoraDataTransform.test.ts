import testMetaData from '../../../__mocks__/coraMetadata.json';
import {
  extractIdFromRecordInfo,
  extractAttributeValueByName,
} from '../CoraDataTransforms';

const someRecordGroup = {
  name: 'parent',
  children: [
    {
      name: 'recordInfo',
      children: [
        {
          name: 'id',
          value: 'someTextVar',
        },
      ],
    },
  ],
};

const someGroupWithAttribute = {
  name: 'parent',
  children: [
    {
      name: 'id',
      value: 'someTextVar',
    },
  ],
  attributes: {
    type: 'someTextVariable',
  },
};

describe('CoraDataTransform', () => {
  describe('extractIdFromRecordInfo', () => {
    it('returns id from recordInfo', () => {
      const id = extractIdFromRecordInfo(someRecordGroup);
      expect(id).toEqual('someTextVar');
    });
  });
  describe('extractAttributeValueByName', () => {
    it('returns an attribute from DataGroup', () => {
      const attribute = extractAttributeValueByName(
        someGroupWithAttribute,
        'type',
      );
      expect(attribute).toEqual('someTextVariable');
    });

    it('throw error when attribute does not exist for DataGroup', () => {
      expect(() => {
        extractAttributeValueByName(
          someGroupWithAttribute,
          'wrongAttributeName',
        );
      }).toThrow(Error);

      try {
        extractAttributeValueByName(
          someGroupWithAttribute,
          'wrongAttributeName',
        );
      } catch (error: unknown) {
        const attributeError: Error = <Error>error;
        expect(attributeError.message).toStrictEqual(
          'Attribute with name [wrongAttributeName] does not exist',
        );
      }
    });
    it('throw error when attributes container does not exist for DataGroup', () => {
      expect(() => {
        extractAttributeValueByName(someRecordGroup, 'someAttributeName');
      }).toThrow(Error);

      try {
        extractAttributeValueByName(someRecordGroup, 'someAttributeName');
      } catch (error: unknown) {
        const attributeError: Error = <Error>error;
        expect(attributeError.message).toStrictEqual(
          'Attribute with name [someAttributeName] does not exist',
        );
      }
    });
  });
});
