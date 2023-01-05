<template>
    <div class="grid-x">
        <div class="cell small-8 medium-1">
            <img src="/logo.svg" alt="logo">
        </div>
        <div class="cell hide-for-small-only medium-4">
            <span class="iconCircleWrapper"><Fa icon="magnifying-glass"/></span>
        </div>
        <div class="cell hide-for-small-only medium-3">
            <span class="iconCircleWrapper"><Fa :icon="['far','clock']"/></span>
        </div>
        <div class="cell hide-for-small-only medium-3">
            <UserStatusWidget :userName="'Иван Иванов'" :userId="2843"/>
        </div>
        <div class="cell small-4 medium-1 text-right">
            <span class="iconCircleWrapper"><Fa icon="bars"/></span>
        </div>
    </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
@import '~foundation-sites/scss/foundation.scss';
@import '../../../sass/colors';

.menuToggle {
    @include xy-cell(1);
    font-size: 20px;
}

</style>
