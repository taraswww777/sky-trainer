<template>
  <form :class="bem()" @submit="pushMessage">
    <div :class="bem('mic')">
      <UiButton
        :btnType="isOnRec ? 'rec-on' : 'rec'"
        type="button"
        @click="microToggle"
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
import UiButton from '@src/ui/UiButton.vue';
import {recognizer} from '@src/recognizer';
import {
  actionContinueCall,
  actionMicroOn,
  actionMicroOff,
  actionMicroToggle
} from '../actions';

const componentName = 'DialogInputArea';
const bem = useBem(componentName);
const audioStream = new Audio();

export default {
  name: componentName,
  components: {UiButton},
  data: () => ({
    bem,
    speechResult: undefined
  }),
  computed: {
    courseId() {
      return this.$store.getters.getCurrentCourseId;
    },
    isOnRec() {
      return this.$store.getters.getIsOnRec;
    }
  },
  mounted() {
    this.initRecognizer();

    // eslint-disable-next-line
    if (confirm('Включить микрофон?')) {
      this.microOn();
    }
  },
  unmounted() {
    recognizer.inst.removeEventListener('result', this.onRecResult);
    audioStream.removeEventListener('ended', this.microOn);
  },
  methods: {
    initRecognizer() {
      console.log('initRecognizer:', recognizer);
      // Используем callback для обработки результатов
      recognizer.inst.addEventListener('result', this.onRecResult);
      audioStream.addEventListener('ended', this.microOn);
    },
    /** Отработает после завершения распознавания */
    onRecResult(event) {
      console.log('onRecResult:event.results:', event.results);
      const result = event.results[event.resultIndex];
      console.log('onRecResult:event.results:', event.results, 'result:', result);
      this.speechResult = result[0].transcript;
      this.speechTimeStamp = event.timeStamp;

      if (result.isFinal) {
        this.pushMessage();
        actionMicroOff(this.$store)();
      }
    },
    pushMessage() {
      actionContinueCall(this.$store)({
        courseId: this.courseId,
        speechResult: this.speechResult,
        timing: this.speechTimeStamp
      })
        .then(() => {
          this.speechResult = '';
          setTimeout(this.scrollToBottom, 500);
        });
    },
    scrollToBottom() {
      const container = document.querySelector('#DialogPanel__messages');
      container.scroll(0, container.scrollWidth || 0);
    },
    microOn() {
      actionMicroOn(this.$store)();
    },
    microToggle() {
      actionMicroToggle(this.$store)();
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
