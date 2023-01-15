<template>
    <button :type="type" class="primaryButton button primary">
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
<style lang="scss">
@import '~foundation-sites/scss/foundation.scss';
@import '../../../sass/colors';

.primaryButton {
    &.button {
        border-radius: 2rem;
        padding: 1rem 1.5rem;
        margin: 0;

        &.primary {
            background: $colorWhite;
            border-color: $colorDarkPurple;
            color: $colorDarkPurple;

            a {
                color: $colorDarkPurple;
            }

            &:hover {
                color: $colorWhite;
                background: linear-gradient(84.09deg, $colorPurple 4.37%, $colorDarkPurple 94.11%);

                a {
                    color: $colorWhite;
                }
            }
        }
    }
}
</style>
