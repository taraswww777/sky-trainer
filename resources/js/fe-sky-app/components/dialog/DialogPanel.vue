<template>
    <div :class="bem()">
        <div :class="bem('header')">
            Лог разговора
        </div>
        <div :class="bem('messages')">
            <div :class="bem('message-item')">
                <Message
                    direction="in"
                    caption="Клиент"
                    text="Да, Ольга слушаю вас"
                />
            </div>
            <div :class="bem('message-item')">
                <Message
                    direction="out"
                    caption="Лояльность 5"
                    text="Добрый день, меня зовут ольга, скачать тренер бан, вам удобно сейчас разговаривать?"
                />
            </div>
        </div>
        <div :class="bem('input-message-text')">
            <button :class="bem('btn-rec')" type="button">
                <img src="./mic.svg">
            </button>
            <textarea  :class="bem('textarea')"></textarea>
        </div>
    </div>
</template>

<script>
import useBem from "vue3-bem";
import Message from "./Message.vue";

const componentName = 'DialogPanel';
const bem = useBem(componentName);

export default {
    name: componentName,
    components: {
        Message
    },
    data: () => ({
        bem,
    }),
}
</script>

<style scoped lang="scss">
@import '../../../../sass/mixins';

.dialog-panel {
    @include borderRadius;

    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    max-height: 100vh;
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

    &__input-message-text {
        width: 100%;
        padding: 25px 20px;
        background: #EAEEF6;
        display: flex;
        flex-wrap: nowrap;
    }

    &__btn-rec {
        @include borderCircle;
        padding: 12px 13.5px;
        background: linear-gradient(45deg, #D485F1, #7156F8);
        cursor: pointer;
        width: fit-content;
        height: fit-content;
    }

    &__textarea{
        @include borderRadius;
        margin: 0 0 0 16px;
        padding: 10px 18px;
        color: #737373;
        min-height: 52px;
        resize: none;
        font-size: 13px;
        line-height: 1.1;
        flex-grow: 1;
    }
}
</style>
