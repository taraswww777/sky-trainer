<template>
    <form :class="bem()" @submit="doLogin">
			<div :class="bem('title')">Вход в личный кабинет</div>

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

        <div :class="bem('links _flex')">
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
const bem = useBem('form-login');

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

.form-login {
	padding: 37px 30px 54px;
	background: #FFFFFF;
	box-shadow: 0px 0px 44px rgba(0, 0, 0, 0.1);
	border-radius: 16px;

	&__title{
		font-weight: 300;
		font-size: 32px;
		line-height: 1.12;

		color: #1C1C1C;
		margin-bottom: 47px;
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

	&__links{
		margin: 18px 0 0 -7px;
	}

	&__links-item{
		font-weight: 400;
		font-size: 12px;
		line-height: 20px;

		color: #656565;
		margin: 7px 0 0 7px;
	}

	&__links-link{
		color: #656565;
		text-decoration: none;
		border-bottom: 1px solid currentColor;
		transition: border .2s linear;

		@media (any-hover: hover) {
      &:hover{
				border-bottom-color: transparent;
			}
		}
	}
	@media (min-width: $mb_middle) {
		padding: 0;
		background: none;
		box-shadow: none;
		border-radius: 0;
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
