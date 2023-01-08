<template>
    <div class="grid-x">
        <div class="cell small-12 medium-6">
            <UserCardWidget :userInfo="user"/>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        user() {
            return this.$store.getters.getCurrentUserInfo
        }
    }
}
</script>
