<template>
  <BaseTemplate>
    <BasePage
      :isLoading="isLoading"
      :title=" course?.name"
      :crumbs="[
        { url: '/', title: 'Главная' },
        { title: 'Все курсы', url: '/courses' },
      ]"
    >
      <CourseCompletionModule />
    </BasePage>
  </BaseTemplate>
</template>
<script>
import useBem from 'vue3-bem';
import {BaseTemplate, BasePage} from '@src/components/base-template';
import {CourseCompletionModule} from '@src/modules/course-completion';

const name = 'CurrentCoursePage';

const bem = useBem(name);

export default {
  name,
  components: {
    BasePage,
    BaseTemplate,
    CourseCompletionModule
  },
  data: () => ({
    bem
  })
};
</script>
