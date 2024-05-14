import express from 'express';
import {
  deleteAppTokenFromCora,
  getAllLoginUnits,
  postAppTokenToGetAuthToken
} from '../controllers/authController';

const authRoute = express.Router();

authRoute.route('/:user').post(postAppTokenToGetAuthToken);
authRoute.route('/:user').delete(deleteAppTokenFromCora);
authRoute.route('/loginUnits').get(getAllLoginUnits);

export { authRoute };
