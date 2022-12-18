import * as React from 'react';
import axios from 'axios';
import {HTTP_CLIENT} from '../utils/config';
import {ENDPOINTS} from '../utils/constants';

const getTodo = () => {
  return HTTP_CLIENT.get(ENDPOINTS.GETTODO);
};
const updateTodo = (id, params) => {
  console.log(...params.description, `${ENDPOINTS.ADDTODO}/${id}`, 'PARAM');
  return HTTP_CLIENT.put(`${ENDPOINTS.ADDTODO}/${id}`, params);
};
const deleteTodo = id => {
  return HTTP_CLIENT.delete(`${ENDPOINTS.ADDTODO}/${id}`);
};
function addTodo(values) {
  console.log(values, 'FORMDATA');
  let bodyFormData = new FormData();
  bodyFormData.append('title', values.title);
  bodyFormData.append('description', values.description);
  //   console.log(bodyFormData, authToken, 'dkjsdk');
  return axios({
    method: 'post',
    url: 'http://3.232.244.22/api/item',
    data: bodyFormData,
    //   config: {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${values?.authtoken}`,
    },
  });
}

export {addTodo, getTodo, updateTodo, deleteTodo};
