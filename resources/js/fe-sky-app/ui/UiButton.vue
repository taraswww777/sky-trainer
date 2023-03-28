<template>
  <button
    :type="this.$props.type"
    @click="this.$props.onClick"
    :class="bem('', this.$props.btnType)"
  >
    <slot />
  </button>
</template>

<script>
import useBem from 'vue3-bem';
import {noop} from 'lodash';

const name = 'UiButton';
const bem = useBem(name);
export default {
  name,
  data: () => ({bem}),
  props: {
    type: {
      type: String,
      default: 'button'
    },
    onClick: {
      type: Function,
      default: noop
    },
    btnType: {
      type: String,
      default: 'primary'
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@sass/media";
@import "@sass/animations";

.ui-button {
  cursor: pointer;
  color: #FFFFFF;

  &--primary, &--rec, &--rec-on {
    background: linear-gradient(84.09deg, #D485F1 4.37%, #7156F8 94.11%);

    &:hover {
      background: linear-gradient(84.09deg, #7156F8 4.37%, #D485F1 94.11%);
    }
  }

  &--danger, &--call-end, &--rec-on {
    background: linear-gradient(84.09deg, #EE4B60 4.37%, #FF8718 94.11%);

    &:hover {
      background: linear-gradient(84.09deg, #FF8718 4.37%, #EE4B60 94.11%);
    }
  }

  &--success, &--call-start {
    background: linear-gradient(84.09deg, #2DC458 4.37%, #1ABAB0 94.11%);

    &:hover {
      background: linear-gradient(84.09deg, #1ABAB0 4.37%, #2DC458 94.11%);
    }
  }

  &--rec, &--rec-on {
    padding: 9px;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;

    @media (min-width: $mb_middle) {
      width: 46px;
      height: 46px;

      padding: 12px;
    }

    img {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
  }

  &--rec-on {
    animation: pulse 1s infinite;
  }

  &--call-start, &--call-end {
    border-radius: 50px;

    padding: 0 41px;
    text-align: center;
    height: 48px;

    font: 14px/48px "Inter", Helvetica, Roboto, Arial, sans-serif;
    cursor: pointer;

    border: none;
    display: block;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 6px;
      top: 50%;
      width: 20px;
      height: 20px;
      transform: translateY(-50%) translateX(50%);
      background: url(../../../img/ic_phone.svg) 50%/contain no-repeat;
    }

    @media (any-hover: hover) {
      &:hover {
        &::before {
          opacity: 1;
        }
      }
    }
  }
}
</style>
