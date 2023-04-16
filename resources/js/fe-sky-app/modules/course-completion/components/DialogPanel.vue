<template>
  <div :class="bem()">
    <div :class="bem('pad')">
      <div :class="bem('title')">Лог разговора</div>
      <div :class="bem('messages')" id="DialogPanel__messages">
        <template
          v-for="(dialogItem, index) of dialogFlow"
          :key="index"
        >
          <div :class="bem('message-item')" v-if="dialogItem.$message">
            <Message
              directionType="manager"
              caption="manager"
              :text="dialogItem.$message.text_to_find"
            />
          </div>
          <div :class="bem('message-item')" v-if="dialogItem.$message">
            <Message
              directionType="bot"
              caption="bot"
              :text="dialogItem.$message.response_phrase"
            />
          </div>
        </template>
      </div>
    </div>

    <DialogInputArea />
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
  computed: {
    dialogFlow() {
      return this.$store.getters.getDialogFlow;
    }
  }
};
</script>

<style scoped lang="scss">
@import '@sass/mixins';
@import "@sass/media";

.dialog-panel {
  border-radius: 8px;
  background: rgba(255, 255, 255, .75);
  box-shadow: 0px 0px 44px rgba(0, 0, 0, .075);

  &__pad {
    padding: 20px 25px 40px;
  }

  &__title {
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
  }

  &__messages {
    @include customScroll();

    height: 219px;
    margin-top: 16px;
    padding-right: 20px;
  }

  &__message-item {
    margin-top: 20px;
  }

  @media (min-width: $mb_exlarge) {
    &__messages {
      height: 166px;
    }

    &__message-item + &__message-item {
      margin-top: 10px;
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
