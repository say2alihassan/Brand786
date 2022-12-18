import axios from 'axios';
import {CONSTANTS} from './constants';

import {store} from '../store';
const user = store.getState().root.user;
const HTTP_CLIENT = axios.create({
  baseURL: CONSTANTS.BASE_URL,
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${user.authToken}`,
  },
});

HTTP_CLIENT.interceptors.request.use(
  config => {
    const user = store.getState().root.user;
    if (user && user.authToken) {
      config.headers.authorization = `Bearer ${user.authToken}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);

export {HTTP_CLIENT};
