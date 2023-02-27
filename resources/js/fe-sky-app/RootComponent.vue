<template>
  <div :class="bem()">
    <div :class="bem('loader')" v-if="isLoading">
      <Loader/>
    </div>
    <div :class="bem('page')">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import useBem from 'vue3-bem';
import {refreshCurrentUser} from './app-store/auth';
import {Loader} from './components';

const name = 'Root';
const bem = useBem(name);

export default {
  name,
  components: {
    Loader,
  },
  data: () => ({
    bem,
  }),
  mounted() {
    refreshCurrentUser(this.$store.dispatch);
  },
  computed: {
    isLoading() {
      return this.$store.getters.getIsLoading;
    },
  },
};
</script>
<style lang="scss" scoped>
.root {
  position: relative;
  min-height: 100vh;
  width: 100%;

  &__loader {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  &__page {
    position: relative;
    width: 100%;
    min-height: 100vh;
  }
}
</style>
