<template>
    <div :class="bem()">
        <div :class="bem('placeholder')" @click="onToggle">open</div>
        <ul :class="bem('list')" v-for="option in options" v-if="isOpen">
            <li :class="bem('item')" @click="()=>onChange(option)">{{option.caption}}</li>
        </ul>
    </div>
</template>

<script>
import useBem from "vue3-bem";

const componentName = 'CustomSelect';
const bem = useBem(componentName);

export default {
    name: componentName,
    props: {
        options: {
            type: Array
        },
        value: {
            type: String
        }
    },
    data: () => ({
        bem,
        isOpen: false
    }),
    methods: {
        onChange() {
            this.isOpen = false;
        },
        onToggle() {
            this.isOpen = !this.isOpen;
        }
    }

}
</script>

<style scoped lang="scss">
@import '../../../../sass/mixins';

.custom-select {
    border: 1px solid black;
    border-radius: 8px;
    position: relative;
    padding: 10px;
    cursor: pointer;

    &__placeholder {
        width: 100%;
    }

    &__list {
        background: #fff;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        max-height: 20vh;
padding: 0;
        margin: 0;
        list-style: none;
    }

    &__item {
        padding: 5px 10px;
    }

}
</style>
