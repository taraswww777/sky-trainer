<template>
  <div />
</template>
<script>

import {removeToken} from '@src/modules/auth';
import {appRouter} from '@src/app-router';
import {PAGE_NAMES} from '../constants';

export default {
  beforeMount() {
    removeToken();
    appRouter.push({name: PAGE_NAMES.login});
  }
};
</script>
