import {Store} from 'vuex';
import {AppStore} from '@src/app-store';
import {recognizer} from '@src/recognizer';

export const actionMicroOn = ($store: Store<AppStore>) => async () => {
  $store.commit('setIsOnRec', true);
  const res = recognizer.inst.start();
  console.log('actionMicroOn:res:', res, recognizer);
};

export const actionMicroOff = ($store: Store<AppStore>) => async () => {
  console.log('actionMicroOff:');
  $store.commit('setIsOnRec', false);
  recognizer.inst.stop();
};

export const actionMicroToggle = ($store: Store<AppStore>) => async () => {
  console.log('actionMicroToggle:');
  if ($store.getters.getIsOnRec) {
    return actionMicroOff($store)();
  }

  return actionMicroOn($store)();
};
