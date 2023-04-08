import {Store} from 'vuex';
import {AppStore} from '@src/app-store';
import {actionMicroOn} from './actionMicro';

const audioStream = new Audio();

export const actionPlayAudioCall = ($store: Store<AppStore>) => async () => {
  const dialogFlow = $store.getters.getLastItemDialogFlow;
  if (dialogFlow?.$phrase.audio) {
    audioStream.src = dialogFlow.$phrase.audio;
    audioStream.currentTime = 0;

    return audioStream.play();
  }

  return actionMicroOn($store)();
};
