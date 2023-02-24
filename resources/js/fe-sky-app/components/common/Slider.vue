<template>
  <div :class="bem()">
    <div :class="bem('slide-list')">
      <div
        :class="bem('slide-item')"
        v-for="(item , i) in items" :key="i">
        {{ item }}
      </div>
    </div>
    <div :class="bem('nav')">
      <div :class="bem('nav-item')"></div>
    </div>
  </div>
</template>
<script>
import useBem from 'vue3-bem';

const name = 'Slider';
const bem = useBem(name);

export default {
  name,
  props: {
    items: Array,
    default: [],
  },
  data: () => ({
    bem,
  }),
};
</script>
<style lang="scss" scoped>
@import '../../../../sass/colors';
@import "../../../../sass/media";

.slider {
  &__desc {
    font-size: 12px;
    line-height: 1.33;

    color: #FFFFFF;
  }

  @media (min-width: $mb_small) {
    &__desc {
      font-size: 14px;
      line-height: 1.71;
    }
  }
  @media (min-width: $mb_middle) {
    &__desc {
      font-size: 12px;
      line-height: 1.33;
    }
  }
}
</style>
