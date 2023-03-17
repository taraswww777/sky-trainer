<template>
  <div :class="bem()" class="_flex">
    <div :class="bem('icon iconCircleWrapper')">
      <img src="../../../../img/ic_time.svg" alt="">
    </div>

    <div :class="bem('box')">
      <div :class="bem('val')">23:21 | 10000:00</div>

      <div :class="bem('text')">Общее время тренировок</div>
    </div>
  </div>
</template>
<script>
import useBem from 'vue3-bem';

const bem = useBem('time-block');

export default {
  data: () => ({
    bem
  })
};
</script>
<style lang="scss" scoped>
@import "@sass/media";

.time-block
{
  flex-wrap: nowrap;

    &__icon
    {
        flex-shrink: 0;

        margin-right: 11px;
        padding: 11px;

        box-shadow: 0px 0px 44px rgba(0, 0, 0, .1);
    }

    &__box
    {
        width: 100%;
        padding-top: 6px;
    }

    &__val
    {
        color: #29343E;
        font-size: 14px;
        font-weight: 500;

        font-style: normal;
        line-height: normal;
    }

    &__text
    {
        color: #29343E;
        font-size: 11px;
        font-weight: 400;

        font-style: normal;
        line-height: normal;
    }
}
</style>
