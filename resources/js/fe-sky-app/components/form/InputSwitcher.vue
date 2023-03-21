<template>
  <div :class="bem()">
    <div :class="bem('switch')">
      <div
        v-for="option in options"
        :class="bem('case', option.value === this.value ? 'selected' : '')"
        :key="option.value"
        @click="()=>onChange(option)">
        {{ option.caption }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import useBem from 'vue3-bem';
import {noop} from 'lodash';

const name = 'InputSwitcher';
const bem = useBem(name);

export default {
  name,
  props: {
    options: {
      type: Array,
      default: () => [
        {caption: 'true', value: true},
        {caption: 'false', value: false}
      ]
    },
    value: {
      type: String || Boolean,
      default: false
    },
    onChangeValue: {
      type: Function,
      default: noop
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    bem,
    isOpen: false,
    isActive: false
  }),
  methods: {
    onChange(option: Record<string, any>) {
      if (this?.disabled) {
        return;
      }

      this.onChangeValue(option);
    }
  }
};
</script>

<style scoped lang="scss">
@import '@sass/mixins';

.input-switcher {
  width: 100%;

  &__switch {
    cursor: pointer;
    position: relative;

    color: #29343E;
    font-size: 12px;
    font-weight: 400;
    line-height: normal;

    display: flex;
    flex-wrap: nowrap;

    justify-content: flex-start;
    align-content: center;
    align-items: center;

    height: 48px;

    text-align: center;

    border: 1px solid #E0E0E0;
    border-radius: 50px;
  }

  &__case {
    position: relative;

    width: 50%;
    padding: 4px;
    overflow: hidden;
    border-radius: 50px;
    transition: color .2s linear;
    color: currentColor;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-wrap: nowrap;

    &--selected {
      background: #8C63F7;
      color: #fff;
      transition: left .2s linear;
    }
  }
}
</style>
