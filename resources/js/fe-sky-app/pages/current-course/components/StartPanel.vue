<template>
	<Notice>
		<p>
			Супер! Выбери тип занятия и выключи подсказки, если уверен в своих силах. На тренировке подсказки не влияют на лояльность. В режиме обучения каждая подсказка будет отнимать очки лояльности. А на экзамене они будут недоступны. Вот так:)
		</p>
	</Notice>

    <form :class="bem()" class="_marg" @submit="start">
		<!-- <div class="cell small-4">
            <p>{{ training_type }}</p>
            
        </div> -->
		<div :class="bem('flex _four _flex')">
			<div :class="bem('line')">
				<div :class="bem('label')">Выберете тип тренировки</div>

				<div :class="bem('field')">
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
					<!-- <select
						class="margin-bottom-0"
						v-if="course?.extra?.training_types"
						v-model="training_type"
						required
					>
						<option disabled value="">Select your training type</option>
						<option key="1" value="1">
							Тренировка 1
						</option>
						<option
							v-for="training_type in course.extra.training_types"
							:key="training_type.id"
							:value="training_type.value"
						>
							{{ training_type.caption }}
						</option>
					</select> -->
				</div>
			</div>

			<div :class="bem('line')">
				<div :class="bem('label')">Выберете стадию</div>

				<div :class="bem('field')">
					<CustomSelect
						:value="training_type"
						:onChangeValue="onChange_training_type"
						:options="[
							{id:1, caption:'Приветствие'},
							{id:2, caption:'Потребности'},
							{id:3, caption:'Презентация'},
							{id:4, caption:'Возражения'}
						]"
					/>

					<!-- <select
						class="margin-bottom-0"
						v-if="course?.extra?.stages"
						v-model="stageId"
						required
					>
						<option disabled value="">Select your stage</option>
						<option
							v-for="stage in course.extra.stages"
							:key="stage.id"
							:value="stage.id"
						>
							{{ stage.caption }}
						</option>
					</select> -->
				</div>
			</div>

			<div :class="bem('line')">
				<div :class="bem('label')">Тип диалога</div>

				<div :class="bem('field')">
					<div class="checkbox-duble">
						<label class="checkbox-duble__label">
							<input type="checkbox" name="" checked="">

							<span class="checkbox-duble__box">
								<span class="checkbox-duble__text">Открытый</span>
								<span class="checkbox-duble__text">Агрессивный</span>
							</span>
						</label>
					</div>
				</div>
			</div>

			<div :class="bem('submit _flex')">
				<button
					type="submit"
					:class="bem('submit-btn btn-green')"
				>
					<span>Начать звонок</span>
				</button>
			</div>
		</div>
        <!-- <div class="cell small-4">
            <label>
                Выберете тип тренировки
                <select
						class="margin-bottom-0"
						v-if="course?.extra?.training_types"
						v-model="training_type"
						required
					>
						<option disabled value="">Select your training type</option>
						<option key="1" value="1">
							Тренировка 1
						</option>
						<option
							v-for="training_type in course.extra.training_types"
							:key="training_type.id"
							:value="training_type.value"
						>
							{{ training_type.caption }}
						</option>
					</select>
            </label>
        </div>
        <div class="cell small-4">
            <label>
                Выберете стадию
                <select
					class="margin-bottom-0"
					v-if="course?.extra?.stages"
					v-model="stageId"
					required
				>
					<option disabled value="">Select your stage</option>
					<option
						v-for="stage in course.extra.stages"
						:key="stage.id"
						:value="stage.id"
					>
						{{ stage.caption }}
					</option>
				</select>
            </label>
        </div>
        <div class="cell small-4">
            <label>
                Тип диалога
                <select
                    class="margin-bottom-0"
                    v-if="course?.available_trainers"
                    v-model="trainer"
                    required
                >
                    <option disabled value="">Select your trainer</option>
                    <option
                        v-for="trainer in course.available_trainers"
                        :key="trainer.id"
                        :value="trainer.id"
                    >
                        {{ trainer.name }}
                    </option>
                </select>
            </label>
        </div>
        <div class="cell small-12 margin-top-1 margin-bottom-1">
            <button
                type="submit"
                :class="bem('btn-start-call')"
            >
                <Fa icon="phone"/>
                Начать звонок
            </button>
        </div> -->
    </form>
</template>
<script>
import useBem from "vue3-bem";
import {requestDialogStart} from "../../../requests";
import {STATUSES} from "../../../constants/common";
import {CustomSelect} from "../../../components/form";

const componentName = 'StartPanel';

// const bem = useBem(componentName);
const bem = useBem('form');

export default {
    name: componentName,
    components: {
        CustomSelect
    },
    props: {
        status: {
            type: String
        },
        onChangeStatus: {
            type: Function
        }
    },
    data: () => ({
        bem,
        STATUSES,
        stageId: 1,
        training_type: 1,
        trainer: 1
    }),
    methods: {
        start(e) {
            e.preventDefault();
            e.stopPropagation();
            this.$store.dispatch('setLoadingStart');
            requestDialogStart({
                courseId: this.$route.params.courseId,
                phaseId: this.training_type,
                stageId: this.stageId,
                trainerId: this.trainer,
            }).then(({data}) => {
                console.log('dialogData:', data)
                this.$store.dispatch('setHelpPhrases', data?.next_phrases?.phrases[0] || []);
                this.$store.dispatch('pushDialog', data);
                this.onChangeStatus(STATUSES.inProgress);
            }).finally(() => {
                this.$store.dispatch('setLoadingStop');
            });
        },
        onChange_training_type(training) {
            console.log('training:', training);
            this.training_type = training.id
        }
    },
    computed: {
        isLoading() {
            return this.$store.getters.getIsLoading
        },
        dialogData() {
            return this.$store.getters.getDialogsData
        },
        course() {
            return this.$store.getters.getCurrentCourse
        },
        dialogLogs() {
            return this.$store.getters.getDialogLogs
        },
        helpPhrases() {
            return this.$store.getters.getHelpPhrases
        }
    }
}
</script>
<style lang="scss" scoped>
/* @import 'foundation-sites/scss/foundation.scss';
@import '../../../../../sass/colors';
@import '../../../../../sass/mixins';

.start-panel {
    &__btn-start-call {
        @include borderRadius(50px);
        cursor: pointer;
        padding: 15px;
        background: linear-gradient(45deg, #2DC358, #1ABAB0);
        color: #FFFFFF;
    }
} */
@import "../../../../../sass/media";

.form{
	&._marg{
		margin-top: 22px;
	}

	&__line{
		margin-bottom: 13px;
		width: 100%;
	}

	&__label{
		margin-bottom: 8px;

		font-weight: 400;
		font-size: 13px;
		line-height: 28px;

		color: #000000;
	}

	&__submit{
		margin-top: 31px;
		width: 100%;
	}

	&__flex &__submit,
	&__flex + &__submit{
		margin-top: 18px;
	}

	@media (min-width: $mb_small) {
		&__flex{
			margin-left: -16px;
		}

		&__flex &__line{
			width: calc(100%/2 - 16px);
			margin-left: 16px;
			min-width: 220px;
			flex-grow: 1;
		}

		&__flex._four &__line{
			width: calc(100%/2 - 16px);
			min-width: 220px;
			flex-grow: 1;
		}

		&__flex._four &__submit{
			width: calc(100%/2 - 16px);
			min-width: 220px;
			flex-grow: 1;
			margin-left: 16px;
			align-self: flex-end;
			margin-bottom: 13px;
		}
	}

	@media (min-width: $mb_middle) {
		&__flex &__line{
			margin-left: 16px;
			min-width: 1px;
			flex-grow: 0;
		}

		&__flex._four &__line{
			width: calc(100%/3 - 16px);
			min-width: 1px;
			flex-grow: 0;
		}

		&__flex._four &__submit{
			width: 100%;
			min-width: 1px;
			flex-grow: 0;
			margin-bottom: 0;
			margin-left: 0;
		}

		&__flex._four &__submit-btn{
			width: calc(100%/3 - 16px);
			margin-left: 16px;
		}
	}

	@media (min-width: $mb_large) {
		&__flex{
			margin-left: -30px;
		}

		&__flex &__line{
			width: calc(100%/2 - 30px);
			margin-left: 30px;
		}

		&__flex._four &__line{
			width: calc(100%/4 - 30px);
		}

		&__flex._four &__submit-btn{
			width: calc(100%/4 - 30px);
			margin-left: 30px;
		}
	}
}


.checkbox-duble
{
	input[type=checkbox]{
		display: none;
	}

	&__label{
		display: block;
		cursor: pointer;
	}

	&__box{
		font-weight: 400;
		font-size: 12px;
		line-height: normal;

		text-align: center;

		color: #29343E;

		display: flex;
		justify-content: flex-start;
		align-items: center;
		align-content: center;
		flex-wrap: wrap;
		position: relative;
		border: 1px solid #E0E0E0;
		border-radius: 50px;
		height: 48px;

		&::before{
			content: '';
			position: absolute;
			left: -1px;
			top: -1px;
			width: calc(50% + 1px);
			height: calc(100% + 2px);
			background: #8C63F7;
			transition: left .2s linear;
			border-radius: 50px;
		}
	}

	&__text{
		position: relative;
		width: 50%;
		padding: 4px;
		border-radius: 50px;
		transition: color .2s linear;
	}

	&__text:first-child{
		color: #fff;
	}

	input[type=checkbox]:checked + &__box{
		&::before{
			left: 50%;
		}

		.checkbox-duble__text:first-child{
			color: currentColor;
		}

		.checkbox-duble__text + .checkbox-duble__text{
			color: #fff;
		}
	}
}
</style>
