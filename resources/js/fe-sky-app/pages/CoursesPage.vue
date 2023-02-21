<template>
  <BaseTemplate>
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
  </BaseTemplate>
</template>
<script>
import {requestCourses} from '../requests';

export default {
  mounted() {
    requestCourses().then(({data}) => {
      this.$store.dispatch('setCourses', data);
    });
  },
  computed: {
    courses() {
      return this.$store.getters.getCourses;
    },
  },
};
</script>
