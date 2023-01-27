<template>
    <button :type="type" class="circleButton">
        <slot></slot>
    </button>
</template>
<script>
export default {
    props: {
        crumbs: {
            type: Array,
            default: []
        },
        type: {
            type: String,
            default: 'button'
        }
    }
}
</script>
<style lang="scss" scoped>
@import 'foundation-sites/scss/foundation.scss';
@import '../../../../sass/colors';

.circleButton {
    height: 40px;
    width: 40px;
    border-radius: 2rem;
    margin: 0;
    border: 1px solid $colorGray4;
    color: $colorBrand;
    background: $colorWhite;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    cursor: pointer;

    &:hover {
        border-color: $colorGray2;
    }
}
</style>
