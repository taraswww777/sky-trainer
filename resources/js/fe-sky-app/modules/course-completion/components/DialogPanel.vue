<template>
  <div :class="bem()">
    <div :class="bem('pad')">
      <div :class="bem('title')">Лог разговора</div>
      <div :class="bem('messages')" id="DialogPanel__messages">
        <template
          v-for="(dialogItem, index) of dialogFlow"
          :key="index"
        >
          <p>dialogItem.images:</p>
          <p>dialogItem?.$phrase: {{ JSON.stringify(Object.keys(dialogItem?.$phrase || {})) }}</p>
          <p>dialogItem.images: {{ JSON.stringify(dialogItem?.$phrase?.images) }}</p>
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
              <li v-for="(image, index) in dialogItem?.$phrase?.images" :key="index">
                <img :class="bem('message-item-img')" :src="image.path" alt="">
                <button
                  v-for="(area, indexArea) in image.imgmap"
                  :key="indexArea"
                  type="button"
                  @click="()=>onClickBtnArea(indexArea)"
                  :style="prepareAreaStyle(area)"
                  :class="bem('message-item-img-area')">
                  {{ indexArea }}
                </button>
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
  data: () => ({bem}),
  methods: {
    prepareAreaStyle(area) {
      // return {`${area[0]?.join(',')},${area[2]?.join(',')}`
      return {
        left: `${area[0][0]}px`, // 439
        top: `${area[0][1] - 4}px`, // 194
        width: `${area[1][0] - area[0][0] + 6}px`, // 54
        height: `${area[1][1] - area[0][1] + 10}px` // 41
      };
    },
    onClickBtnArea(code) {
      console.log('onClickBtnArea:', code);
    }
  },
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
    position: relative;
  }

  &__message-item-img {
    max-width: 100%;
  }

  &__message-item-img-area {
    position: absolute;
    cursor: pointer;
    border: 2px solid red;
    background: transparent;
    color: transparent;
    font-size: 0;

    &:hover {
      border-color: orange;
    }

    &--ok {
      border-color: lawngreen;
    }
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
