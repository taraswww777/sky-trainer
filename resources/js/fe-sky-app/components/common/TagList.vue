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
/* @import 'foundation-sites/scss/foundation.scss';
@import '../../../../sass/colors'; */
@import "../../../../sass/media";

.tag-list {
    display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: flex-start;
	flex-wrap: wrap;

	margin: -10px 0 0 -20px;

    &__item {
        margin: 10px 0 0 20px;
		background: #F1F1F1;
		border-radius: 50px;
		font-weight: 700;
		font-size: 12px;
		line-height: 18px;
		padding: 6px 18px;

		color: #1C1C1C;
    }
}
</style>
