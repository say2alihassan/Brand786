import * as React from 'react';

const navigationRef = React.createRef();
const CONSTANTS = {
  BASE_URL: 'http://3.232.244.22/api/',
};

const ENDPOINTS = {
  LOGIN: 'login',
  REGISTER: 'register',
  ADDTODO: 'item',
  GETTODO: 'items',
  LOGOUT: 'logout',
};

export {CONSTANTS, ENDPOINTS, navigationRef};
