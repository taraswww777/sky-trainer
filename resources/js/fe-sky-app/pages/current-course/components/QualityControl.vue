<template>
  <div :class="bem()">
    <div :class="bem('flex')">
      <div :class="bem('title')">Контроль <br>качества</div>

      <div :class="bem('progress')">
        <div :class="bem('progress-number')">50.8%</div>

        <svg :class="bem('progress-svg')" width="113" height="113" viewBox="0 0 113 113" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Вместо 50.8 передаешь любое число от 0 до 100 (0 это 0%) (100 это 100%) -->
          <circle :class="bem('progress-line')" cx="56.5" cy="56.5" r="48.5" fill="none" stroke="url(#paint1_linear_523_8240)" stroke-width="16" stroke-dashoffset="calc(50.8 * 3.04 + 304)" />
          <defs>
            <linearGradient id="paint1_linear_523_8240" x1="56.5" y1="0" x2="56.5" y2="113" gradientUnits="userSpaceOnUse">
              <stop stop-color="#00FFC2" />
              <stop offset="1" stop-color="#48F8ED" stop-opacity="0.45" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div :class="bem('info')">Среднее качество</div>
    </div>
  </div>
</template>

<script>
import useBem from 'vue3-bem';

const componentName = 'QualityControl';
const bem = useBem(componentName);

export default {
  name: componentName,
  data: () => ({
    bem
  })
};
</script>

<style scoped lang="scss">
/* @import '../../../../../sass/mixins'; */
@import "../../../../../sass/media";

.quality-control {
  background: linear-gradient(84.09deg, #2DC458 4.37%, #1ABAB0 94.11%);
  border-radius: 8px;
  padding: 20px 158px 20px 25px;
  margin-bottom: 20px;
  position: relative;

  &__flex{
    display: flex;
    flex-direction: column;

    min-height: 113px;
  }

  &__title{
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;

    color: #FFFFFF;
    margin-bottom: 20px;
    width: 100%;
  }

  &__info{
    font-size: 12px;
    line-height: 1.5;
    padding-left: 11px;

    color: #FFFFFF;
    margin-top: auto;
    width: 100%;
    position: relative;

    &::before{
      content: '';
      position: absolute;

      left: 0;
      top: 50%;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #03FEC3;
      margin-top: -3px;
    }
  }

  &__progress{
    position: absolute;
    top: 20px;
    right: 25px;
    width: 113px;
    height: 113px;
    flex-shrink: 0;
    margin-left: 20px;

    &::before{
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border: 16px solid rgba(231, 239, 244, 0.35);
      border-radius: 50%;
    }
  }

  &__progress-number{
    position: absolute;
    left: -12px;
    bottom: 18px;
    display: inline-block;
    vertical-align: top;
    background: #1F1F1F;
    border-radius: 4px;

    line-height: 22px;
    font-size: 12px;
    padding: 0 4px;

    color: #FFFFFF;
    z-index: 2;
  }

  &__progress-svg{
    transform: rotate(-90deg);
    display: block;
    z-index: 1;
  }

  &__progress-line{
    stroke-linecap: round;
    stroke-dasharray: 304;
  }

  @media (min-width: $mb_middle) {
    padding-right: 25px;

    &__flex{
      flex-direction: row;
      align-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;

      justify-content: space-between;
    }

    &__title{
      width: calc(100% - 133px);
    }

    &__info{
      width: 100%;
      margin-top: -2px;
    }

    &__progress{
      position: relative;
      top: 0;
      right: 0;
    }
  }
}
</style>
