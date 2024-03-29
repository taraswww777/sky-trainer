<template>
  <form :class="bem()" @submit="pushMessage">
    <button
      :class="bem('btn-rec', `${isOnRec && 'recording'}`)"
      type="button"
      @click="onRec"
    >
      <img src="./mic.svg" alt="">
    </button>

    <label :class="bem('label')">
      <textarea :class="bem('textarea')" id="DialogInputArea" v-model="speechResult" placeholder="Введите фразу" />
    </label>
  </form>
</template>

<script>
import useBem from 'vue3-bem';
import {requestDialogSpeechResult} from '@src/requests';
import {recognizer} from './utils/recognizer';

const componentName = 'DialogInputArea';
const bem = useBem(componentName);
const audioStream = new Audio();

export default {
  name: componentName,
  data: () => ({
    bem,
    isOnRec: false,
    speechResult: '',
    phrases: '',
    sendTimeout: null
  }),
  computed: {
    courseId() {
      return this.$store.getters.getCurrentCourseId;
    }
  },
  mounted() {
    this.initRecognizer();

    // eslint-disable-next-line
    if (confirm('Включить микрофон?')) {
      this.onRec();
    }
  },
  unmounted() {
    recognizer.inst.removeEventListener('result', this.onRecResult);
    recognizer.inst.removeEventListener('start', this.onRecStart);
    recognizer.inst.removeEventListener('end', this.onRecStop);

    audioStream.removeEventListener('ended', this.onRec);
  },
  methods: {
    initRecognizer() {
      // Используем колбек для обработки результатов
      recognizer.inst.addEventListener('result', this.onRecResult);
      recognizer.inst.addEventListener('start', this.onRecStart);
      recognizer.inst.addEventListener('end', this.onRecStop);
      audioStream.addEventListener('ended', this.onRec);
    },
    /** Отработает после завершения распознавания */
    onRecResult(event) {
      const result = event.results[event.resultIndex];
      this.speechResult = `${this.phrases || ''}${result[0].transcript}`;
      this.speechTimeStamp = event.timeStamp;

      const textarea = document.querySelector('#DialogInputArea');
      textarea.scrollTop = textarea.scrollHeight;

      if (this.sendTimeout) {
        clearTimeout(this.sendTimeout);
      }

      if (result.isFinal) {
        this.phrases += `${result[0].transcript}. `;
      }
    },
    onEndSpeech() {
      this.isOnRec = false;
      if (this.sendTimeout) {
        clearTimeout(this.sendTimeout);
      }
      this.speechResult = undefined;
      recognizer.inst.stop();
      this.pushMessage();
    },
    onRecStart() {
      this.isOnRec = true;
    },
    onRecStop() {
      if (this.sendTimeout) {
        clearTimeout(this.sendTimeout);
      }

      if (this.isOnRec) {
        recognizer.inst.start();

        this.sendTimeout = setTimeout(() => {
          this.onEndSpeech();
        }, 2000);
      }
    },
    pushMessage() {
      requestDialogSpeechResult({
        courseId: this.courseId,
        speechResult: this.phrases,
        timing: this.speechTimeStamp
      })
        .then(({
          data: {
            dialog_logs,
            next_phrases,
            dialog_end,
            $phrase
          }
        }) => {
          this.phrases = '';
          this.speechResult = '';
          this.$store.dispatch('setDialogLogs', dialog_logs);
          this.$store.dispatch('setHelpPhrases', next_phrases?.phrases[0] || []);

          setTimeout(this.scrollToBottom, 500);

          if ($phrase.audio) {
            audioStream.src = $phrase.audio;
            audioStream.currentTime = 0;
            audioStream.play();
          } else {
            this.onRec();
          }

          if (dialog_end) {
            alert('Диалог завершён');
          }
        });
    },
    scrollToBottom() {
      const container = document.querySelector('#DialogPanel__messages');
      container.scrollTop = container.scrollHeight;
    },
    onRec() {
      if (this.isOnRec) {
        this.isOnRec = false;
        recognizer.inst.stop();
      } else {
        this.phrases = this.speechResult;
        this.isOnRec = true;
        recognizer.inst.start();
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import '@sass/mixins';
@import "@sass/media";

.dialog-input-area {
  padding: 25px;
  background: #EAEEF6;
  display: flex;
  flex-wrap: nowrap;
  border-radius: 0 0 8px 8px;

  @keyframes pulse {
    0% {
      opacity: 70%;
    }
    100% {
      opacity: 100%;
    }
  }

  &__btn-rec {
    padding: 9px;
    background: linear-gradient(84.09deg, #D485F1 4.37%, #7156F8 94.11%);
    cursor: pointer;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    flex-shrink: 0;
    margin: 5px 12px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;

    &--recording {
      background: linear-gradient(45deg, #ffc8c8, #ff3f3f);
      animation: pulse 1s infinite;
    }

    img {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
  }

  &__label {
    flex-grow: 1;
  }

  &__textarea {
    @include customScroll();

    margin: 0;
    padding: 15px 18px;

    background: #FFFFFF;
    border-radius: 8px;

    resize: none;

    height: 110px;
    width: 100%;
    display: block;

    font: 13px "Inter", Helvetica, Roboto, Arial, sans-serif;
    color: #29343E;
    border: none;
    box-shadow: none;

    scrollbar-color: #EAEAEA #8C63F7;
    scrollbar-width: thin;

    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;

      background-color: #EAEAEA;
    }

    &::-webkit-scrollbar-track {
      background-color: #EAEAEA;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #8C63F7;
    }
  }

  @media (min-width: $mb_middle) {
    &__btn-rec {
      width: 46px;
      height: 46px;

      margin: 0 16px 0 0;
      padding: 12px;
    }
  }

  @media (min-width: $mb_huge) {
    &__textarea {
      padding: 10px 18px;
      height: 52px;
    }
  }
}
</style>
