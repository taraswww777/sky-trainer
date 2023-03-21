import {CurrentUserDto} from '@src/types/dto';
import {axiosAuthGet} from './_base';

export const getCurrentUser = () => (
  axiosAuthGet<CurrentUserDto>({
    url: '/current-user'
  })
);
