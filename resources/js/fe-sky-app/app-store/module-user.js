export const moduleUser = {
  state: {
    currentUserInfo: undefined,
  },
  getters: {
    getCurrentUserInfo(state) {
      return state.currentUserInfo;
    },
  },
  mutations: {
    setCurrentUserInfo(state, currentUserInfo) {
      state.currentUserInfo = currentUserInfo;
    },
  },
  actions: {
    setCurrentUserInfo({commit}, currentUserInfo) {
      commit('setCurrentUserInfo', currentUserInfo);
    },
  },
};
