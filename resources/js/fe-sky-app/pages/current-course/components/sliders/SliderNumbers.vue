<template>

  <swiper
    :class="bem('')"
    :modules="modules"
    :slidesPerView="8"
    :space-between="0"
    :allowTouchMove="false"
    navigation
    @swiper="setSwiperRef"
  >
    <swiper-slide :class="bem('slide')">
      <div :class="bem('number')">1</div>
    </swiper-slide>
    <swiper-slide :class="bem('slide')">
      <div :class="bem('number')">2</div>
    </swiper-slide>
    <swiper-slide :class="bem('slide')">
      <div :class="bem('number')">3</div>
    </swiper-slide>
    <swiper-slide :class="bem('slide')">
      <div :class="bem('number')">4</div>
    </swiper-slide>
    <swiper-slide :class="bem('slide')">
      <div :class="bem('number')">5</div>
    </swiper-slide>
    <swiper-slide :class="bem('slide')">
      <div :class="bem('number')">6</div>
    </swiper-slide>
    <swiper-slide :class="bem('slide')">
      <div :class="bem('number')">7</div>
    </swiper-slide>
    <swiper-slide :class="bem('slide')">
      <div :class="bem('number')">8</div>
    </swiper-slide>
    <swiper-slide :class="bem('slide')">
      <div :class="bem('number')">9</div>
    </swiper-slide>
    <swiper-slide :class="bem('slide')">
      <div :class="bem('number')">10</div>
    </swiper-slide>
  </swiper>
  <button type="button" @click="slideNext()" class="prepend-slide">Slide 1</button>
</template>

<script>
import useBem from 'vue3-bem';

import {Navigation} from 'swiper';
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';

const componentName = 'SliderNumbers';
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

    const slideNext = () => {
      swiperRef.slideNext();
    };

    return {
      swiperRef: null,
      setSwiperRef,
      slideNext,
      modules: [Navigation]
    };
  }
};
</script>

<style scoped lang="scss">
@import "../../../../../../sass/media";

.slider-numbers {
  margin-top: 8px;
  border-radius: 50px;

  &__slide{
  /* width: auto; */
  position: relative;

  &:before{
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 1000px;
    background: linear-gradient(84.09deg, rgba(45, 196, 88, 0.15) 4.37%, rgba(26, 186, 176, 0.15) 94.11%);
    border-radius: 50px;
  }
  }

  &__number{
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    line-height: 24px;
    text-align: center;

    font-size: 14px;
    color: #989898;
  }

  .swiper-slide-active &__number{
  background: linear-gradient(84.09deg, #2DC458 4.37%, #1ABAB0 94.11%);
  color: #fff;
  }

  @media (min-width: $mb_large) {
  }
}
</style>
