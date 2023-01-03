<template>
    <div>
        I'm Root component
        <example-component title="Content property title">
            Child with <i>html</i>
        </example-component>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log('Root:mounted:this.$options', this.$options)
    }
}
</script>
