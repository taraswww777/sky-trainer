<template>
    <div>
        <button
            class="header__mob-menu-btn mob-menu-btn iconCircleWrapper"
            type="button"
            @click.prevent="openMenu"
        >
            <!-- <Fa icon="bars"/> -->
      <img src="../../../../img/burger.svg" alt="">
        </button>
        <div class="wrap-aside" v-show="isOpen">
      <!-- При клике на .wrap-aside__close добавлять фсешму, a для .wrap-aside добавлять класс small, для .cont-page добавить big -->
      <button class="wrap-aside__close">
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4708 12.4715C10.7311 12.2111 10.7311 11.789 10.4708 11.5287L6.94216 8.00008L10.4708 4.47149C10.7311 4.21114 10.7311 3.78903 10.4708 3.52868C10.2104 3.26833 9.78829 3.26833 9.52794 3.52868L5.52794 7.52868C5.26759 7.78903 5.26759 8.21114 5.52794 8.47149L9.52794 12.4715C9.78829 12.7318 10.2104 12.7318 10.4708 12.4715Z"/>
        </svg>
      </button>

            <MainMenu :onClose="closeMenu"/>
        </div>
    </div>
</template>
<script>
export default {
  data: () => ({
    isOpen: false
  }),
  methods: {
    closeMenu() {
      this.isOpen = false;
    },
    openMenu() {
      this.isOpen = true;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../../sass/media";

.wrap-aside {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.75);
    width: 100%;
    height: 100%;
    z-index: 100;

  @media (min-width: $mb_exlarge) {
    &.small{
      width: 98px;
    }
  }

  .wrap-aside__close{
    position: absolute;
    top: 32px;
    right: -12px;

    display: none;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    width: 24px;
    height: 24px;
    border: none;
    cursor: pointer;

    background: #FFFFFF;
    box-shadow: 0px 0px 44px rgba(0, 0, 0, 0.15);
    border-radius: 50px;
    padding: 4px;

    color: #868686;

    transition: color .2s linear;
    z-index: 10;

    @media (min-width: $mb_exlarge) {
      display: block;
    }

    &:before
    {
      content: "";

      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      opacity: 0;
      border-radius: 50px;
      background: linear-gradient(84.09deg, #D485F1 4.37%, #7156F8 94.11%);

      transition: opacity .2s linear;
    }

    @media (any-hover: hover) {
      &:hover
      {
        color: #FFF;

        &:before
        {
          opacity: 1;
        }
      }
    }

    svg{
      display: block;
      max-width: 100%;
      max-height: 100%;

      fill: currentColor;
      position: relative;
      z-index: 1;
    }

    &.active{
      transform: rotate(180deg);
    }
  }

  @media (min-width: $mb_exlarge) {
    width: 247px;

    display: block !important;

    .wrap-aside__close{
      display: flex;
    }
  }

  &__MainMenu {
    height: 100%;
  }
}
</style>
