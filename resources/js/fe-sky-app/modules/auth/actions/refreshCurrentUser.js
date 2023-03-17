import {isString} from 'lodash';
import {requestCurrentUser} from '@src/requests';
import {appRouter} from '@src/app-router';
import {PAGE_NAMES} from '@src/constants';
import {isLogin} from '../storage-token';

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
