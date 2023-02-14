<template>
    <div :class="bem()">
		<div :class="bem('logo')">
			<img src="../../../../img/logo.svg" alt="">
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
				<img src="../../../../img/logo.svg" alt="">
			</button>
        </div>

		<SearchInput/>

        <div :class="bem('menu')">
            <MainMenuItems :onClose="onClose"/>
        </div>

		<div :class="bem('time')">
			<div :class="bem('time-icon iconCircleWrapper')">
				<img src="../../../../img/logo.svg" alt="">
			</div>

			<div :class="bem('time-box')">
				<div :class="bem('time-val')">23:21 | 10000:00</div>

				<div :class="bem('time-text')">Общее время тренировок</div>
			</div>
		</div>
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

    &__logo
    {
		display: none;
        width: 100%;
        margin-bottom: 46px;
        img
        {
            display: block;
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

		@media (min-width: $mb3) {
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

		@media (min-width: $mb3) {
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

	@media (min-width: $mb3) {
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
}
</style>