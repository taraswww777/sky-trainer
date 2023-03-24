import {createStore} from 'vuex';
import {CurrentUserDto} from '@src/types/dto';

export interface ModuleUserState {
  currentUserInfo?: CurrentUserDto | undefined
}

export const moduleUser = createStore<ModuleUserState>({
  state: {
    currentUserInfo: undefined
  },
  getters: {
    getCurrentUserInfo(state) {
      return state.currentUserInfo;
    }
  },
  mutations: {
    setCurrentUserInfo(state, currentUserInfoDto: CurrentUserDto) {
      state.currentUserInfo = currentUserInfoDto;
    }
  },
  actions: {
    setCurrentUserInfo({commit}, currentUserInfoDto: CurrentUserDto) {
      commit('setCurrentUserInfo', currentUserInfoDto);
    }
  }
});
