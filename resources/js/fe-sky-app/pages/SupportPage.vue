<template>
  <BaseTemplate>
    <div :class="bem()">
      HomePage
      <b>{{ title }}</b>
      <!--  Вот так обращаемся к props.children -->
      <slot />
    </div>
  </BaseTemplate>
</template>
<script>
import useBem from 'vue3-bem';

const name = 'SupportPage';
const bem = useBem(name);

export default {
  name,
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    bem
  })
};
</script>
