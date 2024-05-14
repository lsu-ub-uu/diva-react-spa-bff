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

import axios, { AxiosResponse } from 'axios';
import { Auth } from '../types/Auth';
import { CoraRecord, DataGroup } from '../utils/cora-data/CoraData';

import { getFirstDataAtomicValueWithNameInData } from '../utils/cora-data/CoraDataUtilsWrappers';

export const requestAuthTokenOnLogin = async (
  user: string,
  APP_TOKEN_ADMIN: string | undefined
): Promise<Auth> => {
  const { CORA_LOGIN_URL } = process.env;
  const rootUrl = `${CORA_LOGIN_URL}/apptoken/`;

  const url = `${rootUrl}${user}`;
  const headers = {
    'Content-Type': 'text/plain;charset=UTF-8'
  };

  const response: AxiosResponse = await axios.post(url, APP_TOKEN_ADMIN, { headers });
  return extractDataFromResult(response.data);
};

export const extractDataFromResult = (record: CoraRecord): Auth => {
  const dataGroup: DataGroup = record.data;
  const id = getFirstDataAtomicValueWithNameInData(dataGroup, 'id');
  const validForNoSeconds = getFirstDataAtomicValueWithNameInData(dataGroup, 'validForNoSeconds');
  const idInUserStorage = getFirstDataAtomicValueWithNameInData(dataGroup, 'idInUserStorage');
  const idFromLogin = getFirstDataAtomicValueWithNameInData(dataGroup, 'idFromLogin');
  const firstName = getFirstDataAtomicValueWithNameInData(dataGroup, 'firstName');
  const lastName = getFirstDataAtomicValueWithNameInData(dataGroup, 'lastName');
  const logoutURL = record.actionLinks?.delete?.url ?? '';

  return new Auth(
    id,
    validForNoSeconds,
    idInUserStorage,
    idFromLogin,
    firstName,
    lastName,
    logoutURL
  );
};

export const deleteAuthTokenOnLogout = async (
  user: string,
  APP_TOKEN_ADMIN: string | undefined
) => {
  const { CORA_LOGIN_URL } = process.env;
  const rootUrl = `${CORA_LOGIN_URL}/apptoken/`;

  const url = `${rootUrl}${user}`;

  const response = await axios.delete(url, { data: APP_TOKEN_ADMIN });
  return response;
};
