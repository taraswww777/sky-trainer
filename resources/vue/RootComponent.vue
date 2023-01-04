<template>
    <BaseTemplate>

        <ExampleComponent></ExampleComponent>

    </BaseTemplate>
</template>

<script>
export default {
    mounted() {
        console.log('Root:mounted:this.$options', this.$options)
    }
}
</script>
