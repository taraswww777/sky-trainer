import {Store} from 'vuex';
import {apiClient} from '@src/api';
import {STATUSES} from '@src/constants/common';
import {AppStore} from '@src/app-store';

interface StartCallParams {
  courseId: string,
  phaseId: string,
  stageId: string,
  trainerId: string,
}

export const actionStartCall = ($store: Store<AppStore>) => async (
  params: StartCallParams
) => {
  await $store.commit('setLoadingStart');

  try {
    const {data} = await apiClient.getDialogStart(params);
    await $store.commit('pushDialogFlow', data);
    await $store.commit('setStatus', STATUSES.inProgress);
  } catch (e) {
    await $store.commit('setLoadingStop');
  }

  await $store.commit('setLoadingStop');
};
