<template>
  <CommonNotice>
    {{ t('commonNotice') }}
  </CommonNotice>

  <form :class="bem()" class="_marg" @submit="start">
    <div :class="bem('flex _four _flex')">
      <div :class="bem('line')">
        <div :class="bem('label')">{{ t('training_types.label') }}</div>

        <div :class="bem('field')" v-if="course?.extra?.training_types">
          <CustomSelect
            :value="training_type"
            :onChangeValue="onChange_trainingTypeId"
            :options="trainingTypes"
          />
        </div>
      </div>
      <div :class="bem('line')" v-if="training_type === '2'">
        <div :class="bem('label')">{{ t('stages.label') }}</div>

        <div :class="bem('field')" v-if="course?.extra?.stages">
          <CustomSelect
            :value="stageId"
            :onChangeValue="onChange_stageId"
            :options="course.extra.stages"
          />
        </div>
      </div>

      <div :class="bem('line')">
        <div :class="bem('label')">{{ t('available_trainers.label') }}</div>
        <div :class="bem('field')">
          <div class="checkbox-duble">
            <label class="checkbox-duble__label">
              <input type="checkbox" name="" checked="" v-model="trainer" disabled>
              <span class="checkbox-duble__box">
                <span class="checkbox-duble__text">
                  {{availableTrainers?.[0]?.caption}}
                </span>
                <span class="checkbox-duble__text">
                  {{availableTrainers?.[1]?.caption}}
                </span>
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
  </form>
</template>
<script>
import useBem from 'vue3-bem';
import {requestDialogStart} from '../../../requests';
import {STATUSES} from '../../../constants/common';
import {CustomSelect} from '../../../components/form';
import {PAGE_NAMES} from '../../../constants';

const name = 'StartPanel';
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
    t(key) {
      return this.$t(`pages.${PAGE_NAMES.courseItem}.${key}`);
    },
    start(e) {
      e.preventDefault();
      e.stopPropagation();
      const trainingOptions = {
        courseId: this.$route.params.courseId,
        phaseId: this.training_type,
        stageId: this.training_type === '2' ? this.stageId : 1,
        trainerId: this.trainer
      };
      this.$store.dispatch('setLoadingStart');
      this.$store.dispatch('setDialogOptions', trainingOptions);
      requestDialogStart(trainingOptions)
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
    trainingTypes() {
      return this.course?.extra?.training_types?.map((item) => ({
        ...item,
        caption: this.$t(`data.training_types.${item.id}`)
      }));
    },
    availableTrainers() {
      return this.course?.available_trainers?.map((item) => ({
        ...item,
        caption: this.$t(`data.available_trainers.${item.name}`)
      }));
    },
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
@import "@sass/media";

.form {
  &._marg {
    margin-top: 22px;
  }

  &__line {
    width: 100%;
    margin-bottom: 13px;
  }

  &__label {
    color: #000;
    font-size: 13px;
    font-weight: 400;
    line-height: 28px;

    margin-bottom: 8px;
  }

  &__submit {
    width: 100%;
    margin-top: 31px;
  }

  &__flex &__submit,
  &__flex + &__submit {
    margin-top: 18px;
  }

  @media (min-width: $mb_small) {
    &__flex {
      margin-left: -16px;
    }

    &__flex &__line {
      flex-grow: 1;

      width: calc(100% / 2 - 16px);
      min-width: 220px;
      margin-left: 16px;
    }

    &__flex._four &__line {
      flex-grow: 1;

      width: calc(100% / 2 - 16px);
      min-width: 220px;
    }

    &__flex._four &__submit {
      align-self: flex-end;
      flex-grow: 1;

      width: calc(100% / 2 - 16px);
      min-width: 220px;
      margin-bottom: 13px;
      margin-left: 16px;
    }
  }

  @media (min-width: $mb_middle) {
    &__flex &__line {
      flex-grow: 0;

      min-width: 1px;
      margin-left: 16px;
    }

    &__flex._four &__line {
      flex-grow: 0;

      width: calc(100% / 3 - 16px);
      min-width: 1px;
    }

    &__flex._four &__submit {
      flex-grow: 0;

      width: 100%;
      min-width: 1px;
      margin-bottom: 0;
      margin-left: 0;
    }

    &__flex._four &__submit-btn {
      width: calc(100% / 3 - 16px);
      margin-left: 16px;
    }
  }

  @media (min-width: $mb_large) {
    &__flex {
      margin-left: -30px;
    }

    &__flex &__line {
      width: calc(100% / 2 - 30px);
      margin-left: 30px;
    }

    &__flex._four &__line {
      width: calc(100% / 4 - 30px);
    }

    &__flex._four &__submit-btn {
      width: calc(100% / 4 - 30px);
      margin-left: 30px;
    }
  }
}

.checkbox-duble {
  input[type=checkbox] {
    display: none;
  }

  &__label {
    display: block;

    cursor: pointer;
  }

  &__box {
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

    &::before {
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

  &__text {
    position: relative;

    width: 50%;
    padding: 4px;

    border-radius: 50px;

    transition: color .2s linear;
  }

  &__text:first-child {
    color: #FFF;
  }

  input[type=checkbox]:checked + &__box {
    &::before {
      left: 50%;
    }

    .checkbox-duble__text:first-child {
      color: currentColor;
    }

    .checkbox-duble__text + .checkbox-duble__text {
      color: #FFF;
    }
  }
}
</style>
