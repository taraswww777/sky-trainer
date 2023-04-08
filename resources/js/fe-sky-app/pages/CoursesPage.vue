<template>
  <BaseTemplate>
    <CommonBreadcrumbs
      :crumbs="[
        { url: '/', title: 'Главная' },
        { title: 'Все курсы' },
      ]"
    />

    <div class="page-head">
      <h1 class="page-head__title">Все курсы</h1>
    </div>

    <CoursesPanel :courses="courses" />
  </BaseTemplate>
</template>
<script>
import {apiClient} from '@src/api';
import CoursesPanel from '@src/components/courses/CoursesPanel.vue';
import BaseTemplate from '@src/components/base-template/BaseTemplate.vue';
import CommonBreadcrumbs from '@src/components/common/CommonBreadcrumbs.vue';

export default {
  components: {
    CommonBreadcrumbs,
    BaseTemplate,
    CoursesPanel
  },
  mounted() {
    apiClient.getCourses()
      .then(({data}) => {
        this.$store.commit('setCourses', data);
      });
  },
  computed: {
    courses() {
      return this.$store.getters.getCourses;
    }
  }
};
</script>
