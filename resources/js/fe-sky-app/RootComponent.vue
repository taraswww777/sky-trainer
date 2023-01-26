<template>
    <BaseTemplate>
        <router-view></router-view>
    </BaseTemplate>
</template>

<script>
import {requestCurrentUser} from "./requests";

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
