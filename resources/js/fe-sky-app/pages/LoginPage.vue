<template>
    <div class="grid-x">
        <div class="cell small-12">
            <h1>Вход в личный кабинет</h1>
        </div>
        <div class="cell small-12">
            <LoginForm/>
        </div>
    </div>
</template>

<script>
import useBem from "vue3-bem";

const componentName = 'QualityControl';
const bem = useBem(componentName);

export default {
    name: componentName,
    data: () => ({
        bem,
    })
}
</script>