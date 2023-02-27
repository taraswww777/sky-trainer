import {axiosPost} from './base';

export const requestLogin = async ({email, password}) => (
  axiosPost({
    params: {
      email,
      password
    },
    url: '/token'
  })
);
