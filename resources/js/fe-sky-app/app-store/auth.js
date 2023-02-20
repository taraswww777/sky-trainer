import {isString} from 'lodash';
import {requestCurrentUser} from '../requests';
import {appRouter} from '../app-router';
import {PAGE_NAMES} from '../constants';

export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const getToken = () => localStorage.getItem('token');

export const removeToken = () => {
  localStorage.removeItem('token');
};

export const isLogin = () => Boolean(getToken());

export const refreshCurrentUser = (dispatch) => {
  if (isLogin()) {
    return requestCurrentUser().then(({data}) => {
      if (!isString(data)) {
        dispatch('setCurrentUserInfo', data);
        return true;
      }
      appRouter.push({name: PAGE_NAMES.logout});

      return false;
    });
  }
  return Promise.resolve(false);
};
