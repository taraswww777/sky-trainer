<template>
  <div class="notice">
    <slot />
  </div>
</template>
<script>
const name = 'CommonNotice';
export default {
  name,
  props: {
    crumbs: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="scss" scoped>

@import "../../../../sass/media";

.notice {
    background: #EAEEF6;
    border-radius: 8px;

    padding: 58px 18px 18px;
    position: relative;

    font-weight: 400;
    font-size: 13px;
    line-height: 1.23;

    color: #313131;

    &::before {
        content: '';
        position: absolute;
        left: 18px;
        top: 18px;
        width: 26px;
        height: 26px;
        background: #fff url(../../../../img/ic_important.svg) 50% no-repeat;
        border-radius: 50%;
    }

    p {
        font-weight: 400;
        font-size: 13px;
        line-height: 1.23;

        color: #313131;
        margin-bottom: 16px;
    }

    & > * {
        max-width: 914px;
    }

    & > :last-child {
        margin-bottom: 0;
    }

    @media (min-width: $mb_small) {
        padding-top: 18px;
        padding-left: 60px;

        &:before {
            left: 20px;
        }
    }
}

/* .notice {
    width: 100%;
    padding: 20px;
    border-radius: 8px;
    background: #EAEEF6;
    display: flex;
    flex-wrap: nowrap;

    &__icon {
    }

    &__content {
        flex-grow: 1;
        padding: 0 15px;
        line-height: 1.5;
    }
} */
</style>
