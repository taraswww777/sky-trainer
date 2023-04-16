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

.ui-button {
  cursor: pointer;

  @keyframes pulse {
    0% {
      opacity: 70%;
    }
    100% {
      opacity: 100%;
    }
  }

  &--rec, &--rec-on {
    padding: 9px;
    background: linear-gradient(84.09deg, #D485F1 4.37%, #7156F8 94.11%);
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
    background: linear-gradient(45deg, #ffc8c8, #ff3f3f);
    animation: pulse 1s infinite;
  }

  &--primary {

  }
}
</style>
