const DEFAULT_LOADING_NAME = 'default';

export const moduleLoadings = {
  state: {
    loadings: {
      [DEFAULT_LOADING_NAME]: false
    }
  },
  getters: {
    getIsLoading(state, loaderName = DEFAULT_LOADING_NAME) {
      return Boolean(state.loadings[loaderName]);
    }
  },
  mutations: {
    setLoadingStart(state, loaderName = DEFAULT_LOADING_NAME) {
      console.log('setLoadingStart');
      state.loadings[loaderName] = true;
    },
    setLoadingStop(state, loaderName = DEFAULT_LOADING_NAME) {
      console.log('setLoadingStop');
      state.loadings[loaderName] = false;
    }
  },
  actions: {
    setLoadingStart({commit}, loaderName = DEFAULT_LOADING_NAME) {
      commit('setLoadingStart', loaderName);
    },
    setLoadingStop({commit}, loaderName = DEFAULT_LOADING_NAME) {
      commit('setLoadingStop', loaderName);
    }
  }
};
