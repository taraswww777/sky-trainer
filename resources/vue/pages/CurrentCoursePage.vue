<template>
    <div>
        HomePage
        <b>{{ $route.params.courseId }}</b>
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
