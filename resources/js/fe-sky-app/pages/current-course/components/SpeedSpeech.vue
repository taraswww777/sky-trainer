<template>
  <div :class="bem()">
    <div :class="bem('title')">Лог разговора</div>

    <div :class="bem('diagram')">
      <div :class="bem('diagram-line')" />

      <!-- Вместо 90 передаешь любое число от 0 до 100 (0 это 0%) (100 это 100%) -->
      <div :class="bem('diagram-dot')" style="transform: rotate(calc(90deg * 1.8));" />

      <div :class="bem('diagram-text')">
        <span>Говорите <br>медленнее</span>
      </div>
    </div>
  </div>
</template>

<script>
import useBem from 'vue3-bem';

const componentName = 'SpeedSpeech';
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

.speed-speech {
  background: rgba(255, 255, 255, 0.75);
  box-shadow: 0px 0px 44px rgba(0, 0, 0, 0.075);
  border-radius: 8px;
  padding: 20px 25px 0;
  margin-bottom: 20px;

  &__title{
    font-weight: 600;
    font-size: 14px;
    line-height: 1.14;

    color: #1C1C1C;
    margin-bottom: 10px;
  }

  &__diagram{
    overflow: hidden;
    height: 99px;
    width: 181px;
    margin-left: auto;
    position: relative;
  }
  &__diagram-line{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background: url(../../../../../img/speed_speech.svg) 0 0/contain no-repeat;
  }

  &__diagram-dot{
    width: 100%;
    padding-bottom: 100%;
    position: absolute;

    left: 0;
    top: 0;

    &::before{
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #E3E6EE;
      box-shadow: 0 0 0 4px #fff;
      margin-top: -8px;
    }
  }

  &__diagram-text{
    position: absolute;
    left: 14.36%;
    bottom: 0;
    width: 71.28%;
    height: 70.8%;

    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    padding: 20px 14px 0;

    font-size: 12px;
    line-height: 1;
    text-align: center;

    color: #353535;

    &:before{
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      padding-bottom: 100%;
      background: #FAF4D9;
      border-radius: 50%;
    }

    span{
      position: relative;
    }
  }

  @media (min-width: $mb_large) {
    &__diagram{
      margin-right: auto;
    }
  }
}
</style>
