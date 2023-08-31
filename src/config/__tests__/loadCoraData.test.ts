import testData from '../../__mocks__/coraDivaRecordTypes.json';
import testData2 from '../../__mocks__/coraDivaRecordTypes2.json';
import emptyTestData from '../../__mocks__/emptyDataList.json';
import { transformCoraRecordTypes } from '../loadCoraData';

describe('loadCoraData', () => {
  // describe('loadCoraData', () => {
  //   it('transform from cora to bff', () => {});
  // });
  describe('transformCoraRecordType', () => {
    it('Empty list should return empty list', () => {
      const transformData = transformCoraRecordTypes(emptyTestData);
      expect(transformData).toStrictEqual([]);
    });
    it('Returns one entry', () => {
      const transformData = transformCoraRecordTypes(testData);
      expect(transformData).toHaveLength(1);
    });
    it('Returns one entry with id', () => {
      const transformData = transformCoraRecordTypes(testData);
      const firstRecordType = transformData[0];
      expect(firstRecordType.id).toEqual('someId');
    });
    it('Returns two entries with id', () => {
      const transformData = transformCoraRecordTypes(testData2);
      const firstRecordType = transformData[0];
      expect(firstRecordType.id).toEqual('someOtherId1');
      const secondRecordType = transformData[1];
      expect(secondRecordType.id).toEqual('someOtherId2');
    });
  });
});
