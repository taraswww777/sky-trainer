<template>
    <div class="courseCard grid-x">
        <div class="cell small-12 margin-bottom-1">
            {{ course.name }}
        </div>
        <div class="cell small-12 grid-x align-justify align-middle">
            <PrimaryButton>
                <router-link :to="{name:PAGE_NAMES.courseItem, params:{courseId: course.id}}">
                    Начать тренировку
                </router-link>
            </PrimaryButton>
            <CircleButton>
                <Fa icon="info"/>
            </CircleButton>
        </div>
    </div>
</template>
<script>
import {PAGE_NAMES} from '../../../js/constants';

export default {
    data() {
        return {PAGE_NAMES}
    },
    props: {
        course: Object
    }
}
</script>
<style lang="scss">
@import '~foundation-sites/scss/foundation.scss';
@import '../../../sass/colors';

.courseCard {
    border-radius: 8px;
    background: $colorBgCard;
    padding: 20px;

    &:hover {
        background: $colorBgActiveCard;
    }
}
</style>
