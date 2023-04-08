import {RecognizerObj} from './types';

export const recognizerInstance: RecognizerObj = {} as RecognizerObj;

/** @see https://itproger.com/course/programming/6 */
export const initRecognizer = () => {
  // @ts-ignore
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  // @ts-ignore
  const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

  if (SpeechRecognition) {
    if (!recognizerInstance.inst) {
      recognizerInstance.inst = new SpeechRecognition();

      if (recognizerInstance.inst) {
        recognizerInstance.inst.interimResults = true;
        recognizerInstance.inst.lang = 'ru-Ru';
        recognizerInstance.event = SpeechRecognitionEvent;
      }
    }
  }
  return recognizerInstance;
};

export const recognizer = initRecognizer();
