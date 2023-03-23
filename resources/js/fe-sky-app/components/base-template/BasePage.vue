<template>
  <div :class="bem()">
    <CommonBreadcrumbs :crumbs="crumbs" />

    <div class="page-head">
      <h1 class="page-head__title">
        <span>{{ pageTitle }}</span>
      </h1>
    </div>

    <div :class="bem('content')">
      <slot />
    </div>
    <Loader v-if="pageIsLoading" />
  </div>
</template>
<script>
import useBem from 'vue3-bem';
import Loader from '../common/Loader.vue';
import CommonBreadcrumbs from '../common/CommonBreadcrumbs.vue';

const name = 'BasePage';

const bem = useBem(name);

export default {
  name,
  components: {
    CommonBreadcrumbs,
    Loader
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    crumbs: {
      type: Array,
      default: () => []
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    bem
  }),
  computed: {
    pageTitle() {
      return this.$props.title || this.$store.getters.getPageTitle;
    },
    pageIsLoading() {
      return this.$props.isLoading || this.$store.getters.getIsLoading();
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@sass/media";

.base-page {
  padding: 30px;

  border-radius: 8px;
  background: #FFF;
  box-shadow: 0 0 44px rgba(0, 0, 0, .1);
}
</style>
