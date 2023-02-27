<template>
  <div :class="bem()">
    <div :class="bem('pad')">
      <div :class="bem('title')">Лог разговора</div>
      <div :class="bem('messages')" id="DialogPanel__messages">
        <div :class="bem('message-item')" v-for="message of dialogLogs" :key="message.type">
          <Message
            :directionType="message?.type"
            :caption="message?.type"
            :text="message?.text_to_find"
          />
        </div>
      </div>
    </div>

    <DialogInputArea/>
  </div>
</template>

<script>
import useBem from 'vue3-bem';
import Message from './Message.vue';
import DialogInputArea from './DialogInputArea.vue';

const name = 'DialogPanel';
const bem = useBem(name);

export default {
  name,
  components: {
    Message,
    DialogInputArea
  },
  data: () => ({
    bem
  }),
  props: {
    dialogLogs: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped lang="scss">
/* @import '../../../../../sass/mixins'; */
@import "../../../../../sass/media";

.dialog-panel {
  background: rgba(255, 255, 255, 0.75);
  box-shadow: 0px 0px 44px rgba(0, 0, 0, 0.075);
  border-radius: 8px;

  &__pad {
    padding: 20px 25px 40px;
  }

  &__title {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;

    color: #000000;
  }

  &__messages {
    padding-right: 20px;
    height: 219px;
    overflow: hidden;
    overflow-y: auto;
    margin-top: 16px;

    scrollbar-color: #EAEAEA #8C63F7;
    scrollbar-width: thin;

    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;

      background-color: #EAEAEA;
    }

    &::-webkit-scrollbar-track {
      background-color: #EAEAEA;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #8C63F7;
      border-radius: 4px;
    }
  }

  @media (min-width: $mb_exlarge) {
    &__messages {
      height: 166px;
    }
  }

  /* @include borderRadius;

  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  max-height: calc(100vh - 200px);
  flex-direction: column;
  overflow: hidden;

  &__header {
      padding: 20px;
      width: 100%;
      font-weight: bold;
      font-size: 20px;
  }

  &__messages {
      padding: 20px;
      width: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      flex-grow: 1;

      &::-webkit-scrollbar {
          width: 5px;
          border-radius: 20px;
      }

      &::-webkit-scrollbar-track {
          background: #EAEAEA;
          width: 5px;
      }

      &::-webkit-scrollbar-thumb {
          width: 4px;
          background-color: #8C63F7;
          border-radius: 20px;
          border: 3px solid #8C63F7;
      }
  }

  &__message-item {
      margin: 0 0 10px;

      &:last-child {
          margin-bottom: 0;
      }
  }

  &__dialog-input-area {
      width: 100%;
  } */
}
</style>
