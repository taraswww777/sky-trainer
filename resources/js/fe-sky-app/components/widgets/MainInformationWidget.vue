<template>
  <div :class="bem()">
    <div :class="bem('icon')">
      <!-- <div :class="bem('icon','orange')">
  <div :class="bem('icon','purple')"> -->
      <img src="../../../../img/ic_info1.svg" alt="">
    <!-- <img src="../../../../img/ic_info2.svg" alt="">
    <img src="../../../../img/ic_info3.svg" alt=""> -->
    </div>

    <div :class="bem('flex')">
      <div :class="bem('box')">
        <div :class="bem('title')">Ошибки в тексте</div>

        <div :class="bem('bot _flex')">
          <div :class="bem('number')">120</div>

          <div :class="bem('percent _flex')">
            <div :class="bem('percent-number')">+11.01%</div>
            <!-- <div :class="bem('percent-number','red')">+11.01%</div> -->

            <div :class="bem('percent-icon')">
              <img src="../../../../img/arrow_up.svg" alt="">
            <!-- <img src="../../../../img/arrow_down.svg" alt=""> -->
            </div>
          </div>
        </div>
      </div>

      <div :class="bem('progress')">
        <svg :class="bem('progress-svg')" width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Вместо 50.8 передаешь любое число от 0 до 100 (0 это 0%) (100 это 100%) -->
          <circle :class="bem('progress-line')" cx="33" cy="33" r="29" stroke="url(#paint0_linear_581_8249)" stroke-width="8" stroke-dashoffset="calc(11 * 1.8 + 180)" />
          <defs>
            <linearGradient id="paint0_linear_581_8249" x1="33" y1="0" x2="33" y2="66" gradientUnits="userSpaceOnUse">
              <stop stop-color="#6BD188" />
              <stop offset="1" stop-color="#3EAC5E" />

            <!-- <stop stop-color="#F19F52"/>
            <stop offset="1" stop-color="#FF6B7D"/>

            <stop stop-color="#9869F6"/>
            <stop offset="1" stop-color="#C17DF3"/> -->
            </linearGradient>
          </defs>
        </svg>

        <div :class="bem('progress-number')">
          <span>11%</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import useBem from 'vue3-bem';

const name = 'MainInfo';
const bem = useBem(name);

export default {
  name,
  data: () => ({
    bem
  })
};
</script>
<style lang="scss" scoped>
@import "@sass/media";

.main-info {
  padding: 20px 22px 12px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 0px 44px rgba(0, 0, 0, 0.09);
  border-radius: 8px;

  &__icon{
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;

    padding: 8px;
    border-radius: 4px;
    background: #E1FFEF;
    width: 34px;
    height: 34px;

    img{
      display: block;
      max-width: 100%;
      max-height: 100%;
    }

    &--orange{
      background: #FFF5EF;
    }

    &--purple{
      background: #F4EEFF;
    }
  }

  &__flex{
    margin-top: 12px;

    display: flex;
    justify-content: space-between;
    align-content: flex-end;
    align-items: flex-end;
    flex-wrap: nowrap;
    min-height: 78px;
  }

  &__box{
    margin-right: 20px;
  }

  &__title{
    font-weight: 600;
    font-size: 14px;
    line-height: 1.43;
    color: #1C1C1C;
  }

  &__bot{
    margin-top: 8px;

    align-content: center;
    align-items: center;
  }

  &__number{
    font-weight: 600;
    font-size: 24px;
    line-height: 1.5;
    color: #1C1C1C;

    margin-right: 10px;
  }

  &__percent{
    align-content: center;
    align-items: center;
    flex-wrap: nowrap;

    &-number{
      font-weight: 400;
      font-size: 12px;
      line-height: 1.5;
      margin-right: 4px;

      color: #1A9954;

      &--red{
        color: #E40521;
      }
    }

    &-icon{
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      flex-wrap: wrap;

      margin-left: 4px;
      flex-shrink: 0;
      width: 16px;
      height: 16px;

      img{
        display: block;
        max-width: 100%;
        max-height: 100%;
      }
    }
  }

  &__progress{
    width: 66px;
    height: 66px;
    flex-shrink: 0;
    margin-left: 20px;
    padding: 2px;
    margin-bottom: 4px;
    position: relative;
  }

  &__progress-number{
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;

    font-weight: 700;
    font-size: 14px;
    line-height: 1;

    color: #1C1C1C;
    border: 4px solid rgba(181, 181, 181, 0.25);
    height: 100%;
    border-radius: 50%;
  }

  &__progress-svg{
    transform: rotate(-90deg);
    display: block;
    z-index: 1;

    position: absolute;
    left: 0;
    top: 0;
  }

  &__progress-line{
    stroke-linecap: round;
    stroke-dasharray: 180;
  }
}
</style>
