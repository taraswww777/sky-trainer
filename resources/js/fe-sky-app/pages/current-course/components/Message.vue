<template>
    <!-- <div :class="bem(undefined, directionType)"> -->
    <div :class="bem()">
        <span :class="bem('icon')">
            <img src="../../../../../img/ic_user2.svg" alt="">
        </span>

        <div :class="bem('box')">
            <div :class="bem('caption')">
                <!-- {{ caption }} -->
				Клиент
            </div>
            <div :class="bem('text')">
                <!-- {{ text }} -->
				Да, Ольга слушаю вас
            </div>
        </div>
    </div>

	<div :class="bem()" class="message--manager">
        <span :class="bem('icon')">
            <img src="../../../../../img/ic_user2.svg" alt="">
        </span>

        <div :class="bem('box')">
            <div :class="bem('caption')">
                <!-- {{ caption }} -->
				Лояльность 5
            </div>
            <div :class="bem('text')">
                <!-- {{ text }} -->
				Добрый день, меня зовут ольга, скачать тренер бан, вам удобно сейчас разговаривать?
            </div>
        </div>
    </div>
</template>

<script>
import useBem from 'vue3-bem';

const componentName = 'Message';
const bem = useBem(componentName);

export default {
    name: componentName,
    data: () => ({
        bem,
    }),
    // props: {
    //     directionType: {
            /** out - manager / in - bot  */
    //         type: String,
    //     },
    //     caption: {
    //         type: String,
    //     },
    //     text: {
    //         type: String,
    //     }
    // },
}
</script>

<style scoped lang="scss">
@import "../../../../../sass/media";
.message {
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: flex-start;
	flex-wrap: nowrap;

	flex-direction: row-reverse;

	& + &{
		margin-top: 20px;
	}

	&--manager{
		flex-direction: row;
	}

	&__icon {
        background: #3F3F3F;
        height: 34px;
        color: #fff;
        padding: 8px;
        width: 34px;
        border-radius: 50%;
		flex-shrink: 0;
    }

	&--manager &__icon{
		background: linear-gradient(84.09deg, #2DC458 4.37%, #1ABAB0 94.11%);
	}

	&__box {
        background: currentColor;
		border-radius: 8px;
        margin-right: 14px;
        text-align: right;
		position: relative;
		padding: 17px 20px;
		color: rgba(242, 242, 242, 0.75);

        &::before {
            content: "";
            position: absolute;
            top: 10px;
            left: 100%;
            border: 8px solid transparent;
            border-left: 9px solid currentColor;
        }
    }
	
	&--manager &__box{
		color: rgba(223, 255, 232, 0.75);
		margin-right: 0;
		margin-left: 14px;
		text-align: left;

		&::before{
			left: auto;
			right: 100%;
			border-left: 8px solid transparent;
            border-right: 9px solid currentColor;
		}
	}

	&__caption {
        font-weight: 600;
		font-size: 13px;
		line-height: 1.23;

		color: #2D2D2D;
    }

    &__text {
        font-size: 13px;
		line-height: 1.23;

		color: #666666;
		margin-top: 4px;
    }

	@media (min-width: $mb_middle) {
		&__box{
			max-width: 388px;
		}
	}

	@media (min-width: $mb_exlarge) {
		& + &{
			margin-top: 10px;
		}
	}

	@media (min-width: $mb_huge) {
		&__box{
			max-width: 54.5%;
		}
	}

    /* display: flex;
    width: 100%;
    border-radius: 8px;
    max-height: 100vh;
    overflow: hidden;
    justify-content: flex-start;

    &--in, &--bot {
        flex-direction: row-reverse;
    }

    &--in, &--bot > &__box {
        background: #F2F2F2;
        margin-right: 15px;
        text-align: right;

        &::after {
            content: "";
            position: absolute;
            border: 15px solid transparent;
            border-left: 15px solid #F2F2F2;
            top: 8px;
            right: 0;
            transform: translateX(100%);
        }
    }

    &--out, &--manager {
        flex-direction: row;
    }

    &--out, &--manager > &__icon {
        background: linear-gradient(45deg, #2DC358, #1ABAB0);
    }

    &--out, &--manager > &__box {
        background: #DFFFE8;
        margin-left: 15px;
        text-align: left;

        &::before {
            content: "";
            position: absolute;
            border: 15px solid transparent;
            border-left: 15px solid #DFFFE8;
            top: 8px;
            left: 0;
            transform: translateX(-100%) rotate(180deg);
        }
    }

    &__icon {
        background: #3F3F3F;
        height: fit-content;
        font-size: 14px;
        color: #fff;
        padding: 10px 12px;
        width: fit-content;
        border-radius: 50%;
    }

    &__box {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        max-width: 90%;
        padding: 20px;
        border-radius: 8px;
    }

    &__caption {
        width: 100%;
    }

    &__text {
        width: 100%;
        padding: 5px 0 0;
        margin: 0;
        font-size: 16px;
        color: #666666;
    } */
}
</style>
