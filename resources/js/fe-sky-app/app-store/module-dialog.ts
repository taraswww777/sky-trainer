import {Module} from 'vuex';
import {DialogFlowDto} from '@src/types/dto';
import {STATUSES} from '@src/constants/common';

export interface ModuleDialogState {
  dialogFlow: DialogFlowDto[],
  messages: any[],
  /**
   * @use dialogFlow
   * @deprecated
   * */
  dialogs: any[],
  /**
   * @use dialogFlow
   * @deprecated
   * */
  dialogLogs: any[]
  dialogOptions?: any,
  status: STATUSES,
  isOnRec: boolean
}

export const moduleDialog: Module<ModuleDialogState, any> = {
  state: {
    dialogFlow: [],
    messages: [],
    dialogs: [],
    dialogLogs: [],
    status: STATUSES.new,
    isOnRec: false
  },
  getters: {
    getDialogsData: (state) => (state.dialogs),
    getDialogFlow: (state): DialogFlowDto[] => (state.dialogFlow),
    getLastItemDialogFlow: (state) => (state.dialogFlow.at(-1)),
    getHelpPhrases: (state) => (state.dialogFlow.at(-1)?.next_phrases?.phrases?.[0]),
    getDialogLogs: (state) => (state.dialogLogs),
    getStatus: (state): STATUSES => (state.status),
    getDialogOptions: (state) => (state.dialogOptions),
    getIsOnRec: (state) => (state.isOnRec)
  },
  mutations: {
    pushDialogFlow(state, dialogFlow: DialogFlowDto) {
      state.dialogFlow.push(dialogFlow);
    },
    clearDialogFlow(state) {
      state.dialogFlow = [];
    },
    pushDialog(state, dialogData) {
      state.dialogs.push(dialogData);
    },
    setDialogLogs(state, dialogLogs) {
      state.dialogLogs = dialogLogs;
    },
    setIsOnRec(state, isOnRec: boolean) {
      state.isOnRec = isOnRec;
    },
    setDialogOptions(state, dialogOptions) {
      state.dialogOptions = dialogOptions;
    },
    setStatus(state, status: STATUSES) {
      state.status = status;
    }
  }
};
