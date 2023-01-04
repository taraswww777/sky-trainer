<template>
    <div class="grid-x">
        <div class="cell small-8 medium-1">
            <img src="/logo.svg" alt="logo">
        </div>
        <div class="cell hide-for-small-only medium-4">
            <span class="icon"><Fa icon="magnifying-glass"/></span>
        </div>
        <div class="cell hide-for-small-only medium-3">
            <span class="icon"><Fa :icon="['far','clock']"/></span>
        </div>
        <div class="cell hide-for-small-only medium-3">
            <span class="icon"><Fa :icon="['far','user']"/></span>
        </div>
        <div class="cell small-4 medium-1 text-right">
            <span class="icon"><Fa icon="bars"/></span>
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

.icon {
    display: inline-flex;
    width: 40px;
    height: 40px;
    background: $colorWhite;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
}
</style>
