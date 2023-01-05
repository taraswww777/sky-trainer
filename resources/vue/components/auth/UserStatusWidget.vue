<template>
    <div class="grid-x">
        <div class="cell small-3 large-2 flex-container align-middle">
            <span class="iconCircleWrapper"><Fa :icon="['far','user']"/></span>
        </div>
        <div class="cell small-9 large-10">
            <div class="userName">{{ userName }}</div>
            <div class="userId">Ваш ID: {{ userId }}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['userName', 'userId']
}
</script>
<style lang="scss" scoped>
@import '~foundation-sites/scss/foundation.scss';
@import '../../../sass/colors';

.userName {
    color: $colorGray1;
    font-weight: bold;
}

.userId {
}
</style>
