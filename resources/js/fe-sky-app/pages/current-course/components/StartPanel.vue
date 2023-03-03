<template>
  <CommonNotice>
    <p>
      Супер! Выбери тип занятия и выключи подсказки, если уверен в своих силах.
      На тренировке подсказки не влияют на лояльность.
      В режиме обучения каждая подсказка будет отнимать очки лояльности.
      А на экзамене они будут недоступны. Вот так:)
    </p>
  </CommonNotice>

  <form :class="bem()" class="_marg" @submit="start">
    <div :class="bem('flex _four _flex')">
      <div :class="bem('line')">
        <div :class="bem('label')">Выберете тип тренировки</div>

        <div :class="bem('field')" v-if="course?.extra?.training_types">
          <p style="display: none">{{ course?.extra?.training_types }}</p>
          <CustomSelect
            :value="training_type"
            :onChangeValue="onChange_trainingTypeId"
            :options="[{id:'1', caption:'Тренировка по стадиям'}]"
          />
          <!--            :options="course?.extra?.training_types"-->
          <!--          :options="[-->
          <!--          {id:1, caption:'Тренировка по стадиям'},-->
          <!--          {id:2, caption:'Потребности'},-->
          <!--          {id:3, caption:'Презентация'},-->
          <!--          {id:4, caption:'Возражения'}-->
          <!--          ]"-->
        </div>
      </div>

      <div :class="bem('line')">
        <div :class="bem('label')">Выберете стадию</div>

        <div :class="bem('field')" v-if="course?.extra?.stages">
          <CustomSelect
            :value="stageId"
            :onChangeValue="onChange_stageId"
            :options="course.extra.stages"
          />
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
    <!--
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
    -->
  </form>
</template>
<script>
import useBem from 'vue3-bem';
import {requestDialogStart} from '../../../requests';
import {STATUSES} from '../../../constants/common';
import {CustomSelect} from '../../../components/form';

const name = 'StartPanel';

// const bem = useBem(componentName);
const bem = useBem('form');

export default {
  name,
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
    stageId: '1',
    training_type: '1',
    trainer: '1'
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
        trainerId: this.trainer
      })
        .then(({data}) => {
          console.log('dialogData:', data);
          this.$store.dispatch('setHelpPhrases', data?.next_phrases?.phrases[0] || []);
          this.$store.dispatch('pushDialog', data);
          this.onChangeStatus(STATUSES.inProgress);
        })
        .finally(() => {
          this.$store.dispatch('setLoadingStop');
        });
    },
    onChange_stageId(option) {
      this.stageId = option.id;
    },
    onChange_trainingTypeId(option) {
      this.training_type = option.id;
    }
  },
  computed: {
    isLoading() {
      return this.$store.getters.getIsLoading;
    },
    dialogData() {
      return this.$store.getters.getDialogsData;
    },
    course() {
      return this.$store.getters.getCurrentCourse;
    },
    dialogLogs() {
      return this.$store.getters.getDialogLogs;
    },
    helpPhrases() {
      return this.$store.getters.getHelpPhrases;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../../../sass/media";

.form
{
    &._marg
    {
        margin-top: 22px;
    }

    &__line
    {
        width: 100%;
        margin-bottom: 13px;
    }

    &__label
    {
        color: #000;
        font-size: 13px;
        font-weight: 400;
        line-height: 28px;

        margin-bottom: 8px;
    }

    &__submit
    {
        width: 100%;
        margin-top: 31px;
    }

    &__flex &__submit,
    &__flex + &__submit
    {
        margin-top: 18px;
    }

    @media (min-width: $mb_small)
    {
        &__flex
        {
            margin-left: -16px;
        }

        &__flex &__line
        {
            flex-grow: 1;

            width: calc(100% / 2 - 16px);
            min-width: 220px;
            margin-left: 16px;
        }

        &__flex._four &__line
        {
            flex-grow: 1;

            width: calc(100% / 2 - 16px);
            min-width: 220px;
        }

        &__flex._four &__submit
        {
            align-self: flex-end;
            flex-grow: 1;

            width: calc(100% / 2 - 16px);
            min-width: 220px;
            margin-bottom: 13px;
            margin-left: 16px;
        }
    }

    @media (min-width: $mb_middle)
    {
        &__flex &__line
        {
            flex-grow: 0;

            min-width: 1px;
            margin-left: 16px;
        }

        &__flex._four &__line
        {
            flex-grow: 0;

            width: calc(100% / 3 - 16px);
            min-width: 1px;
        }

        &__flex._four &__submit
        {
            flex-grow: 0;

            width: 100%;
            min-width: 1px;
            margin-bottom: 0;
            margin-left: 0;
        }

        &__flex._four &__submit-btn
        {
            width: calc(100% / 3 - 16px);
            margin-left: 16px;
        }
    }

    @media (min-width: $mb_large)
    {
        &__flex
        {
            margin-left: -30px;
        }

        &__flex &__line
        {
            width: calc(100% / 2 - 30px);
            margin-left: 30px;
        }

        &__flex._four &__line
        {
            width: calc(100% / 4 - 30px);
        }

        &__flex._four &__submit-btn
        {
            width: calc(100% / 4 - 30px);
            margin-left: 30px;
        }
    }
}

.checkbox-duble
{
    input[type=checkbox]
    {
        display: none;
    }

    &__label
    {
        display: block;

        cursor: pointer;
    }

    &__box
    {
        position: relative;

        color: #29343E;
        font-size: 12px;
        font-weight: 400;
        line-height: normal;

        display: flex;
        justify-content: flex-start;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;

        height: 48px;

        text-align: center;

        border: 1px solid #E0E0E0;
        border-radius: 50px;

        &::before
        {
            content: "";

            position: absolute;
            top: -1px;
            left: -1px;

            width: calc(50% + 1px);
            height: calc(100% + 2px);

            border-radius: 50px;
            background: #8C63F7;

            transition: left .2s linear;
        }
    }

    &__text
    {
        position: relative;

        width: 50%;
        padding: 4px;

        border-radius: 50px;

        transition: color .2s linear;
    }

    &__text:first-child
    {
        color: #FFF;
    }

    input[type=checkbox]:checked + &__box
    {
        &::before
        {
            left: 50%;
        }

        .checkbox-duble__text:first-child
        {
            color: currentColor;
        }

        .checkbox-duble__text + .checkbox-duble__text
        {
            color: #FFF;
        }
    }
}
</style>
