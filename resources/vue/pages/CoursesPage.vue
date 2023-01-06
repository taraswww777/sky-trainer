<template>
    <div class="grid-x">
        <div class="cell small-12 margin-top-1">
            <Breadcrumbs
                :crumbs="[
                    {url:'/', title:'Гланая'},
                    {title:'Все курсы'}
                ]"
            />
        </div>
        <div class="cell small-12">
            <h1>Все курсы</h1>
        </div>
        <div class="cell small-12">

        </div>
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
