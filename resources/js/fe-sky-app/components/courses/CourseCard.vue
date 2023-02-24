<template>
    <div :class="bem()">
    <div :class="bem('dots')">
      <img src="../../../../img/ic_dots.svg" alt="">
    </div>

    <div :class="bem('head _flex')">
      <div :class="bem('icon')">
        <img src="../../../../img/logo.svg" alt="">
      </div>

      <div :class="bem('name')">
        {{ course.name }}
      </div>
    </div>
    <div :class="bem('bot _flex')">
      <router-link :to="{name:PAGE_NAMES.courseItem, params:{courseId: course.id}}" :class="bem('link btn-purple')">
        <span>Начать тренировку</span>
      </router-link>

      <!-- <CircleButton>
        <Fa icon="info"/>
      </CircleButton> -->
      <div class="tolltip">
        <div class="tolltip__icon">
          <img src="../../../../img/ic_i.svg" alt="">
        </div>

        <div class="tolltip__box">
          <div class="tolltip__feature">
            <div class="tolltip__feature-item _flex">
              <div class="tolltip__feature-name">
                <div class="tolltip__feature-icon">
                  <img src="../../../../img/ic_dot_gray.svg" alt="">
                </div>

                Попыток
              </div>
              <div class="tolltip__feature-val">0</div>
            </div>
            <div class="tolltip__feature-item _flex">
              <div class="tolltip__feature-name">
                <div class="tolltip__feature-icon">
                  <img src="../../../../img/ic_dot_green.svg" alt="">
                </div>

                Успешно
              </div>
              <div class="tolltip__feature-val">0</div>
            </div>
            <div class="tolltip__feature-item _flex">
              <div class="tolltip__feature-name">
                <div class="tolltip__feature-icon">
                  <img src="../../../../img/ic_dot_blue.svg" alt="">
                </div>

                Задано
              </div>

              <div class="tolltip__feature-val">2</div>
            </div>
          </div>

          <div class="tolltip__time _flex">
            <div class="tolltip__time-info _flex">
              <div class="tolltip__time-icon">
                <img src="../../../../img/ic_time2.svg" alt="">
              </div>

              <div class="tolltip__time-name">Total training time:</div>
            </div>

            <div class="tolltip__time-time">00:08:37</div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
import useBem from 'vue3-bem';
import {PAGE_NAMES} from '../../constants';

const bem = useBem('course-card');

export default {
  data: () => ({
    PAGE_NAMES,
    bem,
  }),
  props: {
    course: Object,
  },
};
</script>
<style lang="scss">
/* ;
@import '../../../../sass/colors'; */
@import "../../../../sass/media";

.course-card {
    background: rgba(255, 255, 255, 0.45);
  box-shadow: 0px 0px 44px rgba(0, 0, 0, 0.045);
  border-radius: 8px;

  padding: 25px 20px 30px;

  position: relative;
  transition: background .2s linear, box-shadow .2s linear;

  display: flex;
  flex-direction: column;

  &::before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url(../../../../img/pattern2.svg) 0 0 no-repeat;
    pointer-events: none;
    opacity: 0;
    transition: opacity .2s linear;
  }

  &::after{
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: url(../../../../img/pattern3.svg) 100% 100% no-repeat;
    pointer-events: none;
    opacity: 0;
    transition: opacity .2s linear;
  }

  &:hover {
    background: #FFFFFF;
    box-shadow: 0px 0px 44px rgba(0, 0, 0, 0.1);

    &::before,
    &::after{
      opacity: 1;
    }
  }

  &__dots{
    position: absolute;
    top: 25px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;

    width: 3px;
    height: 15px;

    img{
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
  }

  &__head{
    margin-bottom: 21px;
    flex-wrap: nowrap;
    width: 100%;
    padding-right: 16px;
  }

  &__icon{
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    flex-shrink: 0;
    margin-right: 10px;

    img{
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
  }

  &__name{
    font-weight: 600;
    font-size: 16px;
    line-height: 1.12;

    color: #363636;
  }

  &__bot{
    margin-top: auto;
    width: 100%;

    justify-content: space-between;
  }
}

.tolltip{
  position: relative;

  &:hover &__box{
    opacity: 1;
  }

  &__icon{
    border: 1px solid #E9E9E9;
    border-radius: 59px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;

    padding: 4px;

    img{
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
  }

  &__box{
    position: absolute;
    right: -8px;
    top: calc(100% + 15px);

    background: #FFFFFF;
    box-shadow: 0px 0px 44px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 20px 22px;
    z-index: 99;

    opacity: 0;
    pointer-events: none;

    width: 262px;

    &::before{
      content: '';
      position: absolute;
      right: 16px;
      bottom: calc(100% - 2px);
      border: 12px solid transparent;
      border-bottom: 16px solid #fff;
      pointer-events: none;
    }

    @media (min-width: $mb_huge) {
      left: -8px;
      right: auto;

      &::before{
        right: auto;
        left: 16px;
      }
    }
  }

  &__feature-item{
    justify-content: space-between;
    flex-wrap: nowrap;
  }

  &__feature-item + &__feature-item{
    margin-top: 8px;
  }

  &__feature-name{
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;

    color: #575757;
    position: relative;
    padding-left: 18px;
  }

  &__feature-icon{
    position: absolute;
    left: 6px;
    top: 6px;
    width: 6px;
    height: 6px;
    border-radius: 50%;

    img{
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
  }

  &__feature-val{
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;

    color: #1C1C1C;
    white-space: nowrap;
    flex-shrink: 0;
    margin-left: 14px;
  }

  &__time{
    margin-top: 15px;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  &__time-info{
    flex-wrap: nowrap;
  }

  &__time-icon{
    flex-shrink: 0;
    width: 14px;
    height: 14px;

    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    margin-right: 4px;
    margin-top: 2px;

    img{
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
  }

  &__time-name{
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;

    color: #575757;
  }

  &__time-time{
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;

    color: #1C1C1C;
    flex-shrink: 0;
    margin-left: 14px;
  }
}

.courses__item:nth-child(4n) .tolltip__box{
  @media (min-width: $mb_huge) {
    right: -8px;
    left: auto;

    &::before{
      left: auto;
      right: 16px;
    }
  }
}
</style>
