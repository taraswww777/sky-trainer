import {isString} from 'lodash';
import {appRouter} from '@src/app-router';
import {PAGE_NAMES} from '@src/constants';
import {apiClient} from '@src/api';
import {isLogin} from '../storage-token';

export const refreshCurrentUser = (dispatch) => {
  if (isLogin()) {
    return apiClient.getCurrentUser().then(({data}) => {
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
