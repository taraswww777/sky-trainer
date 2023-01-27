<template>
    <div class="grid-x">
        <div class="cell small-12 margin-top-1">
            <Breadcrumbs
                :crumbs="[
                    {url:'/', title:'Гланая'},
                    {title:'Все курсы'}
                ]"
            />
        </div>
        <div class="cell small-12">
            <h1>Все курсы</h1>
        </div>
        <div class="cell small-12">
            <CoursesPanel :courses="courses"/>
        </div>
    </div>
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
