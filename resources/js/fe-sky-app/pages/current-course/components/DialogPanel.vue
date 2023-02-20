<template>
    <div :class="bem()">
        <div :class="bem('header')">
            Лог разговора
        </div>
        <div :class="bem('messages')" id="DialogPanel__messages">
            <div :class="bem('message-item')" v-for="message of dialogLogs" :key="message.type">
                <Message
                    :directionType="message?.type"
                    :caption="message?.type"
                    :text="message?.text_to_find"
                />
            </div>
        </div>
        <div :class="bem('dialog-input-area')">
            <DialogInputArea/>
        </div>
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
    DialogInputArea,
  },
  data: () => ({
    bem,
  }),
  props: {
    dialogLogs: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped lang="scss">
@import '../../../../../sass/mixins';

.dialog-panel {
    @include borderRadius;

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
            width: 5px; /* ширина scrollbar */
            border-radius: 20px;
        }

        &::-webkit-scrollbar-track {
            background: #EAEAEA; /* цвет дорожки */
            width: 5px;
        }

        &::-webkit-scrollbar-thumb {
            width: 4px;
            background-color: #8C63F7; /* цвет плашки */
            border-radius: 20px; /* закругления плашки */
            border: 3px solid #8C63F7; /* padding вокруг плашки */
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
    }
}
</style>
