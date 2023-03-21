<template>
  <div :class="bem()">
    <div :class="bem('notice')">
      <CommonNotice>
        {{ t('commonNotice') }}
      </CommonNotice>
    </div>

    <form :class="bem('form')" class="_marg" @submit="start">
      <div :class="bem('form-control-group')">
        <div :class="bem('form-control')">
          <div :class="bem('label')">{{ t('training_types.label') }}</div>

          <div :class="bem('field')" v-if="course?.extra?.training_types">
            <CustomSelect
              :value="training_type"
              :onChangeValue="onChange_trainingTypeId"
              :options="trainingTypes"
            />
          </div>
        </div>
        <div :class="bem('form-control')" v-if="training_type === '2'">
          <div :class="bem('label')">{{ t('stages.label') }}</div>

          <div :class="bem('field')" v-if="course?.extra?.stages">
            <CustomSelect
              :value="stageId"
              :onChangeValue="onChange_stageId"
              :options="course.extra.stages"
            />
          </div>
        </div>

        <div :class="bem('form-control')">
          <div :class="bem('label')">
            {{ t('available_trainers.label') }}
            {{ trainer }}
          </div>
          <div :class="bem('field')">
            <InputSwitcher
              :onChangeValue="this.onChange_trainer"
              :value="trainer"
              :options="[
                { caption: availableTrainers?.[0]?.caption, value: 0 },
                { caption: availableTrainers?.[1]?.caption, value: 1 },
              ]"
            />
          </div>
        </div>
      </div>

      <div :class="bem('form-control-group')">
        <div :class="bem('form-control')">
          <button
            type="submit"
            :class="bem('submit-btn btn-green')"
          >
            <span>Начать звонок</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import useBem from 'vue3-bem';
import {requestDialogStart} from '@src/requests';
import {STATUSES} from '@src/constants/common';
import {PAGE_NAMES} from '@src/constants';
import {CustomSelect, InputSwitcher} from '@src/components/form';

const name = 'StartPanel';
const bem = useBem(name);

export default {
  name,
  components: {
    CustomSelect,
    InputSwitcher
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
          // console.log('dialogData:', data);
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
    },
    onChange_trainer(option) {
      this.trainer = option.value;
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
@import "@sass/_media.scss";

.start-panel {
  $column_gap: 15px;
  $row_gap: 15px;

  $column_gap__large: 30px;

  &__form {
    margin-top: 22px;
    display: flex;
    flex-wrap: wrap;
    row-gap: $row_gap;
  }

  &__form-control-group {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    column-gap: $column_gap;
    row-gap: $row_gap;

    @media (min-width: $mb_large) {
      column-gap: $column_gap__large;
    }
  }

  &__form-control {
    width: 100%;

    @media (min-width: $mb_small) {
      width: calc(100% / 2 - ($column_gap - $column_gap / 3));
    }

    @media (min-width: $mb_middle) {
      width: calc(100% / 3 - ($column_gap - $column_gap / 3));
    }

    @media (min-width: $mb_large) {
      width: calc(100% / 4 - ($column_gap__large - $column_gap__large / 4));
    }
  }

  &__label {
    color: #000;
    font-size: 13px;
    font-weight: 400;
    line-height: 28px;
    margin-bottom: 8px;
  }
}
</style>
