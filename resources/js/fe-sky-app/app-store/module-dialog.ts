import {Module} from 'vuex';
import {DialogFlowDto} from '@src/types/dto';
import {STATUSES} from '@src/constants/common';

export interface ModuleDialogState {
  dialogFlow: DialogFlowDto[],
  messages: any[],
  dialogs: any[],
  dialogLogs: any[]
  dialogOptions?: any,
  status: STATUSES
}

export const moduleDialog: Module<ModuleDialogState, any> = {
  state: {
    dialogFlow: [],
    messages: [],
    dialogs: [],
    dialogLogs: [],
    status: STATUSES.new
  },
  getters: {
    getDialogsData: (state) => (
      state.dialogs
    ),
    getHelpPhrases: (state: ModuleDialogState) => (
      state.dialogFlow.at(-1)?.next_phrases?.phrases?.[0]
    ),
    getDialogLogs: (state) => (
      state.dialogLogs
    ),
    getStatus: (state): STATUSES => (
      state.status
    ),
    getDialogOptions: (state) => (
      state.dialogOptions
    )
  },
  mutations: {
    pushDialogFlow(state, dialogFlow: DialogFlowDto) {
      state.dialogFlow.push(dialogFlow);
    },
    pushDialog(state, dialogData) {
      state.dialogs.push(dialogData);
    },
    setDialogLogs(state, dialogLogs) {
      state.dialogLogs = dialogLogs;
    },
    setDialogOptions(state, dialogOptions) {
      state.dialogOptions = dialogOptions;
    },
    setStatus(state, status: STATUSES) {
      state.status = status;
    }
  }
};
