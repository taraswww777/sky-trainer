<template>
    <div>

    </div>
</template>
<script>

import {removeToken} from "../../js/vue-store/auth";
import {router} from "../../js/vue-router";
import {PAGE_NAMES} from "../../js/constants";

export default {
    beforeMount() {
        removeToken();
        router.push({name: PAGE_NAMES.home});
    }
}
</script>
