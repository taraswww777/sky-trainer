<template>
  <div :class="bem()">
    <div :class="bem('logo')">
      <router-link to="/">
        <img src="../../../img/logo_white.svg" alt="">
      </router-link>
    </div>

    <div :class="bem('row')">
      <div :class="bem('col-left')">
        <div :class="bem('title')">С каждым днём ты становишься лучше, чем вчера!</div>

        <div :class="bem('slider')">
          <Slider
            :items="[
             'Приветствуем вас в logoapp тут вы станете умнее и&nbsp;научитесь новому.',
             'Просто запускайте курсы и тренируйтесь!',
             ]"
          />
        </div>
      </div>

      <div :class="bem('col-right')">
        <LoginForm/>
      </div>
    </div>
  </div>
</template>

<script>
import useBem from 'vue3-bem';
import {LoginForm, Slider} from '../components';

const componentName = 'PageLogin';
const bem = useBem(componentName);

export default {
  name: componentName,
  components: {
    LoginForm,
    Slider
  },
  data: () => ({
    bem
  })
};
</script>

<style lang="scss" scoped>
@import "../../../sass/media";

.page-login {
  padding: 18px 24px 40px;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(255.78deg, #816AF8 13.11%, #D585F2 182.33%);
  position: relative;

  &:before {
    content: "";
    position: absolute;
    right: 42px;
    top: -14px;
    width: 497px;
    height: 309px;
    background: url(../../../img/pattern4.svg) 0 0/contain no-repeat;
  }

  &__logo {
    display: block;
    position: relative;
    z-index: 3;

    a {
      display: inline-block;
      vertical-align: top;
    }

    img {
      display: block;
      width: 138px;
    }
  }

  &__row {
    margin-top: 39px;
    position: relative;
    z-index: 2;
  }

  &__col-left {

  }

  &__col-right {
    margin-top: 46px;
  }

  &__title {
    font-weight: 300;
    font-size: 24px;
    line-height: 1.25;

    color: #FFFFFF;
  }

  &__slider {
    margin-top: 15px;
    color: #FFFFFF;
  }

  @media (min-width: $mb_small) {
    &:before {
      left: 0;
      right: auto;
      max-width: 100%;
    }

    &__title {
      font-size: 32px;
    }

    &__slider {
      margin-top: 20px;
    }
  }

  @media (min-width: $mb_middle) {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
    flex-wrap: wrap;

    padding: 110px 0;

    &:before {
      right: 49%;
      width: 51%;
    }

    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      width: 49%;
      height: 100%;
      background: #fff;
    }

    &__logo {
      position: absolute;
      left: 30px;
      top: 30px;

      img {
        width: auto;
      }
    }

    &__row {
      margin: auto;
      padding: 0 30px;
      width: 100%;
      max-width: 1210px;

      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      align-content: flex-start;
      flex-wrap: wrap;
    }

    &__col-left {
      width: 46%;
    }

    &__title {
      font-size: 24px;
    }

    &__col-right {
      width: 327px;
      margin-top: 0;
    }
  }

  @media (min-width: $mb_large) {
    &:before {
      right: auto;
      left: -303px;
      top: -205px;
      width: 100%;
      height: 760px;
    }

    &::after {
      width: 43.75%;
    }

    &__col-left {
      width: 47.74%;
    }

    &__title {
      font-size: 32px;
    }

    &__slider {
      margin-top: 40px;
      width: 100%;
    }
  }

  @media (min-width: $mb_exlarge) {
    &__title {
      font-size: 48px;
    }
  }
}
</style>
