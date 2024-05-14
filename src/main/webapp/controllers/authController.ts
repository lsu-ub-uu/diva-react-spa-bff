import { Request, Response } from 'express';
import * as console from 'console';
import { deleteAuthTokenFromCora, requestAuthTokenOnLogin } from '../cora/auth';
import { errorHandler } from '../server';
import { DataGroup, DataListWrapper } from '../utils/cora-data/CoraData';
import { getSearchResultDataListBySearchType } from '../cora/record';

/**
 * @desc Post appToken to get authToken
 * @route POST /api/auth/:user
 * @access Public
 */
export const postAppTokenToGetAuthToken = async (req: Request, res: Response) => {
  const { user } = req.params;
  const authToken = req.body.token;
  console.log('aT', authToken);
  try {
    const response = await requestAuthTokenOnLogin(user, authToken);
    // console.log('authToken', authToken);
    res.status(201).json({ response });
  } catch (error: unknown) {
    console.log(error);
    const errorResponse = errorHandler(error);
    res.status(errorResponse.status).json(errorResponse).send();
  }
};

/**
 * @desc Delete appToken to get authToken
 * @route DELETE /api/auth/:user
 * @access Private
 */
export const deleteAuthTokenOnLogout = async (req: Request, res: Response) => {
  const { user } = req.params;
  const appToken = req.body.token;

  try {
    const response = await deleteAuthTokenFromCora(user, appToken);
    console.log('response', response);
    res.status(response.status);
  } catch (error: unknown) {
    console.log(error);
    const errorResponse = errorHandler(error);
    res.status(errorResponse.status).json(errorResponse).send();
  }
};

/**
 * @desc Get loginUnits from Cora
 * @route GET /api/auth/loginUnits
 * @access Public
 */
export const getAllLoginUnits = async (req: Request, res: Response) => {
  try {
    // const authToken = req.header('authToken') ?? '';
    const searchQuery: DataGroup = {
      name: 'validationTypeSearch',
      children: [
        {
          name: 'include',
          children: [
            {
              name: 'includePart',
              children: [
                {
                  name: 'validatesRecordTypeSearchTerm',
                  value: 'recordType_divaOutput'
                }
              ]
            }
          ]
        }
      ]
    };

    const response = await getSearchResultDataListBySearchType<DataListWrapper>(
      'validationTypeSearch',
      searchQuery
    );
    // const validationTypes = transformCoraValidationTypes(response.data);
    // const optionList = validationTypes.map((validationType) => ({
    //   value: validationType.id,
    //   label: validationType.nameTextId
    // }));
    res.status(200).json('optionList');
  } catch (error: unknown) {
    const errorResponse = errorHandler(error);
    res.status(errorResponse.status).json(errorResponse).send();
  }
};
