<template>
    <div class="coursesPanel grid-x">
        <div class="cell small-12 grid-x grid-margin-x">
            <div
                class="cell small-12 medium-4 large-3 margin-bottom-2"
                v-for="course in courses"
                :key="course.id"
            >
                <CourseCard :course="course"/>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        courses: {
            type: Array,
            default: []
        },
    }
}
</script>
<style lang="scss" scoped>
@import 'foundation-sites/scss/foundation.scss';
@import '../../../../sass/colors';

.coursesPanel {
    .tabs {
        background: transparent;
    }

    .tabs-title {
        background: $colorBgCard;
        border-radius: 8px;
        padding: 15px 24px;
        margin-right: 2rem;

        &:last-child {
            margin-right: 0;
        }

        &.is-active {
            background: $colorBgActiveCard;
        }
    }
}
</style>
