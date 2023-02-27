import axios from 'axios';
import {getToken} from '../app-store/auth';
import {API_URL} from './constants';

export const axiosPost = (axiosParams = {}) => (
  axios({
    headers: {
      Accept: 'application/json'
    },
    method: 'post',
    baseURL: API_URL,
    ...axiosParams
  })
);

export const axiosAuthGet = (axiosParams = {}) => (
  axios({
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${getToken()}`
    },
    method: 'get',
    baseURL: API_URL,
    ...axiosParams
  })
);
