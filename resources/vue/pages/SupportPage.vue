<template>
    <div>
        HomePage
        <b>{{ title }}</b>
        <!--  Вот так обращаемся к props.children -->
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: ['title'],
    data: () => ({
        title: ''
    }),
    mounted() {
        console.log('Example:mounted: this.$options', this.$options)
    }
}
</script>
