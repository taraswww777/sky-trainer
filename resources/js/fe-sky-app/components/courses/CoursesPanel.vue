<template>
	<div class="courses courses_marg">
		<div class="courses__grid _flex">
			<div
				class="courses__item"
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
/* @import 'foundation-sites/scss/foundation.scss';
@import '../../../../sass/colors'; */
@import "../../../../sass/media";

.courses {
	&_marg{
		margin-top: 24px;
	}

	&__grid{
		margin: -20px 0 0 -20px;

		align-items: stretch;
		align-content: stretch;
	}

	&__item{
		width: calc(100% - 20px);
		margin: 20px 0 0 20px;
		min-width: 270px;
		flex-grow: 1;

		.course-card {
			min-height: 100%;
		}
	}

	@media (min-width: $mb_small) {
		&__item{
			width: calc(100%/2 - 20px);
		}
	}

	@media (min-width: $mb_middle) {
		

		&_marg{
			margin-top: 30px;
		}
	}

	@media (min-width: 900px) {
		&__item{
			width: calc(100%/3 - 20px);

			min-width: 1px;
			flex-grow: 0;
		}
	}

	@media (min-width: $mb_exlarge) {
		&__grid{
			margin: -30px 0 0 -30px;
		}

		&__item{
			width: calc(100%/3 - 30px);
			margin: 30px 0 0 30px;
		}
	}

	@media (min-width: $mb_huge) {
		&__item{
			width: calc(100%/4 - 30px);
		}
	}

    .tabs {
        background: transparent;
    }

    .tabs-title {
        /* background: $colorBgCard; */
        border-radius: 8px;
        padding: 15px 24px;
        margin-right: 2rem;

        &:last-child {
            margin-right: 0;
        }

        &.is-active {
            /* background: $colorBgActiveCard; */
        }
    }
}
</style>
