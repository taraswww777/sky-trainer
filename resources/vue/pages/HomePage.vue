<template>
    <div class="grid-x">
        <div class="cell small-12 medium-6">
            <UserCardWidget
                :userInfo="{
                name: 'Иван Иванов',
                id: 2348,
                email: 'email@domen.ru',
                phone:'+7 (978) 780-67-67',
                photoPath: 'https://cs6.pikabu.ru/avatars/1875/v1875072-98453067.jpg'
            }"
            />
        </div>
    </div>
</template>
<script>
export default {}
</script>
