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
            <CoursesPanel :courses="courses"/>
        </div>
    </div>
</template>
<script>
import {MOCK_DATA_products} from '../mocked-data';

export default {
    data: () => ({
        courses: MOCK_DATA_products
    }),
    mounted() {
        console.log('Example:mounted: this.$options', this.$options)
    }
}
</script>
