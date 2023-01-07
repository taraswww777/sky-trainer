<template>
    <BaseTemplate>
        <router-view></router-view>
    </BaseTemplate>
</template>

<script>
export default {
    mounted() {
        console.log('RootComponent')
    }
}
</script>
