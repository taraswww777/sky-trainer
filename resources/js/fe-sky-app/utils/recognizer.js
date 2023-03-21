let recognizerInstance;

/** @see https://itproger.com/course/programming/6 */
export const initRecognizer = () => {
  if (window?.webkitSpeechRecognition) {
    if (!recognizerInstance) {
      recognizerInstance = new window.webkitSpeechRecognition();
    }

    recognizerInstance.interimResults = true;
    recognizerInstance.lang = 'ru-Ru';
    return recognizerInstance;
  }
};

export const recognizer = initRecognizer();
