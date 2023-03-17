<template>
  <div :class="bem()">
    <div :class="bem('title')">Стадия воронки</div>

    <SliderNames />

    <SliderNumbers />
  </div>
</template>

<script>
import useBem from 'vue3-bem';
import SliderNames from './sliders/SliderNames.vue';
import SliderNumbers from './sliders/SliderNumbers.vue';

const componentName = 'FunnelStage';
const bem = useBem(componentName);

export default {
  name: componentName,
  components: {
    SliderNames,
    SliderNumbers
  },
  data: () => ({
    bem
  })
};
</script>

<style scoped lang="scss">
/* @import '../../../../../sass/mixins'; */
@import "../../../../../sass/media";

.funnel-stage {
  background: rgba(255, 255, 255, 0.75);
  box-shadow: 0px 0px 44px rgba(0, 0, 0, 0.075);
  border-radius: 8px;
  padding: 20px 25px 20px;
  margin-bottom: 20px;

  &__title{
    font-weight: 600;
    font-size: 14px;
    line-height: 1.14;

    color: #1C1C1C;
    margin-bottom: 12px;
  }
}
</style>
