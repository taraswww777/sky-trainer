<template>
    <form class="grid-x loginForm" @submit="doLogin">
        <div class="cell small-12">
            <label>
                Ваш логин
                <input type="email" v-model="email">
            </label>
        </div>

        <div class="cell small-12">
            <label>
                Ваш пароль
                <input type="password" v-model="password">
            </label>
        </div>
        <div class="cell small-12 margin-top-2">
            <PrimaryButton type="submit">
                <Fa icon="right-to-bracket"/>
                Войти
            </PrimaryButton>
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
    </form>
</template>
<script>
import {isLogin, setToken} from "../../../js/vue-store/auth";
import {router} from "../../../js/vue-router";
import {PAGE_NAMES} from "../../../js/constants";
import {requestLogin} from "../../../js/requests";

export default {
    beforeMount() {
        if (isLogin()) {
            router.push({name: PAGE_NAMES.home});
        }
    },
    data: () => ({
        password: 'demo123demo',
        email: 'demo@skytrainer.pro',
    }),
    methods: {
        doLogin() {
            requestLogin({
                email: this.email,
                password: this.password,
            }).then(({data: {token}}) => {
                setToken(token);
                router.push({name: PAGE_NAMES.home});
            });
        }
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
    width: 100%;
}

a {
    color: $colorGray3;
    font-size: 0.9rem;
}
</style>
