<template>
    <BaseTemplate>
        <router-view></router-view>
    </BaseTemplate>
</template>

<script>
import {refreshCurrentUser} from './app-store/auth';

export default {
  mounted() {
    refreshCurrentUser(this.$store.dispatch);
  },
};
</script>
