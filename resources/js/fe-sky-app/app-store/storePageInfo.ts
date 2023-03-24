import {createStore} from 'vuex';

export interface StorePageInfoState {
  pageTitle: string,
  isLoading: boolean
}

export const storePageInfo = createStore<StorePageInfoState>({
  state: {
    pageTitle: '',
    isLoading: false
  },
  getters: {
    getPageTitle(state) {
      return state.pageTitle;
    },
    getIsLoading(state) {
      return state.isLoading;
    }
  },
  mutations: {
    setPageTitle(state, value: string) {
      state.pageTitle = value;
    },
    setIsLoading(state, value: boolean) {
      state.isLoading = value;
    }
  },
  actions: {
    setPageTitle({commit}, value: string) {
      commit('setPageTitle', value);
    },
    setIsLoading({commit}, value: boolean) {
      commit('setIsLoading', value);
    }
  }
});
