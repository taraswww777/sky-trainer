import {Store} from 'vuex';
import {STATUSES} from '@src/constants/common';
import {AppStore} from '@src/app-store';
import {appRouter} from '@src/app-router';
import {PAGE_NAMES} from '@src/constants';

export const actionEndCall = ($store: Store<AppStore>) => async () => {
  await $store.commit('setLoadingStart');
  await $store.commit('clearDialogFlow');
  await $store.commit('setStatus', STATUSES.new);
  await appRouter.push({name: PAGE_NAMES.courses});
};
