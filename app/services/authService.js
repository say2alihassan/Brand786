import {HTTP_CLIENT} from '../utils/config';
import {ENDPOINTS} from '../utils/constants';

export const loginRequest = params => {
  return HTTP_CLIENT.post(ENDPOINTS.LOGIN, params);
};

export const RegisterRequest = params => {
  return HTTP_CLIENT.post(ENDPOINTS.REGISTER, params);
};
export const logOutRequest = params => {
  return HTTP_CLIENT.post(ENDPOINTS.LOGOUT, params);
};
