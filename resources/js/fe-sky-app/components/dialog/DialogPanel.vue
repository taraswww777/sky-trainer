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
            ferf
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
.dialog-panel {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    border-radius: 8px;
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
        overflow-y: scroll;
        overflow-x: hidden;
        flex-grow: 1;
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
    }
}
</style>
