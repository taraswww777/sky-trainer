<template>
  <div :class="bem()">
    <div :class="bem('pad')">
      <div :class="bem('title')">Лог разговора</div>
      <div :class="bem('messages')" id="DialogPanel__messages">
        <template
          v-for="(dialogItem, indexDialog) of dialogFlow"
          :key="indexDialog"
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
          <div :class="bem('message-item')" v-if="dialogItem?.$phrase?.images">
            <ul>
              <li v-for="(image, indexImg) in dialogItem?.$phrase?.images" :key="indexImg">
                <InteractiveImg :image="image" :onClickBtnArea="onClickBtnArea" />
              </li>
            </ul>
          </div>
        </template>
      </div>
    </div>

    <DialogInputArea />
  </div>
</template>

<script>
import useBem from 'vue3-bem';
import InteractiveImg from './InteractiveImg.vue';
import Message from './Message.vue';
import DialogInputArea from './DialogInputArea.vue';

const name = 'DialogPanel';
const bem = useBem(name);

export default {
  name,
  components: {
    InteractiveImg,
    Message,
    DialogInputArea
  },
  data: () => ({bem}),
  methods: {
    onClickBtnArea(code) {
      console.log('onClickBtnArea:', code);
    }
  },
  computed: {
    dialogFlow() {
      return this.$store.getters.getDialogFlow;
    }
  },
  mounted() {
    console.log('mounted:', this.$refs);
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
    position: relative;
  }

  @media (min-width: $mb_exlarge) {
    &__messages {
      height: 166px;
    }

    &__message-item + &__message-item {
      margin-top: 10px;
    }
  }
}
</style>
