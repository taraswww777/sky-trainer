<template>
    <div>

    </div>
</template>
<script>

import {removeToken} from '../app-store/auth';
import {appRouter} from '../app-router';
import {PAGE_NAMES} from '../constants';

export default {
  beforeMount() {
    removeToken();
    appRouter.push({name: PAGE_NAMES.login});
  },
};
</script>
