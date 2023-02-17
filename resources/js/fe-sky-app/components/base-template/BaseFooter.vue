<template>
    <div class="footer__flex _flex">
        <div class="footer__copyright">© 2022</div>

		<nav class="footer__menu _flex">
			<div class="footer__menu-item">
				<router-link to="/about" class="footer__menu-link">О нас</router-link>
			</div>
			<div class="footer__menu-item">
				<router-link to="/support" class="footer__menu-link">Поддержка</router-link>
			</div>
			<div class="footer__menu-item">
				<router-link to="/contacts" class="footer__menu-link">Контакты</router-link>
			</div>
		</nav>
    </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
/* @import 'foundation-sites/scss/foundation.scss';
@import '../../../../sass/colors'; */
@import "../../../../sass/media";

/* .icon {
    display: inline-flex;
    width: 40px;
    height: 40px;
    background: $colorWhite;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
} */

.footer__flex{
	justify-content: space-between;
}

.footer__copyright {
    font-weight: 400;
	font-size: 12px;
	line-height: 1.5;

	color: rgba(0, 0, 0, 0.4);
}

/* .footerMenu {
    width: 100%;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        width: 100%;
        justify-content: flex-end;
        flex-wrap: wrap;
    }

    li {
        padding: 0;
        margin: 0 10px 0 0;

        &:last-child {
            margin-right: 0;
        }
    }

    a {
        padding: 10px;
        color: $colorGray3;
        text-decoration: none;
        position: relative;

        &:after {
            transition: 0.15s all ease;
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            height: 2px;
            background: $colorBrand;
            width: 0;
            transform: translateY(-100%);
        }

        &:hover {
            &:after {
                width: 100%;
            }
        }
    }
} */

.footer__menu{

}

.footer__menu-item + .footer__menu-item{
	margin-left: 20px;
}

.footer__menu-link{
	font-weight: 400;
	font-size: 12px;
	line-height: 1.5;
	text-decoration: none;

	color: #000;
	opacity: .4;
	transition: opacity .2s linear;

	&:hover{
		opacity: 1;
	}
}
</style>
