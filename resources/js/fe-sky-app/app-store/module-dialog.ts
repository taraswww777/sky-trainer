import {Module} from 'vuex';
import {DialogFlowDto} from '@src/types/dto';
import {STATUSES} from '@src/constants/common';
import {trim} from 'lodash';

export interface ModuleDialogState {
  dialogFlow: DialogFlowDto[],
  messages: any[],
  dialogOptions?: any,
  status: STATUSES,
  isOnRec: boolean
}

export const moduleDialog: Module<ModuleDialogState, any> = {
  state: {
    dialogFlow: [],
    messages: [],
    status: STATUSES.new,
    isOnRec: false
  },
  getters: {
    getDialogFlow: (state): DialogFlowDto[] => (state.dialogFlow),
    getLastItemDialogFlow: (state) => (state.dialogFlow.at(-1)),
    getNextHelpPhrases: (state) => (
      state.dialogFlow.at(-1)?.next_phrases?.phrases?.[0].map((v) => trim(v))
    ),
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
