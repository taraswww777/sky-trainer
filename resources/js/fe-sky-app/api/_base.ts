import axios, {AxiosPromise} from 'axios';
import {getToken} from '@src/modules/auth';
import {API_URL} from './_constants';

export const axiosPost = <TResponse = any>(axiosParams = {}) => (
  axios<TResponse>({
    headers: {
      Accept: 'application/json'
    },
    method: 'post',
    baseURL: API_URL,
    ...axiosParams
  })
);

export const axiosAuthGet = <TResponse = any>(axiosParams = {}): AxiosPromise<TResponse> => (
  axios<TResponse>({
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${getToken()}`
    },
    method: 'get',
    baseURL: API_URL,
    ...axiosParams
  })
);
