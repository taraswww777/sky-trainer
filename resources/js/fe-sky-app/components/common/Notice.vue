<template>
    <div class="notice">
        <div class="notice__icon"><span class="iconCircleWrapper">!</span></div>
        <div class="notice__content">
            <slot></slot>
        </div>
    </div>
</template>
<script>

export default {
    props: {
        crumbs: {
            type: Array,
            default: []
        }
    }
}
</script>
<style lang="scss" scoped>
@import 'foundation-sites/scss/foundation.scss';
@import '../../../../sass/colors';

.notice {
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
}
</style>
