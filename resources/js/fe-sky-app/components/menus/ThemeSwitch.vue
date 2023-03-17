<template>
  <button :class="bem()" type="button" @click="onClickBtn">
    <span :class="bem(`item`, currentTheme === THEMES.Light ? 'active' : '')">
      <span :class="bem('theme-icon')">
        <img src="../../../../img/sun-icon.svg" alt="Light">
      </span>

      <span :class="bem('theme-name')">Light</span>
    </span>

    <span :class="bem('item', currentTheme === THEMES.Dark ? 'active' : '')">
      <span :class="bem('theme-icon')">
        <img src="../../../../img/moon-icon.svg" alt="Dark">
      </span>

      <span :class="bem('theme-name')">Dark</span>
    </span>
  </button>
</template>
<script>
import useBem from 'vue3-bem';
import {noop} from 'lodash';

const name = 'ThemeSwitch';
const bem = useBem(name);

const THEMES = {
  Light: 'light',
  Dark: 'dark'
};

export default {
  name,
  props: {
    onChange: Function,
    default: noop
  },
  data: () => ({
    bem,
    THEMES,
    currentTheme: THEMES.Light,
    onClickBtn() {
      this.currentTheme = this.currentTheme === THEMES.Light ? THEMES.Dark : THEMES.Light;
      (this.onChange || noop)(this.currentTheme);
    }
  }),
  computed: {
    user() {
      return this.$store.getters.getCurrentUserInfo;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@sass/media";
@import '@sass/mixins';

.theme-switch {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: nowrap;
  border: none;
  cursor: pointer;
  background: #EAEEF6;
  border-radius: 50px;
  padding: 4px 5px 4px 3px;

  font-weight: 400;
  font-size: 11px;
  line-height: 1;

  color: #747474;
  user-select: none;

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: nowrap;

    width: calc(50% - 2px);
    margin-left: 2px;

    padding: 4px 9px;
    border-radius: 50px;

    &:first-child {
      margin-left: 0;
      width: 50%;
    }

    &--active {
      background: #fff;
      color: #29343E;
    }
  }

  &__theme-icon {
    width: 16px;
    height: 16px;

    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    margin-right: 11px;
  }
}
</style>
