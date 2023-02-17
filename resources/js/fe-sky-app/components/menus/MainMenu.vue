<template>
    <div :class="bem()">
		<div :class="bem('logo')">
			<router-link to="/">
				<img src="../../../../img/logo_big.svg" alt="">

				<img src="../../../../img/logo.svg" alt="">
			</router-link>
		</div>

        <div :class="bem('head')">
            <div :class="bem('head-user')">
                <UserStatusWidget v-if="user" :userName="user.name" :userId="user.id"/>
            </div>
            <button
				v-if="onClose"
				:class="bem('head-close iconCircleWrapper')"
				type="button"
				@click.prevent="onClose"
			>
				<img src="../../../../img/burger.svg" alt="">
			</button>
        </div>

		<SearchInput/>

        <div :class="bem('menu')">
            <MainMenuItems :onClose="onClose"/>
        </div>

		<div :class="bem('time')">
			<div :class="bem('time-icon iconCircleWrapper')">
				<img src="../../../../img/ic_time.svg" alt="">
			</div>

			<div :class="bem('time-box')">
				<div :class="bem('time-val')">23:21 | 10000:00</div>

				<div :class="bem('time-text')">Общее время тренировок</div>
			</div>
		</div>

		<button :class="bem('theme')">
			<span :class="bem('theme-item active')">
				<span :class="bem('theme-icon')">
					<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M7.99935 10.0001C8.5549 10.0001 9.02713 9.80564 9.41602 9.41675C9.8049 9.02786 9.99935 8.55564 9.99935 8.00008C9.99935 7.44453 9.8049 6.9723 9.41602 6.58341C9.02713 6.19453 8.5549 6.00008 7.99935 6.00008C7.44379 6.00008 6.97157 6.19453 6.58268 6.58341C6.19379 6.9723 5.99935 7.44453 5.99935 8.00008C5.99935 8.55564 6.19379 9.02786 6.58268 9.41675C6.97157 9.80564 7.44379 10.0001 7.99935 10.0001ZM7.99935 11.3334C7.07713 11.3334 6.29113 11.0083 5.64135 10.3581C4.99113 9.7083 4.66602 8.9223 4.66602 8.00008C4.66602 7.07786 4.99113 6.29164 5.64135 5.64141C6.29113 4.99164 7.07713 4.66675 7.99935 4.66675C8.92157 4.66675 9.70779 4.99164 10.358 5.64141C11.0078 6.29164 11.3327 7.07786 11.3327 8.00008C11.3327 8.9223 11.0078 9.7083 10.358 10.3581C9.70779 11.0083 8.92157 11.3334 7.99935 11.3334ZM0.666016 8.66675V7.33341H3.33268V8.66675H0.666016ZM12.666 8.66675V7.33341H15.3327V8.66675H12.666ZM7.33268 3.33341V0.666748H8.66602V3.33341H7.33268ZM7.33268 15.3334V12.6667H8.66602V15.3334H7.33268ZM4.23268 5.16675L2.58268 3.51675L3.51602 2.58341L5.16602 4.23341L4.23268 5.16675ZM12.4827 13.4167L10.8327 11.7667L11.766 10.8334L13.416 12.4834L12.4827 13.4167ZM11.766 5.16675L10.8327 4.23341L12.4827 2.58341L13.416 3.51675L11.766 5.16675ZM3.51602 13.4167L2.58268 12.4834L4.23268 10.8334L5.16602 11.7667L3.51602 13.4167Z"/>
					</svg>
				</span>

				<span :class="bem('theme-name')">Light</span>
			</span>

			<span :class="bem('theme-item')">
				<span :class="bem('theme-icon')">
					<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M8 14C6.33333 14 4.91667 13.4167 3.75 12.25C2.58333 11.0833 2 9.66667 2 8C2 6.33333 2.58333 4.91667 3.75 3.75C4.91667 2.58333 6.33333 2 8 2C8.15556 2 8.30844 2.00556 8.45867 2.01667C8.60844 2.02778 8.75556 2.04444 8.9 2.06667C8.44444 2.38889 8.08067 2.80822 7.80867 3.32467C7.53622 3.84156 7.4 4.4 7.4 5C7.4 6 7.75 6.85 8.45 7.55C9.15 8.25 10 8.6 11 8.6C11.6111 8.6 12.1722 8.46378 12.6833 8.19133C13.1944 7.91933 13.6111 7.55556 13.9333 7.1C13.9556 7.24444 13.9722 7.39156 13.9833 7.54133C13.9944 7.69156 14 7.84444 14 8C14 9.66667 13.4167 11.0833 12.25 12.25C11.0833 13.4167 9.66667 14 8 14ZM8 12.6667C8.97778 12.6667 9.85556 12.3973 10.6333 11.8587C11.4111 11.3196 11.9778 10.6167 12.3333 9.75C12.1111 9.80556 11.8889 9.85 11.6667 9.88333C11.4444 9.91667 11.2222 9.93333 11 9.93333C9.63333 9.93333 8.46933 9.45289 7.508 8.492C6.54711 7.53067 6.06667 6.36667 6.06667 5C6.06667 4.77778 6.08333 4.55556 6.11667 4.33333C6.15 4.11111 6.19444 3.88889 6.25 3.66667C5.38333 4.02222 4.68067 4.58889 4.142 5.36667C3.60289 6.14444 3.33333 7.02222 3.33333 8C3.33333 9.28889 3.78889 10.3889 4.7 11.3C5.61111 12.2111 6.71111 12.6667 8 12.6667Z"/>
					</svg>
				</span>

				<span :class="bem('theme-name')">Dark</span>
			</span>
		</button>
    </div>
</template>
<script>
import useBem from "vue3-bem";

const bem = useBem("aside");

export default {
    props: {
        onClose: Function,
    },
	data: () => ({
        bem
    }),
    computed: {
        user() {
            return this.$store.getters.getCurrentUserInfo
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../../../sass/media";

.aside
{
    display: flex;
    overflow: hidden;
    overflow-y: auto;
    flex-direction: column;

    width: 300px;
	max-width: 100%;
    height: 100%;
    padding: 20px;
    padding: 20px 24px 20px 20px;

    background: #FFF;
	box-shadow: 0px 4px 44px rgba(0, 0, 0, 0.05);

	@media (min-width: $mb_large) {
		.small &{
			padding-left: 0;
			padding-right: 0;
		}

		.small & > *:not(.aside__menu,.aside__logo){
			display: none;
		}

		.small &__logo{
			display: flex;
			justify-content: center;
			align-items: flex-start;
			align-content: flex-start;
			flex-wrap: wrap;

			img{
				display: none;
			}

			img + img{
				display: block;
			}
		}
	}

    &__logo
    {
		display: none;
        width: 100%;
        margin-bottom: 46px;
        img
        {
            display: block;
        }

		img + img{
			display: none;
		}
    }

    &__head
    {
        display: flex;
        justify-content: space-between;
        align-content: flex-start;
        align-items: flex-start;
        flex-wrap: nowrap;

        margin-bottom: 20px;

		@media (min-width: $mb_exlarge) {
			display: none;
		}
    }

    &__head-user
    {
        width: calc(100% - 50px);
    }

    &__head-close
    {
        flex-shrink: 0;
        margin-left: 10px;
        padding: 13px 10px;
		box-shadow: 0px 0px 44px rgba(0, 0, 0, 0.1);
    }

	&__time{
		display: flex;
		justify-content: flex-start;
		align-content: flex-start;
		align-items: flex-start;
		flex-wrap: nowrap;

		width: 100%;
		margin-top: 58px;

		@media (min-width: $mb_exlarge) {
			display: none;
		}
	}

    &__time-icon
    {
        flex-shrink: 0;

        margin-right: 11px;
        padding: 11px;

        box-shadow: 0px 0px 44px rgba(0, 0, 0, .1);
    }

    &__time-box
    {
        width: 100%;
        padding-top: 6px;
    }

    &__time-val
    {
        color: #29343E;
        font-size: 14px;
        font-weight: 500;

        font-style: normal;
        line-height: normal;
    }

    &__time-text
    {
        color: #29343E;
        font-size: 11px;
        font-weight: 400;

        font-style: normal;
        line-height: normal;
    }

	@media (min-width: $mb_exlarge) {
		&__menu
		{
			flex-grow: 1;

			width: 100%;
		}

		&__logo{
			display: block;
		}

		padding: 24px 28px 28px;
	}

	&__theme{
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		align-content: flex-start;
		flex-wrap: nowrap;
		border: none;
		cursor: pointer;
		background: #EAEEF6;
		border-radius: 50px;
		padding: 4px 5px 4px 3px;

		font-weight: 400;
		font-size: 11px;
		line-height: 1;

		color: #747474;
		margin-top: 29px;
	}

	&__theme-item{
		display: flex;
		justify-content: center;
		align-items: center;
		align-content: center;
		flex-wrap: nowrap;

		width: 50%;
		margin-left: 2px;

		padding: 4px 9px;
		border-radius: 50px;
		max-width: 118px;
	}

	&__theme-item.active{
		background: #fff;
		color: #29343E;

		svg{
			fill: #000;
		}
	}

	&__theme-icon{
		width: 16px;
		height: 16px;

		display: flex;
		justify-content: center;
		align-items: center;
		align-content: center;
		flex-wrap: nowrap;
		flex-shrink: 0;
		margin-right: 11px;

		svg{
			display: block;
			max-width: 100%;
			max-height: 100%;

			fill: currentColor;
		}
	}
}
</style>