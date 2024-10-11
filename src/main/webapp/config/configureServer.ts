import cors from 'cors';
import 'dotenv/config';
import morgan from 'morgan';

import express, { Application, Request } from 'express';
import { getRecordDataListByType } from '../cora/record';
import { DataListWrapper } from '../utils/cora-data/CoraData';
import { transformCoraTexts } from './transformTexts';
import { transformMetadata } from './transformMetadata';
import { listToPool } from '../utils/structs/listToPool';
import {
  BFFGuiElement,
  BFFLoginPassword,
  BFFLoginUnit,
  BFFLoginWebRedirect,
  BFFMetadata,
  BFFPresentation,
  BFFPresentationGroup,
  BFFRecordType,
  BFFSearch,
  BFFText,
  BFFValidationType
} from './bffTypes';
import { transformCoraPresentations } from './transformPresentations';
import { transformCoraValidationTypes } from './transformValidationTypes';
import { transformCoraRecordTypes } from './transformRecordTypes';
import { Dependencies } from '../formDefinition/formDefinitionsDep';
import { transformCoraSearch } from './transformCoraSearch';
import { transformLoginUnit } from './transformLoginUnit';
import { transformLogin } from './transformLogin';

export const configureServer = (app: Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    cors<Request>({
      origin: '*'
    })
  );
  app.use(morgan('dev'));

  return app;
};
const getPoolsFromCora = (poolTypes: string[]) => {
  const promises = poolTypes.map((type) => getRecordDataListByType<DataListWrapper>(type, ''));
  return Promise.all(promises);
};

const dependencies: Dependencies = {
  metadataPool: listToPool<BFFMetadata>([]),
  presentationPool: listToPool<BFFPresentation>([]),
  recordTypePool: listToPool<BFFRecordType>([]),
  textPool: listToPool<BFFText>([]),
  validationTypePool: listToPool<BFFValidationType>([]),
  searchPool: listToPool<BFFSearch>([]),
  loginUnitPool: listToPool<BFFLoginUnit>([]),
  loginPool: listToPool<BFFLoginWebRedirect>([])
};

const loadStuffOnServerStart = async () => {
  const response = await getRecordDataListByType<DataListWrapper>('text', '');
  const texts = transformCoraTexts(response.data);

  const types = [
    'metadata',
    'presentation',
    'validationType',
    'guiElement',
    'recordType',
    'search',
    'loginUnit',
    'login'
  ];
  const result = await getPoolsFromCora(types);

  const metadata = transformMetadata(result[0].data);
  const metadataPool = listToPool<BFFMetadata>(metadata);
  const presentation = transformCoraPresentations(result[1].data);
  const guiElements = transformCoraPresentations(result[3].data);

  const presentationPool = listToPool<BFFPresentation | BFFPresentationGroup | BFFGuiElement>([
    ...presentation,
    ...guiElements
  ]);

  const validationTypes = transformCoraValidationTypes(result[2].data);
  const validationTypePool = listToPool<BFFValidationType>(validationTypes);

  const recordTypes = transformCoraRecordTypes(result[4].data);
  const recordTypePool = listToPool<BFFRecordType>(recordTypes);

  const search = transformCoraSearch(result[5].data);
  const searchPool = listToPool<BFFSearch>(search);

  const loginUnit = transformLoginUnit(result[6].data);
  const loginUnitPool = listToPool<BFFLoginUnit>(loginUnit);

  const login = transformLogin(result[7].data);
  const loginPool = listToPool<BFFLoginWebRedirect | BFFLoginPassword>(login);

  dependencies.validationTypePool = validationTypePool;
  dependencies.recordTypePool = recordTypePool;
  dependencies.metadataPool = metadataPool;
  dependencies.presentationPool = presentationPool;
  dependencies.textPool = listToPool<BFFText>(texts);
  dependencies.searchPool = searchPool;
  dependencies.loginUnitPool = loginUnitPool;
  dependencies.loginPool = loginPool;
};
export { dependencies, loadStuffOnServerStart };
