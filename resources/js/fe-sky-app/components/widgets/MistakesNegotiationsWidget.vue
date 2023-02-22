<template>
  <div :class="bem()">
    <div :class="bem('title')">Ошибки в переговорах</div>

	<CustomSelect
		:value="training_type"
		:onChangeValue="onChange_training_type"
		:options="[
			{id:1, caption:'Тренировка по стадиям'},
			{id:2, caption:'Потребности'},
			{id:3, caption:'Презентация'},
			{id:4, caption:'Возражения'}
		]"
	/>

	<div :class="bem('table')">
		<table>
			<thead>
				<tr>
					<th>Стадия</th>
					<th>Ошибки</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>
						<span>0</span>
					</td>
				</tr>
				<tr>
					<td>2</td>
					<td>
						<span>22</span>
					</td>
				</tr>
				<tr>
					<td>3</td>
					<td>
						<span>0</span>
					</td>
				</tr>
				<tr>
					<td>4</td>
					<td>
						<span>0</span>
					</td>
				</tr>
				<tr>
					<td>5</td>
					<td>
						<span>0</span>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
  </div>
</template>
<script>
import useBem from 'vue3-bem';
import {CustomSelect} from '../../components/form';

const name = 'MistakesNegotiations';
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

.mistakes-negotiations {
	padding: 22px;
	background: rgba(255, 255, 255, 0.75);
	box-shadow: 0px 0px 44px rgba(0, 0, 0, 0.075);
	border-radius: 8px;

	&__title{
		font-weight: 600;
		font-size: 14px;
		line-height: 1.43;
		margin-bottom: 16px;

		color: #1C1C1C;
	}

	&__table{
		margin-top: 16px;

		table{
			width: 100%;
			border-collapse: separate;
			border-spacing: 0 3px;
		}

		thead{
			background: none;
		}

		th{
			text-align: center;
			vertical-align: middle;

			font-weight: 500;
			font-size: 12px;
			line-height: 18px;
			padding: 5px 5px 8px;

			color: #1C1C1C;

			&:first-child{
				text-align: left;
				padding-left: 0;
			}

			&:last-child{
				text-align: right;
				padding-right: 0;
			}
		}

		tbody{
			background: none;
			border: none;
		}

		td{
			background: #F8F8F8;
			text-align: center;
			vertical-align: middle;

			font-weight: 400;
			font-size: 12px;
			line-height: 18px;

			color: #1C1C1C;

			span{
				display: inline-block;
				background: #FFEEEE;
				border-radius: 50px;
				min-width: 30px;
				padding: 0 6px;
				text-align: center;
			}

			&:first-child{
				text-align: left;
				padding-left: 12px;
				border-radius: 8px 0 0 8px;
			}

			&:last-child{
				text-align: right;
				padding-right: 12px;
				border-radius: 0 8px 8px 0;

				span{
					margin-right: -6px;
				}
			}
		}
	}

	@media (min-width: $mb_middle) {
		padding: 24px;
	}
}
</style>
