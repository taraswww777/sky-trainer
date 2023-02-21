export const moduleDialog = {
  state: {
    messages: [],
    dialogs: [],
    helpPhrases: [],
    dialogLogs: [],
  },
  getters: {
    getDialogsData(state) {
      return state.dialogs;
    },
    getHelpPhrases(state) {
      return state.helpPhrases;
    },
    getDialogLogs(state) {
      return state.dialogLogs;
    },
  },
  mutations: {
    pushDialog(state, dialogData) {
      state.dialogs.push(dialogData);
    },
    setHelpPhrases(state, helpPhrases) {
      state.helpPhrases = helpPhrases;
    },
    setDialogLogs(state, dialogLogs) {
      state.dialogLogs = dialogLogs;
    },
  },
  actions: {
    setHelpPhrases({commit}, helpPhrases) {
      commit('setHelpPhrases', helpPhrases);
    },
    setDialogLogs({commit}, dialogLogs) {
      commit('setDialogLogs', dialogLogs);
    },
    pushDialog({commit}, dialogData) {
      commit('pushDialog', dialogData);
    },
  },
};
