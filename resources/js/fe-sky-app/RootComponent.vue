<template>
  <router-view></router-view>
</template>

<script>
import {refreshCurrentUser} from './app-store/auth';

export default {
  mounted() {
    refreshCurrentUser(this.$store.dispatch);
  },
};
</script>
