<template>
    <BaseTemplate>
        <router-view></router-view>
    </BaseTemplate>
</template>

<script>
import {requestCurrentUser} from "../js/requests";
import {setToken} from "../js/vue-store/auth";
import {router} from "../js/vue-router";
import {PAGE_NAMES} from "../js/constants";

export default {
    mounted() {
        requestCurrentUser().then(({data})=>{
            if (data) {
                this.$store.dispatch('setCurrentUserInfo', data)
            }
        })
    }
}
</script>
