<template>
    <div class="courseCard grid-x">
        <div class="cell small-12 margin-bottom-1">
            {{ course.name }}
        </div>
        <div class="cell small-12 grid-x align-justify align-middle">
            <PrimaryButton>Начать тренировку</PrimaryButton>
            <circleButton>
                <Fa icon="info"/>
            </circleButton>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        course: Object
    }
}
</script>
<style lang="scss" scoped>
@import '~foundation-sites/scss/foundation.scss';
@import '../../../sass/colors';

.courseCard {
    border-radius: 8px;
    background: $colorBgCard;
    padding: 20px;

    &:hover {
        background: $colorBgActiveCard;
        cursor: pointer;
    }
}
</style>
