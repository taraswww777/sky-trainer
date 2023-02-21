<template>
    <form :class="bem()" @submit="doLogin">
        <div :class="bem('line')">
			<div :class="bem('label')">Ваш логин</div>

			<div :class="bem('field')">
                <input type="text" v-model="email" :class="bem('input')">
			</div>
		</div>

        <div :class="bem('line')">
			<div :class="bem('label')">Ваш пароль</div>

			<div :class="bem('field')">
                <input type="password" v-model="password" :class="bem('input')">
            </div>
        </div>

        <div :class="bem('submit')">
            <PrimaryButton type="submit" :class="bem('submit-btn')">
                <span>Войти</span>
            </PrimaryButton>
        </div>

        <div :class="bem('links')">
			<div :class="bem('links-item')">
				<router-link to="/auth/fagot" :class="bem('links-link')">Забыли пароль?</router-link>
			</div>
			<div :class="bem('links-item')">
				<router-link to="/auth/register" :class="bem('links-link')">Регистрация</router-link>
			</div>
        </div>
    </form>
</template>
<script>
import {isLogin, refreshCurrentUser, setToken} from '../../app-store/auth';
import {requestLogin} from '../../requests';
import {appRouter} from '../../app-router';
import {PAGE_NAMES} from '../../constants';

import useBem from 'vue3-bem';
const bem = useBem('form');

export default {
  beforeMount() {
    if (isLogin()) {
      appRouter.push({name: PAGE_NAMES.home});
    }
  },
  data: () => ({
    password: '',
    email: '',
	bem
  }),
  methods: {
    doLogin() {
      requestLogin({
        email: this.email,
        password: this.password,
      }).then(({data: {token}}) => {
        if (token) {
          setToken(token);
          refreshCurrentUser(this.$store.dispatch).then((isLoad) => {
            if (isLoad) {
              appRouter.push({name: PAGE_NAMES.courses});
            }
          });
        }
      });
    },
  },
  mounted() {
    if (isLogin()) {
      appRouter.push({name: PAGE_NAMES.home});
    }
  },
};
</script>
<style lang="scss" scoped>
@import "../../../../sass/media";

.form {
	&._marg {
		margin-top: 22px;
	}

	&__line {
		margin-bottom: 13px;
		width: 100%;
	}

	&__label {
		margin-bottom: 8px;

		font-weight: 400;
		font-size: 13px;
		line-height: 28px;

		color: #000000;
	}

	&__input{
		background: transparent;
		border: 1px solid #E0E0E0;
		padding: 0 19px;
		display: block;
		width: 100%;
		height: 48px;
		border-radius: 50px;

		font: 12px "Inter", Helvetica, Roboto, Arial, sans-serif;
		color: #29343E; 
		margin: 0;
		box-shadow: none;

		&:focus{
			border-color: #7156F8;
		}
	}

	&__submit {
		margin-top: 31px;
		width: 100%;
	}

	&__submit-btn{
		width: 100%;
	}

	@media (min-width: $mb_small) {
	}

	@media (min-width: $mb_middle) {
	}

	@media (min-width: $mb_large) {
	}
}

/* @import 'foundation-sites/scss/foundation.scss';
@import '../../../../sass/colors';

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
} */
</style>
