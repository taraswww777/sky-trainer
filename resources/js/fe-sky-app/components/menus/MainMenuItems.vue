<template>
  <nav :class="bem()">
    <div :class="bem('item')">
      <router-link
        :to="{ name: PAGE_NAMES.profile }"
        @click="onClose"
        :active-class="bem('link', 'active').join(' ')"
        :class="bem('link')">
        <span :class="bem('icon')">
          <img
            src="../../../../img/icons/icon-gray-profile.svg"
            :class="bem('icon-img')"
            alt="">
          <img
            src="../../../../img/icons/icon-white-profile.svg"
            :class="bem('icon-img', 'active').join(' ')"
            alt="">
        </span>

        <span :class="bem('name')">Профиль</span>
      </router-link>
    </div>
    <!--
    <div :class="bem('item')">
      <router-link
        :to="{ name: PAGE_NAMES.register }"
        @click="onClose"
        :active-class="bem('link', 'active').join(' ')"
        :class="bem('link')">
        <span :class="bem('icon')">
          <img
            src="../../../../img/icons/icon-gray-rating.svg"
            :class="bem('icon-img')"
            alt="">
          <img
            src="../../../../img/icons/icon-white-rating.svg"
            :class="bem('icon-img', 'active').join(' ')"
            alt="">
        </span>
        <span :class="bem('name')">Рейтинги</span>
      </router-link>
    </div>
-->
    <div :class="bem('item')">
      <router-link
        :to="{ name: PAGE_NAMES.courses }"
        @click="onClose"
        :active-class="bem('link', 'active').join(' ')"
        :class="bem('link')">
        <span :class="bem('icon')">
          <img
            src="../../../../img/icons/icon-gray-courses.svg"
            :class="bem('icon-img')"
            alt="">
          <img
            src="../../../../img/icons/icon-white-courses.svg"
            :class="bem('icon-img', 'active').join(' ')"
            alt="">
        </span>

        <span :class="bem('name')">Курсы</span>

        <button type="button" :class="[bem('link-sub'), { active: isActive }]" @click="toggle">
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.64645 5.65967C3.84171 5.44678 4.15829 5.44678 4.35355 5.65967L7.64645 9.25C7.84171 9.4629 8.15829 9.4629 8.35355 9.25L11.6464 5.65968C11.8417 5.44678 12.1583 5.44678 12.3536 5.65968C12.5488 5.87257 12.5488 6.21775 12.3536 6.43065L9.06066 10.021C8.47487 10.6597 7.52513 10.6597 6.93934 10.021L3.64645 6.43065C3.45118 6.21775 3.45118 5.87257 3.64645 5.65967Z" />
          </svg>
        </button>
      </router-link>

      <div :class="bem('submenu')" v-show="isOpen">
        <div :class="bem('submenu-item')">
          <router-link to="#" :class="bem('submenu-link')">Презентации</router-link>
        </div>
        <div :class="bem('submenu-item')">
          <router-link to="#" :class="bem('submenu-link')">Встречи</router-link>
        </div>
        <div :class="bem('submenu-item')">
          <router-link to="#" :class="bem('submenu-link')">Звонки</router-link>
        </div>
        <div :class="bem('submenu-item')">
          <router-link to="#" :class="bem('submenu-link')">Презентации</router-link>
        </div>
        <div :class="bem('submenu-item')">
          <router-link to="#" :class="bem('submenu-link')">Встречи</router-link>
        </div>
      </div>
    </div>
    <div :class="bem('item')">
      <router-link
        :to="{ name: PAGE_NAMES.logout }"
        @click="onClose"
        :active-class="bem('link', 'active').join(' ')"
        :class="bem('link')"
      >
        <span :class="bem('icon')">
          <img
            src="../../../../img/icons/icon-gray-logout.svg"
            :class="bem('icon-img')"
            alt="">
          <img
            src="../../../../img/icons/icon-white-logout.svg"
            :class="bem('icon-img', 'active').join(' ')"
            alt="">
        </span>

        <span :class="bem('name')">Выход</span>
      </router-link>
    </div>
  </nav>
</template>
<script>
import {noop} from 'lodash';
import useBem from 'vue3-bem';
import {PAGE_NAMES} from '../../constants';

const bem = useBem('main-menu');

export default {
  data: () => ({
    PAGE_NAMES,
    bem,
    isOpen: false,
    isActive: false
  }),
  props: {
    onClose: {
      type: Function,
      default: noop
    }
  },
  methods: {
    toggle(e) {
      e.preventDefault();
      e.stopPropagation();

      this.isOpen = !this.isOpen;
      this.isActive = !this.isActive;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@sass/media";

.main-menu {
  margin: 0;
  display: inline-block;
  min-width: 192px;

  &__item + &__item {
    margin-top: 11px;
  }

  @media (min-width: $mb_exlarge) {
    &__item._nopc {
      display: none;
    }
  }

  &__link {
    position: relative;

    color: #1C1C1C;
    font-size: 16px;
    font-weight: 500;

    font-style: normal;
    line-height: 1.25;

    display: flex;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    flex-wrap: nowrap;

    padding: 11px 16px;

    text-decoration: none;

    border-radius: 50px;

    transition: color .2s linear;

    &:before {
      content: "";

      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      opacity: 0;
      border-radius: 50px;
      background: linear-gradient(84.09deg, #D485F1 4.37%, #7156F8 94.11%);

      transition: opacity .2s linear;
    }

    .main-menu__icon-img {
      display: block;
    }

    .main-menu__icon-img--active {
      display: none;
    }

    @media (any-hover: hover) {
      &:hover {
        color: #FFF;

        &:before {
          opacity: 1;
        }

        .main-menu__icon-img {
          display: none;
        }

        .main-menu__icon-img--active {
          display: block;
        }

        .main-menu__link-sub {
          color: currentColor;
        }
      }
    }

    &--active {
      color: #FFF;

      &:before {
        opacity: 1;
      }

      .main-menu__icon-img {
        display: none;
      }

      .main-menu__icon-img--active {
        display: block;
      }

      .main-menu__link-sub {
        color: currentColor;
      }
    }
  }

  @media (min-width: $mb_exlarge) {
    .small &__link {
      width: 42px;
      justify-content: center;

      padding-left: 11px;
      padding-right: 11px;
    }
  }

  &__link-sub {
    position: absolute;
    right: 0;
    top: 0;
    width: 32px;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;

    color: rgba(0, 0, 0, 0.2);
    border-radius: 0 50px 50px 0;

    svg {
      display: block;
      width: 16px;
      height: 16px;

      fill: currentColor;
    }
  }

  &__icon {
    position: relative;

    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-shrink: 0;
    flex-wrap: wrap;

    width: 20px;
    height: 20px;
    margin-right: 10px;

    img {
      display: block;

      max-width: 100%;
      max-height: 100%;
    }

    svg {
      display: block;

      max-width: 100%;
      max-height: 100%;

      transition: fill .2s linear;

      fill: #7B7B7B;
    }
  }

  &__icon-img {
    display: block;

    max-width: 100%;
    max-height: 100%;

    transition: fill .2s linear;

    fill: #7B7B7B;

    &--active {
      display: none;
    }
  }

  @media (min-width: $mb_exlarge) {
    .small &__icon {
      margin-right: 0;
    }
  }

  &__name {
    position: relative;

    display: block;
  }

  @media (min-width: $mb_exlarge) {
    .small &__name {
      display: none;
    }
  }

  &__submenu {
    margin-top: 7px;
    padding-bottom: 13px;
  }

  @media (min-width: $mb_exlarge) {
    .small &__submenu {
      display: none;
    }
  }

  &__submenu-item + &__submenu-item {
    margin-top: 4px;
  }

  &__submenu-link {
    color: #1C1C1C;
    font-size: 14px;
    font-weight: 400;

    font-style: normal;
    line-height: 1.43;

    display: block;

    padding: 4px 16px 4px 46px;

    text-decoration: none;

    transition: color .2s linear;

    @media (any-hover: hover) {
      &:hover {
        color: #7156F8;
      }
    }
  }

  @media (min-width: $mb_exlarge) {
    .small & {
      min-width: 1px;
      width: 42px;
      margin: 0 auto;
      display: block;
    }
  }
}
</style>
