<template>
  <div :class="bem()">
    <div :class="bem('title')">Ответственность</div>

	<div :class="bem('progress')">
		<div :class="bem('progress-number')">50.8%</div>

		<svg :class="bem('progress-svg')" width="113" height="113" viewBox="0 0 113 113" fill="none" xmlns="http://www.w3.org/2000/svg">
			<!-- Вместо 50.8 передаешь любое число от 0 до 100 (0 это 0%) (100 это 100%) -->
			<circle :class="bem('progress-line')" cx="56.5" cy="56.5" r="48.5" fill="none" stroke="url(#paint1_linear_523_8240)" stroke-width="16" stroke-dashoffset="calc(50.8 * 3.04 + 304)"/>
			<defs>
				<linearGradient id="paint1_linear_523_8240" x1="56.5" y1="0" x2="56.5" y2="113" gradientUnits="userSpaceOnUse">
					<stop stop-color="#00FFC2"/>
					<stop offset="1" stop-color="#48F8ED" stop-opacity="0.45"/>
				</linearGradient>
			</defs>
		</svg>
	</div>

	<div :class="bem('items')">
		<div :class="bem('item')">
			<div :class="bem('item-dot')">
				<span></span>
			</div>
			<div :class="bem('item-val')">Время тренировок:</div>
			<div :class="bem('item-time')">26:14</div>
		</div>
		<div :class="bem('item')">
			<div :class="bem('item-dot')">
				<span style="background: #E7EFF4;"></span>
			</div>
			<div :class="bem('item-val')">Время обучения</div>
			<div :class="bem('item-time')">28:20</div>
		</div>
	</div>
  </div>
</template>
<script>
import useBem from 'vue3-bem';

const name = 'Responsibility';
const bem = useBem(name);

export default {
  name,
  data: () => ({
    bem,
  }),
};
</script>
<style lang="scss" scoped>
@import "../../../../sass/media";

.responsibility {
	padding: 22px;
	background: linear-gradient(84.09deg, #2DC458 4.37%, #1ABAB0 94.11%);
	border-radius: 8px;

	display: flex;
	justify-content: flex-start;
	align-items: center;
	align-content: center;
	flex-wrap: wrap;

	&__title{
		font-weight: 600;
		font-size: 14px;
		line-height: 1.43;

		color: #FFFFFF;
		margin-bottom: 22px;
		width: 100%;
	}


	&__progress{
		position: relative;
		width: 120px;
		height: 120px;
		flex-shrink: 0;
		margin-right: 18px;
		margin-left: 2px;

		&::before{
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			border: 16px solid rgba(231, 239, 244, 0.35);
			border-radius: 50%;
		}
	}

	&__progress-number{
		position: absolute;
		left: -2px;
		bottom: 21px;
		display: inline-block;
		vertical-align: top;
		background: #1F1F1F;
		border-radius: 4px;

		line-height: 18px;
		font-size: 12px;
		padding: 0 4px;

		color: #FFFFFF;
		z-index: 2;
	}

	&__progress-svg{
		transform: rotate(-90deg);
		display: block;
		z-index: 1;
		width: 100%;
		height: 100%;
	}

	&__progress-line{
		stroke-linecap: round;
		stroke-dasharray: 304;
	}

	&__items{
		width: calc(100% - 140px);
		display: table;
		border-collapse: collapse;
		flex-grow: 1;
	}

	&__item{
		display: table-row;
		vertical-align: top;

		& > *{
			display: table-cell;
			vertical-align: top;
			padding: 5px 0;
		}

		&-dot{
			width: 11px;
			padding-right: 5px;

			table-layout: fixed;

			span{
				display: block;
				width: 6px;
				height: 6px;
				border-radius: 50%;
				background: #03FEC3;
				margin-top: 6px;
			}
		}

		&-val{
			font-weight: 400;
			font-size: 12px;
			line-height: 1.5;

			color: #FFFFFF;
			width: 100%;
		}

		&-time{
			font-weight: 400;
			font-size: 12px;
			line-height: 1.5;

			color: #FFFFFF;
			white-space: nowrap;
			padding-left: 14px;
		}
	}

	@media (min-width: $mb_small) {
		align-content: stretch;
		align-items: stretch;
		flex-direction: column;

		&__progress{
			margin: auto;
		}

		&__items{
			width: 100%;
			flex-grow: 0;
			margin-top: 22px;
		}
	}

	@media (min-width: $mb_middle) {
		padding: 24px;

		&__progress{
			width: 144px;
			height: 144px;
		}

		&__progress{
			&::before{
				border-width: 20px;
			}
		}

		&__progress-number{
			bottom: 32px;
		}
	}
}
</style>
