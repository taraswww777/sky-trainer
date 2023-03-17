<template>
  <div :class="bem()">
    <div :class="bem('logo')">
      <router-link to="/">
        <img src="../../../../img/logo_big.svg" alt="">

        <img src="../../../../img/logo.svg" alt="">
      </router-link>
    </div>

    <div :class="bem('head')">
      <div :class="bem('head-user')">
        <UserStatusWidget v-if="user" :userName="user.name" :userId="user.id" />
      </div>
      <button
        v-if="onClose"
        class="mob-menu-btn iconCircleWrapper"
        type="button"
        @click.prevent="onClose"
      >
        <img src="../../../../img/burger.svg" alt="">
      </button>
    </div>

    <SearchInput />

    <div :class="bem('menu')">
      <MainMenuItems :onClose="onClose" />
    </div>

    <div :class="bem('time')" v-if="false">
      <TimeWidget />
    </div>

    <div :class="bem('theme')" v-if="false">
      <ThemeSwitch />
    </div>
  </div>
</template>
<script>
import useBem from 'vue3-bem';
import ThemeSwitch from './ThemeSwitch.vue';

const bem = useBem('aside');

export default {
  components: {
    ThemeSwitch
  },
  props: {
    onClose: Function
  },
  data: () => ({
    bem
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

.aside {
  @include customScroll($bgColor: #FFFFFF);
  display: flex;
  overflow: hidden;
  overflow-y: auto;
  flex-direction: column;

  width: 300px;
  max-width: 100%;
  height: 100%;
  padding: 20px 24px 20px 20px;

  background: #FFF;
  box-shadow: 0px 4px 44px rgba(0, 0, 0, 0.05);

  @media (min-width: $mb_large) {
    .small & {
      padding-left: 0;
      padding-right: 0;
    }

    .small & > *:not(.aside__menu, .aside__logo) {
      display: none;
    }

    .small &__logo {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      align-content: flex-start;
      flex-wrap: wrap;

      img {
        display: none;
      }

      img + img {
        display: block;
      }
    }
  }

  &__logo {
    display: none;
    width: 100%;
    margin-bottom: 46px;

    img {
      display: block;
    }

    img + img {
      display: none;
    }
  }

  &__head {
    display: flex;
    justify-content: space-between;
    align-content: flex-start;
    align-items: flex-start;
    flex-wrap: nowrap;

    margin-bottom: 20px;

    @media (min-width: $mb_exlarge) {
      display: none;
    }
  }

  &__head-user {
    width: calc(100% - 50px);
  }

  & .search {
    width: 100%;
    margin-bottom: 9px;

    @media (min-width: $mb_exlarge) {
      display: none;
    }
  }

  & .time-block {
    width: 100%;
    margin-top: 58px;

    @media (min-width: $mb_exlarge) {
      display: none;
    }
  }

  @media (min-width: $mb_exlarge) {
    &__menu {
      flex-grow: 1;

      width: 100%;
    }

    &__logo {
      display: block;
    }

    padding: 24px 28px 28px;
  }

  &__theme, &__time {
    margin-top: 30px;
  }
}
</style>
