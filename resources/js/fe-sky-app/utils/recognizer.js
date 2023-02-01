let recognizerInstance = undefined;

/** @see https://itproger.com/course/programming/6 */
export const initRecognizer = () => {

    if (!recognizerInstance) {
        recognizerInstance = new webkitSpeechRecognition();
    }

    recognizerInstance.interimResults = true;
    recognizerInstance.lang = 'ru-Ru';
    return recognizerInstance;
}

export const recognizer = initRecognizer();
