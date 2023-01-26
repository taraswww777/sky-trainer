<template>
    <div :class="bem()" v-if="tags && tags.length > 0">
        <div :class="bem('item')" v-for="tag in tags">
            {{ tag }}
        </div>
    </div>
</template>
<script>
import useBem from "vue3-bem";

const bem = useBem("tag-list");
export default {
    data: () => ({
        bem
    }),
    props: {
        tags: {
            type: Array,
            default: []
        }
    }
}
</script>
<style lang="scss" scoped>
@import 'foundation-sites/scss/foundation.scss';
@import '../../../../sass/colors';

.tag-list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;


    &__item {
        background: $colorGray5;
        padding: 10px 18px;
        border-radius: 50px;
        color: $colorBrand;
        font-weight: bold;
        line-height: 1;

        & + & {
            margin-left: 10px;
        }
    }
}
</style>
