<template>
  <swiper
    :class="bem('')"
    :modules="modules"
    :slidesPerView="'auto'"
    :space-between="15"
    :allowTouchMove="false"
    navigation
    @swiper="setSwiperRef"
  >
    <swiper-slide :class="bem('slide')">
      <div :class="bem('name')">ПРИВЕТСТВИЕ</div>
    </swiper-slide>
    <swiper-slide :class="bem('slide')">
      <div :class="bem('name')">ПОТРЕБНОСТИ</div>
    </swiper-slide>
    <swiper-slide :class="bem('slide')">
      <div :class="bem('name')">ПРИВЕТСТВИЕ</div>
    </swiper-slide>
    <swiper-slide :class="bem('slide')">
      <div :class="bem('name')">ПОТРЕБНОСТИ</div>
    </swiper-slide>
    <swiper-slide :class="bem('slide')">
      <div :class="bem('name')">ПРИВЕТСТВИЕ</div>
    </swiper-slide>
    <swiper-slide :class="bem('slide')">
      <div :class="bem('name')">ПОТРЕБНОСТИ</div>
    </swiper-slide>
    <swiper-slide :class="bem('slide')">
      <div :class="bem('name')">ПРИВЕТСТВИЕ</div>
    </swiper-slide>
    <swiper-slide :class="bem('slide')">
      <div :class="bem('name')">ПОТРЕБНОСТИ</div>
    </swiper-slide>
    <swiper-slide :class="bem('slide')">
      <div :class="bem('name')">ПРИВЕТСТВИЕ</div>
    </swiper-slide>
    <swiper-slide :class="bem('slide')">
      <div :class="bem('name')">ПОТРЕБНОСТИ</div>
    </swiper-slide>
  </swiper>
  <button @click="slideTo(8)" class="prepend-slide">Slide 1</button>
</template>

<script>
import useBem from 'vue3-bem';

import {Navigation} from 'swiper';
// eslint-disable-next-line import/no-unresolved
import {Swiper, SwiperSlide} from 'swiper/vue';
// eslint-disable-next-line import/no-unresolved
import 'swiper/scss';
// eslint-disable-next-line import/no-unresolved
import 'swiper/scss/navigation';

const componentName = 'SliderNames';
const bem = useBem(componentName);

export default {
  name: componentName,
  data: () => ({
    bem
  }),
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    let swiperRef = null;

    const setSwiperRef = (swiper) => {
      swiperRef = swiper;
    };

    const slideTo = (index) => {
      swiperRef.slideTo(index - 1);
    };

    return {
      swiperRef: null,
      setSwiperRef,
      slideTo,
      modules: [Navigation]
    };
  }
};
</script>

<style scoped lang="scss">
@import "../../../../../../sass/media";

.slider-names {
  &__slide{
  width: auto;
  }

  &__name{
  font-weight: 400;
  font-size: 12px;
  line-height: 31px;

  color: #A7A7A7;
  }

  .swiper-slide-active &__name{
  color: #1C1C1C;
  }

  @media (min-width: $mb_large) {
  }
}
</style>
