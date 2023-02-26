<template>
    <div :class="bem()">
        <CommonBreadcrumbs :crumbs="crumbs"/>

        <div class="page-head">
            <h1 class="page-head__title">
                <span>{{ title }}</span>
            </h1>
        </div>

        <div :class="bem('content')">
            <slot></slot>
        </div>
        <Loader v-if="isLoading"/>
    </div>
</template>
<script>
import useBem from 'vue3-bem';

const bem = useBem('base-page');

export default {
  props: {
    title: {type: String, default: ''},
    crumbs: {type: Array, default: () => []},
    isLoading: {type: Boolean, default: false}
  },
  data: () => ({
    bem
  })
};
</script>
<style lang="scss" scoped>
/* ;
@import '../../../../sass/colors'; */
@import "../../../../sass/media";

.base-page
{
    padding: 30px;

    border-radius: 8px;
    /* @include xy-grid();
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
    } */
    background: #FFF;
    box-shadow: 0px 0px 44px rgba(0, 0, 0, .1);
}
</style>
