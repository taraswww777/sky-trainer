<template>
  <form :class="bem()" @submit="pushMessage">
    <div :class="bem('mic')">
      <UiButton
        :btnType="isOnRec ? 'rec-on' : 'rec'"
        type="button"
        @click="onRec"
      >
        <img src="./mic.svg" alt="">
      </UiButton>
    </div>

    <label :class="bem('label')">
      <textarea :class="bem('textarea')" v-model="speechResult" placeholder="Введите фразу" />
    </label>
  </form>
</template>

<script>
import useBem from 'vue3-bem';
import {requestDialogSpeechResult} from '@src/requests';
import UiButton from '@src/ui/UiButton.vue';
import {recognizer} from './utils/recognizer';
import {apiClient} from '@src/api';

const componentName = 'DialogInputArea';
const bem = useBem(componentName);
const audioStream = new Audio();

export default {
  name: componentName,
  components: {UiButton},
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
      this.speechResult = result[0].transcript;
      this.speechTimeStamp = event.timeStamp;
      if (result.isFinal) {
        this.pushMessage();
        this.isOnRec = false;
      }
    },
    onRecStart() {
      this.isOnRec = true;
    },
    onRecStop() {
      this.isOnRec = false;
    },
    pushMessage() {
      apiClient.postDialogSpeechResult({
        courseId: this.courseId,
        speechResult: this.speechResult,
        timing: this.speechTimeStamp
      })
        .then(({data: dialogFlow}) => {
          const {
            dialog_logs,
            next_phrases,
            dialog_end,
            $phrase
          } = dialogFlow;
          this.speechResult = undefined;
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
      container.scroll(0, container.scrollWidth || 0);
    },
    onRec() {
      if (this.isOnRec) {
        recognizer.inst.stop();
      } else {
        recognizer.inst.start();
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "@sass/media";
@import "@sass/mixins";

.dialog-input-area {
  padding: 25px;
  background: #EAEEF6;
  display: flex;
  flex-wrap: nowrap;
  border-radius: 0 0 8px 8px;

  &__mic {
    margin: 5px 12px 0 0;

    @media (min-width: $mb_middle) {
      margin: 0 16px 0 0;
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
  }

  @media (min-width: $mb_huge) {
    &__textarea {
      padding: 10px 18px;
      height: 52px;
    }
  }
}
</style>
