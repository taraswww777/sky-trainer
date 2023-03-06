import {axiosAuthGet} from './base';

export const requestCurrentUser = () => (
  axiosAuthGet({
    url: '/current-user'
  })
);
