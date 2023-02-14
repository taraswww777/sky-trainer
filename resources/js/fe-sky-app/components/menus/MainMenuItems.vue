<template>
    <nav :class="bem()">
		<div :class="bem('item')">
			<router-link to="/" @click="onClose" active-class="active" :class="bem('link')">
				<span :class="bem('icon')">
					<!-- <img src="../../../../img/logo.svg" alt=""> -->
					<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M6.87935 5.71163C6.87935 5.71163 6.5135 5.34577 6.5135 4.82837C6.5135 4.82837 6.5135 4.31097 6.87935 3.94511L9.12063 1.70384C9.12063 1.70384 9.48648 1.33798 10.0039 1.33798C10.0039 1.33798 10.5213 1.33798 10.8871 1.70384L13.1268 3.94345C13.1268 3.94345 13.4926 4.30931 13.4926 4.82671C13.4926 4.82671 13.4926 5.34411 13.1268 5.70997L10.8855 7.95124C10.8855 7.95124 10.5196 8.3171 10.0022 8.3171C10.0022 8.3171 9.48483 8.3171 9.11897 7.95124L6.87935 5.71163ZM7.76261 4.82837L10.0022 7.06798L12.2435 4.82671L10.0039 2.5871L7.76261 4.82837Z"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M11.8774 10.7082C11.8774 10.7082 11.5115 10.3424 11.5115 9.82495C11.5115 9.82495 11.5115 9.30755 11.8774 8.94169L14.1187 6.70042C14.1187 6.70042 14.4845 6.33456 15.0019 6.33456C15.0019 6.33456 15.5193 6.33456 15.8852 6.70042L18.1248 8.94003C18.1248 8.94003 18.4907 9.30589 18.4907 9.82329C18.4907 9.82329 18.4907 10.3407 18.1248 10.7066L15.8835 12.9478C15.8835 12.9478 15.5177 13.3137 15.0003 13.3137C15.0003 13.3137 14.4829 13.3137 14.117 12.9478L11.8774 10.7082ZM12.7607 9.82495L15.0003 12.0646L17.2415 9.82329L15.0019 7.58368L12.7607 9.82495Z"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M1.88326 10.7009C1.88326 10.7009 1.5174 10.335 1.5174 9.81763C1.5174 9.81763 1.5174 9.30023 1.88326 8.93437L4.12453 6.6931C4.12453 6.6931 4.49039 6.32724 5.00779 6.32724C5.00779 6.32724 5.52519 6.32724 5.89105 6.6931L8.13067 8.93271C8.13067 8.93271 8.49652 9.29857 8.49652 9.81597C8.49652 9.81597 8.49652 10.3334 8.13067 10.6992L5.88939 12.9405C5.88939 12.9405 5.52354 13.3064 5.00613 13.3064C5.00613 13.3064 4.48873 13.3064 4.12288 12.9405L1.88326 10.7009ZM2.76652 9.81763L5.00613 12.0572L7.24741 9.81597L5.00779 7.57636L2.76652 9.81763Z"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M6.88131 15.6977C6.88131 15.6977 6.51545 15.3319 6.51545 14.8145C6.51545 14.8145 6.51545 14.2971 6.88131 13.9312L9.12258 11.6899C9.12258 11.6899 9.48844 11.3241 10.0058 11.3241C10.0058 11.3241 10.5232 11.3241 10.8891 11.6899L13.1287 13.9295C13.1287 13.9295 13.4946 14.2954 13.4946 14.8128C13.4946 14.8128 13.4946 15.3302 13.1287 15.6961L10.8874 17.9373C10.8874 17.9373 10.5216 18.3032 10.0042 18.3032C10.0042 18.3032 9.48678 18.3032 9.12092 17.9373L6.88131 15.6977ZM7.76457 14.8145L10.0042 17.0541L12.2455 14.8128L10.0058 12.5732L7.76457 14.8145Z"/>
					</svg>
				</span>

				<span :class="bem('name')">Главная</span>
			</router-link>
		</div>
		<div :class="bem('item')">
			<router-link to="/profile" @click="onClose" active-class="active" :class="bem('link')">
				<!-- <Fa :icon="['far','id-badge']"/> -->
				<span :class="bem('icon')">
					<img src="@/img/logo.svg" alt="">
				</span>

				<span :class="bem('name')">Профиль</span>
			</router-link>
		</div>
		<div :class="bem('item')">
			<router-link to="/top" @click="onClose" active-class="active" :class="bem('link')">
				<!-- <Fa icon="chart-pie"/> -->
				<span :class="bem('icon')">
					<img src="../../../../img/logo.svg" alt="">
				</span>

				<span :class="bem('name')">Рейтинги</span>
			</router-link>
		</div>
		<div :class="bem('item')">
			<router-link to="#" @click="toggle" :class="[bem('link'), {active: isActive}]" class="_sub">
			<!-- <router-link :to="{name: PAGE_NAMES.courses}" @click="toggle" active-class="active" :class="bem('link')"> -->
				<!-- <Fa :icon="['far','folder-closed']"/> -->
				<span :class="bem('icon')">
					<img src="../../../../img/logo.svg" alt="">
				</span>

				<span :class="bem('name')">Курсы</span>
			</router-link>

			<div :class="bem('submenu')" v-show="isOpen">
				<div :class="bem('submenu-item')">
					<router-link to="#" :class="bem('submenu-link')">Презентации</router-link>
				</div>
				<div :class="bem('submenu-item')">
					<router-link to="#" :class="bem('submenu-link')">Встречи</router-link>
				</div>
				<div :class="bem('submenu-item')">
					<router-link to="#" :class="bem('submenu-link')">Звонки</router-link>
				</div>
				<div :class="bem('submenu-item')">
					<router-link to="#" :class="bem('submenu-link')">Презентации</router-link>
				</div>
				<div :class="bem('submenu-item')">
					<router-link to="#" :class="bem('submenu-link')">Встречи</router-link>
				</div>
			</div>
		</div>
		<div :class="bem('item')">
			<router-link
				:to="{name: PAGE_NAMES.logout}"
				@click="onClose"
				active-class="active"
				:class="bem('link')"
			>
				<!-- <Fa icon="right-to-bracket"/> -->
				<span :class="bem('icon')">
					<img src="../../../../img/logo.svg" alt="">
				</span>

				<span :class="bem('name')">Выход</span>
			</router-link>
		</div>
    </nav>
</template>
<script>
import {noop} from "lodash";
import {PAGE_NAMES} from "../../constants";

import useBem from "vue3-bem";

const bem = useBem("main-menu");

export default {
    data: () => ({
		PAGE_NAMES,
		bem,
		isOpen: false,
		isActive: false,
    }),
    props: {
        onClose: {
            type: Function,
            default: noop
        },
    },
    methods: {
		toggle() {
			this.isOpen = !this.isOpen
			this.isActive = !this.isActive
		}
	}
}
</script>
<style lang="scss" scoped>
@import "../../../../sass/media";

.main-menu
{
    margin: 0;
	display: inline-block;
	min-width: 192px;

    &__item + &__item
    {
        margin-top: 11px;
    }

    &__link
    {
        position: relative;

        color: #1C1C1C;
        font-size: 16px;
        font-weight: 500;

        font-style: normal;
        line-height: 1.25;

        display: flex;
        justify-content: flex-start;
        align-content: center;
        align-items: center;
        flex-wrap: nowrap;

        padding: 11px 16px;

        text-decoration: none;

        border-radius: 50px;

        transition: color .2s linear;

        &:before
        {
            content: "";

            position: absolute;
            top: 0;
            left: 0;

            width: 100%;
            height: 100%;

            opacity: 0;
            border-radius: 50px;
            background: linear-gradient(84.09deg, #D485F1 4.37%, #7156F8 94.11%);

            transition: opacity .2s linear;
        }

		@media (any-hover: hover) {
			&:hover
			{
				color: #FFF;

				svg
				{
					fill: currentColor;
				}

				&:before
				{
					opacity: 1;
				}
			}
		}

		&.active
		{
			color: #FFF;

			svg
			{
				fill: currentColor;
			}

			&:before
			{
				opacity: 1;
			}
		}
    }


    &__icon
    {
        position: relative;

        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        flex-shrink: 0;
        flex-wrap: wrap;

        width: 20px;
        height: 20px;
        margin-right: 10px;

        img
        {
            display: block;

            max-width: 100%;
            max-height: 100%;
        }

        svg
        {
            display: block;

            max-width: 100%;
            max-height: 100%;

            transition: fill .2s linear;

            fill: #7B7B7B;
        }
    }

    &__name
    {
        position: relative;

        display: block;
    }

	&__submenu
	{
		margin-top: 7px;
		padding-bottom: 13px;
	}

    &__submenu-item + &__submenu-item
    {
        margin-top: 4px;
    }

	&__submenu-link
    {
        color: #1C1C1C;
        font-size: 14px;
        font-weight: 400;

        font-style: normal;
        line-height: 1.43;

        display: block;

        padding: 4px 16px 4px 46px;

        text-decoration: none;

        transition: color .2s linear;

		@media (any-hover: hover) {
			&:hover
			{
				color: #7156F8;
			}
		}
    }
}

</style>
