import {Store} from 'vuex';
import {AppStore} from '@src/app-store';
import {PostDialogSpeechResultParams} from '@src/api/_dialog';
import {apiClient} from '@src/api';
import {STATUSES} from '@src/constants/common';
import {actionPlayAudioCall} from './actionPlayAudioCall';

export const actionContinueCall = ($store: Store<AppStore>) => async (
  params: PostDialogSpeechResultParams
) => {
  const {data: dialogFlow} = await apiClient.postDialogSpeechResult(params);
  await $store.commit('pushDialogFlow', dialogFlow);

  await actionPlayAudioCall($store)();

  if (dialogFlow.dialog_end) {
    await $store.commit('setStatus', STATUSES.end);
    alert('Диалог завершён');
  }
};
