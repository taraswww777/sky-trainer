<template>
  <div>
    <button
      class="header__mob-menu-btn mob-menu-btn iconCircleWrapper"
      type="button"
      @click.prevent="openMenu"
    >
      <!-- <Fa icon="bars"/> -->
      <img src="../../../../img/burger.svg" alt="">
    </button>
    <div :class="bem()" v-if="isOpen">
      <button :class="bem('toggle', isOpen?'close':'open')" disabled @click="toggleMenu">
        <img src="../../../../img/ic_arrow1.svg">
      </button>
      <div :class="bem('MainMenu')" v-if="isOpen">
        <MainMenu :onClose="closeMenu"/>
      </div>
    </div>
  </div>
</template>
<script>
import useBem from 'vue3-bem';
import MainMenu from './MainMenu.vue';

const name = 'ThemeSwitch';
const bem = useBem(name);

export default {
  components: {
    MainMenu
  },
  data: () => ({
    bem,
    isOpen: true
  }),
  methods: {
    closeMenu() {
      this.isOpen = false;
    },
    openMenu() {
      this.isOpen = true;
    },
    toggleMenu() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../../sass/media";

.theme-switch {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100%;
  z-index: 100;

  @media (min-width: $mb_exlarge) {
    &.small {
      width: 98px;
    }
  }

  &__toggle {
    position: absolute;
    top: 32px;
    right: -12px;

    display: block;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    width: 24px;
    height: 24px;
    border: none;
    cursor: pointer;

    background: #FFFFFF;
    box-shadow: 0px 0px 44px rgba(0, 0, 0, 0.15);
    border-radius: 50px;
    padding: 4px;

    color: #868686;

    transition: color .2s linear;
    z-index: 10;

    &:hover {
      background: linear-gradient(84.09deg, #D485F1 4.37%, #7156F8 94.11%);
    }

    &--close {
      transform: rotate(180deg);
    }

    &--open {
      transform: rotate(360deg);
    }
  }

  @media (min-width: $mb_exlarge) {
    width: 247px;

    display: block !important;

    &__close {
      display: flex;
    }
  }
}
</style>
