<template>
  <form :class="bem()" @submit="pushMessage">
    <button
      :class="bem('btn-rec', `${isOnRec && 'recording'}`)"
      type="button"
      @click="onRec"
    >
      <img src="./mic.svg">
    </button>

    <textarea :class="bem('textarea')" v-model="speechResult" placeholder="Введите фразу"></textarea>
  </form>
</template>

<script>
import useBem from 'vue3-bem';
import {noop} from 'lodash';
import {requestDialogSpeechResult} from '../../../requests';
import {recognizer} from '../../../utils/recognizer';

const componentName = 'DialogInputArea';
const bem = useBem(componentName);
const audioStream = new Audio();

export default {
  name: componentName,
  data: () => ({
    bem,
    isOnRec: false,
    speechResult: undefined
  }),
  computed: {
    courseId() {
      return this.$store.getters.getCurrentCourseId;
    }
  },
  mounted() {
    // Используем колбек для обработки результатов
    recognizer.onresult = (event) => {
      const result = event.results[event.resultIndex];
      this.speechResult = result[0].transcript;
      this.speechTimeStamp = event.timeStamp;
      if (result.isFinal) {
        this.pushMessage();
        this.isOnRec = false;
      }
    };

    // eslint-disable-next-line
    if (confirm('Включить микрофон?')) {
      this.onRec();
    }
  },
  unmounted() {
    recognizer.onresult = noop;
  },
  methods: {
    pushMessage() {
      requestDialogSpeechResult({
        courseId: this.courseId,
        speechResult: this.speechResult,
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
          this.speechResult = undefined;
          this.$store.dispatch('setDialogLogs', dialog_logs);
          this.$store.dispatch('setHelpPhrases', next_phrases?.phrases[0] || []);

          console.log('audioStream.src = $phrase.audio:', $phrase);

          if ($phrase.audio) {
            audioStream.src = $phrase.audio;
            audioStream.addEventListener('ended', () => {
              if (this.isOnRec) {
                this.onStopRecord();
              }
              this.onStartRecord();
            });
            audioStream.play();

            setTimeout(this.scrollToBottom, 500);
          }

          if (dialog_end) {
            alert('Диалог завершён');
          }
        });
    },
    scrollToBottom() {
      const container = document.querySelector('#DialogPanel__messages');
      container.scroll(0, container.scrollWidth || 0);
    },
    onStartRecord() {
      this.isOnRec = true;
      recognizer.start();
    },
    onStopRecord() {
      this.isOnRec = false;
      recognizer.stop();
    },
    onRec() {
      console.log('onRec');
      if (!this.isOnRec) {
        this.onStartRecord();
      } else {
        this.onStopRecord();
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../../../../sass/media";

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

  &__textarea {
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
