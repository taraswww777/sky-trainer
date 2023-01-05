<template>
    <div class="grid-x loginForm">
        <div class="cell small-12">
            <label>
                Ваш логин
                <input type="text">
            </label>
        </div>

        <div class="cell small-12">
            <label>
                Ваш пароль
                <input type="password">
            </label>
        </div>
        <div class="cell small-12 margin-top-2">
            <button type="submit" class="button primary">
                <Fa icon="right-to-bracket"/>
                Войти
            </button>
        </div>
        <div class="cell small-12 margin-top-2">
            <ul class="menu horizontal simple">
                <li>
                    <router-link to="/auth/fagot">Забыли пароль?</router-link>
                </li>
                <li>
                    <router-link to="/auth/register">Регистрация</router-link>
                </li>
            </ul>
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
<style lang="scss" scoped>
@import '~foundation-sites/scss/foundation.scss';
@import '../../../sass/colors';

.loginForm {
    background: $colorWhite;
    border-radius: 1rem;
    padding: 35px 30px;
    width: 100%;
}

input {
    border-radius: 2rem;
    padding: 16px 22px;
    border: 1px solid $colorGray5;
}

.button {
    border-radius: 2rem;
    padding: 1rem 2rem;
    width: 100%;
    margin: 0;
}

.button.primary {
    background: linear-gradient(84.09deg, #D485F1 4.37%, #7156F8 94.11%);
}

a {
    color: $colorGray3;
    font-size: 0.9rem;
}
</style>
