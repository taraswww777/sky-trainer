<template>
    <div :class="bem()">
        HomePage
        <b>{{ title }}</b>
        <!--  Вот так обращаемся к props.children -->
        <slot></slot>
    </div>
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
      default: '',
    },
  },
  data: () => ({
    bem,
  }),
  mounted() {
    // console.log('Example:mounted: this.$options', this.$options)
  },
};
</script>
