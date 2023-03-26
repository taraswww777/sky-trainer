import {Module} from 'vuex';
import {DialogFlowDto} from '@src/types/dto';

export interface ModuleDialogState {
  dialogFlow: DialogFlowDto[],
  messages: any[],
  dialogs: any[],
  helpPhrases: any[],
  dialogLogs: any[]
  dialogOptions?: any
}

export const moduleDialog: Module<ModuleDialogState, any> = {
  state: {
    dialogFlow: [],
    messages: [],
    dialogs: [],
    helpPhrases: [],
    dialogLogs: []
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
    getDialogOptions(state) {
      return state.dialogOptions;
    }
  },
  mutations: {
    pushDialogFlow(state, dialogFlow: DialogFlowDto) {
      state.dialogFlow.push(dialogFlow);
    },
    pushDialog(state, dialogData) {
      state.dialogs.push(dialogData);
    },
    setHelpPhrases(state, helpPhrases) {
      state.helpPhrases = helpPhrases;
    },
    setDialogLogs(state, dialogLogs) {
      state.dialogLogs = dialogLogs;
    },
    setDialogOptions(state, dialogOptions) {
      state.dialogOptions = dialogOptions;
    }
  },
  actions: {
    setHelpPhrases({commit}, helpPhrases) {
      commit('setHelpPhrases', helpPhrases);
    },
    setDialogLogs({commit}, dialogLogs) {
      commit('setDialogLogs', dialogLogs);
    },
    pushDialogFlow({commit}, dialogFlow: DialogFlowDto) {
      commit('pushDialogFlow', dialogFlow);
    },
    pushDialog({commit}, dialogData) {
      commit('pushDialog', dialogData);
    },
    setDialogOptions({commit}, dialogOptions) {
      commit('setDialogOptions', dialogOptions);
    }
  }
};
