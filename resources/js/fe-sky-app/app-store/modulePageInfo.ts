import {type Module} from 'vuex';

export interface StorePageInfoState {
  pageTitle: string,
  pageIsLoading: boolean
}

export const modulePageInfo: Module<StorePageInfoState, any> = {
  state: {
    pageTitle: '',
    pageIsLoading: false
  },
  getters: {
    getPageTitle(state) {
      return state.pageTitle;
    },
    getPageIsLoading(state) {
      return state.pageIsLoading;
    }
  },
  mutations: {
    setPageTitle(state, value: string) {
      state.pageTitle = value;
    },
    setPageIsLoading(state, value: boolean) {
      state.pageIsLoading = value;
    }
  },
  actions: {
    setPageTitle({commit}, value: string) {
      commit('setPageTitle', value);
    },
    setPageIsLoading({commit}, value: boolean) {
      commit('setPageIsLoading', value);
    }
  }
};
