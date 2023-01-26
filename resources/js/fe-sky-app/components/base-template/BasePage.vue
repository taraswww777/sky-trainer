<template>
    <div :class="bem()">
        <div :class="bem('breadcrumbs')">
            <Breadcrumbs :crumbs="crumbs"/>
        </div>
        <h1 :class="bem('title')">{{ title }}</h1>
        <div :class="bem('content')">
            <slot></slot>
        </div>
        <Loader v-if="isLoading"/>
    </div>
</template>
<script>
import useBem from "vue3-bem";

const bem = useBem("base-page");

export default {
    props: ['title', 'crumbs', 'isLoading'],
    data: () => ({
        bem,
        crumbs: [],
        title: '',
        isLoading: false
    })
}
</script>
<style lang="scss" scoped>
@import 'foundation-sites/scss/foundation.scss';
@import '../../../../sass/colors';

.base-page {
    @include xy-grid();

    width: 100%;
    padding: 30px;
    border-radius: 8px;
    background: $colorWhite;
    position: relative;

    &__breadcrumbs,
    &__title,
    &__content {
        @include xy-cell(12);
        margin: 0 0 20px;
        padding: 0;
        line-height: 1;
    }
}
</style>
