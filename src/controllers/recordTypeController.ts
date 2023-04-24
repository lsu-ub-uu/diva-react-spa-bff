import { Request, Response } from 'express';
import axios from 'axios';
import { findRecordTypeByName } from '../services/recordTypeServives';

const { BASEURL } = process.env;

// @desc		Get recordType by id
// @route		GET /api/publication/:id
// @access	Public
export const getRecordTypeByName = async (
  req: Request,
  res: Response,
  error: unknown,
) => {
  try {
    const recordType = req.params.name;
    let responseArray = [];
    const config = {
      headers: {
        Accept: 'application/vnd.uub.record+json',
      },
    };
    const response = await axios.get(
      `${BASEURL}/record/recordType/${recordType}`,
      config,
    );

    /*  const response = await axios.get(
      `https://cora.epc.ub.uu.se/systemone/rest/record/recordType/${recordType}`,
      config,
    ); */

    responseArray = response.data.record.data.children;
    // res.status(200).json(responseArray);
    res.status(200).json(findRecordTypeByName(responseArray));
  } catch {
    console.log(error);
    throw new Error(`${error}`);
  }
};
