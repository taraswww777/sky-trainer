<template>
  <div :class="bem()">
    <img
      ref="image"
      :class="bem('img')"
      :src="image.path"
      alt=""
    >
    <button
      v-for="(_, indexArea) in image.imgmap"
      :key="indexArea"
      type="button"
      @click="()=>onClickBtnArea(indexArea)"
      :style="areaStyles[indexArea] || {}"
      :class="bem('area')">
      {{ indexArea }}
    </button>
  </div>
</template>

<script>
import useBem from 'vue3-bem';
import {toNumber} from 'lodash';

const componentName = 'InteractiveImg';
const bem = useBem(componentName);

export default {
  name: componentName,
  props: ['image', 'onClickBtnArea'],
  data: () => ({
    bem,
    areaStyles: []
  }),
  methods: {
    prepareAreaStyle(rawArea) {
      const {
        clientWidth,
        naturalWidth
      } = this.$refs.image;
      const multiple = clientWidth / naturalWidth;

      const area = rawArea.map((items) => items.map((v) => toNumber(v) * multiple));

      const width = (area[1][0] - area[0][0]) + 6;
      const height = (area[2][1] - area[1][1]) + 10;

      const left = area[0][0] - 1;
      const top = area[0][1] - 5;

      return {
        left: `${left}px`,
        top: `${top}px`,
        width: `${width}px`,
        height: `${height}px`
      };
    },
    updateAreaStyles() {
      this.areaStyles = this.image.imgmap.map(this.prepareAreaStyle);
    }
  },
  mounted() {
    setTimeout(this.updateAreaStyles, 1000);
    window.addEventListener('resize', this.updateAreaStyles);
  },
  unmounted() {
    window.removeEventListener('resize', this.updateAreaStyles);
  }
};
</script>

<style scoped lang="scss">
@import "@sass/media";

.interactive-img {
  position: relative;
  width: 100%;
  overflow: hidden;

  &__img {
    max-width: 100%;
  }

  &__area {
    position: absolute;
    cursor: pointer;
    border: 2px solid red;
    color: transparent;
    font-size: 0;

    &:hover {
      border-color: orange;
    }

    &--ok {
      border-color: lawngreen;
    }

    &--disabled {
      background-color: gray;
      opacity: 0.5;
    }
  }
}
</style>
