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
      <ul :class="bem('nav-list')">
        <li
          :class="bem('nav-item')"
          v-for="(item , i) in items" :key="i"></li>
      </ul>
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
    default: []
  },
  data: () => ({
    bem
  })
};
</script>
<style lang="scss" scoped>
@import '../../../../sass/colors';
@import "../../../../sass/media";

.slider {
  &__slide-list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  &__slide-item {
    width: 100%;
    font-size: 14px;
    @media (min-width: $mb_small) {
      font-size: 14px;
      line-height: 1.71;
    }
    @media (min-width: $mb_middle) {
      font-size: 12px;
      line-height: 1.33;
    }
  }

  &__desc {
    font-size: 12px;
    line-height: 1.33;

    color: #FFFFFF;
  }

  &__nav {
    margin: 64px 0 0;
    padding: 0;
    list-style: none;
  }

  &__nav-list {
    list-style: none;
    display: flex;
    overflow-x: hidden;
  }

  &__nav-item {
    background: rgba(217, 217, 217, 0.55);
    height: 5px;
    border-radius: 8px;
    width: 30px;
    margin-right: 10px;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    &--active {
      background: #D9D9D9;
    }
  }
}
</style>
