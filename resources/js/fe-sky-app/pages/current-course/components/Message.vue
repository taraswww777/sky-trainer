<template>
    <div :class="bem(undefined, directionType)">
        <span :class="bem('icon')">
            <Fa :icon="['far','user']"/>
        </span>

        <div :class="bem('box')">
            <div :class="bem('caption')">
                {{ caption }}
            </div>
            <div :class="bem('text')">
                {{ text }}
            </div>
        </div>
    </div>
</template>

<script>
import useBem from 'vue3-bem';

const componentName = 'Message';
const bem = useBem(componentName);

export default {
  name: componentName,
  data: () => ({
    bem,
  }),
  props: {
    directionType: {
      /** out - manager / in - bot  */
      type: String,
    },
    caption: {
      type: String,
    },
    text: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.message {
    display: flex;
    width: 100%;
    border-radius: 8px;
    max-height: 100vh;
    overflow: hidden;
    justify-content: flex-start;

    &--in, &--bot {
        flex-direction: row-reverse;
    }

    &--in, &--bot > &__box {
        background: #F2F2F2;
        margin-right: 15px;
        text-align: right;

        &::after {
            content: "";
            position: absolute;
            border: 15px solid transparent;
            border-left: 15px solid #F2F2F2;
            top: 8px;
            right: 0;
            transform: translateX(100%);
        }
    }

    &--out, &--manager {
        flex-direction: row;
    }

    &--out, &--manager > &__icon {
        background: linear-gradient(45deg, #2DC358, #1ABAB0);
    }

    &--out, &--manager > &__box {
        background: #DFFFE8;
        margin-left: 15px;
        text-align: left;

        &::before {
            content: "";
            position: absolute;
            border: 15px solid transparent;
            border-left: 15px solid #DFFFE8;
            top: 8px;
            left: 0;
            transform: translateX(-100%) rotate(180deg);
        }
    }

    &__icon {
        background: #3F3F3F;
        height: fit-content;
        font-size: 14px;
        color: #fff;
        padding: 10px 12px;
        width: fit-content;
        border-radius: 50%;
    }

    &__box {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        max-width: 90%;
        padding: 20px;
        border-radius: 8px;
    }

    &__caption {
        width: 100%;
    }

    &__text {
        width: 100%;
        padding: 5px 0 0;
        margin: 0;
        font-size: 16px;
        color: #666666;
    }
}
</style>
