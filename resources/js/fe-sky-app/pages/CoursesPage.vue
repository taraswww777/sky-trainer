<template>
	<Breadcrumbs
		:crumbs="[
			{url:'/', title:'Гланая'},
			{title:'Все курсы'}
		]"
	/>

	<div class="page-head">
		<h1 class="page-head__title">Все курсы</h1>
	</div>
	
	<CoursesPanel :courses="courses"/>
</template>
<script>
import {requestCourses} from "../requests";

export default {
    mounted() {
        requestCourses().then(({data}) => {
            this.$store.dispatch('setCourses', data);
        });
    },
    computed: {
        courses() {
            return this.$store.getters.getCourses
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../../sass/media";

.page-head{
	margin-bottom: 30px;

	&__title{
		font-weight: 300;
		font-size: 32px;
		line-height: 1.12;

		color: #1C1C1C;
	}
}
</style>
