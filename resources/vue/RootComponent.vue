<template>
    <BaseTemplate>
        <router-view></router-view>
    </BaseTemplate>
</template>

<script>
export default {
    mounted() {
        console.log('Root:mounted:this.$options', this.$options)
    }
}
</script>
