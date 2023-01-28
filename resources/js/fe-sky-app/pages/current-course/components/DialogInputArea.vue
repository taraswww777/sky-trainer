<template>
    <div :class="bem()">
        <button :class="bem('btn-rec')" type="button">
            <img src="./mic.svg">
        </button>
        <textarea :class="bem('textarea')"></textarea>
    </div>
</template>

<script>
import useBem from "vue3-bem";

const componentName = 'DialogInputArea';
const bem = useBem(componentName);

export default {
    name: componentName,
    data: () => ({
        bem,
    }),
}
</script>

<style scoped lang="scss">
@import '../../../../../sass/mixins';

.dialog-input-area {
    width: 100%;
    padding: 25px 20px;
    background: #EAEEF6;
    display: flex;
    flex-wrap: nowrap;

    &__btn-rec {
        @include borderCircle;
        padding: 12px 13.5px;
        background: linear-gradient(45deg, #D485F1, #7156F8);
        cursor: pointer;
        width: fit-content;
        height: fit-content;
    }

    &__textarea {
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
