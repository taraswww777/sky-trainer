<template>
  <div :class="bem()">
    <div :class="bem('start-panel')">
      <StartPanel
        :onChangeStatus="this.onChangeStatus"
        v-if="status === STATUSES.new"
      />
    </div>
    <div :class="bem('flex _flex')" v-if="status === STATUSES.inProgress">
      <div :class="bem('coll')">
        <div :class="bem('top _flex')">
          <div :class="bem('top-box')">
            <TagList
              :tags="[
                this.$t(`data.training_types.${dialogOptions.phaseId}`),
                course.extra?.stages?.find(({ id })=>(
                  id === dialogOptions.stageId
                ))?.caption,
                this.$t(`data.available_trainers.${dialogOptions.trainerId}`),
              ].filter(v=>v)"
            />
          </div>

          <button type="submit" :class="bem('top-btn')" class="btn-orange" @click="endCall">
            <span>{{ t('finishCall') }}</span>
          </button>
        </div>

        <HelpPanel :helpPhrases="helpPhrases" />

        <DialogPanel :dialogLogs="dialogLogs" />
      </div>

      <div :class="bem('colr')">
        <FunnelStage />

        <SpeedSpeech />

        <QualityControl />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import useBem from 'vue3-bem';
import {noop} from 'lodash';
import {STATUSES} from '@src/constants/common';
import {requestCourseById} from '@src/requests';
import {PAGE_NAMES} from '@src/constants';
import {appRouter} from '@src/app-router';
import StartPanel from './components/StartPanel.vue';
import FunnelStage from '@src/modules/course-completion/components/FunnelStage.vue';
import SpeedSpeech from '@src/modules/course-completion/components/SpeedSpeech.vue';
import QualityControl from '@src/modules/course-completion/components/QualityControl.vue';
import HelpPanel from '@src/components/common/HelpPanel.vue';
import DialogPanel from '@src/modules/course-completion/components/DialogPanel.vue';
import TagList from '@src/components/common/TagList.vue';

const name = 'CourseCompletionModule';

const bem = useBem(name);

export default {
  name,
  methods: {noop},
  components: {
    TagList,
    DialogPanel,
    HelpPanel,
    QualityControl,
    SpeedSpeech,
    FunnelStage,
    StartPanel
  },
  data: () => ({
    bem,
    status: STATUSES.new,
    STATUSES,
    stage: undefined,
    training_type: undefined,
    trainer: undefined
  }),
  mounted() {
    this.$store.dispatch('setLoadingStart');
    requestCourseById(this.$route.params.courseId)
      .then(({data}) => {
        this.$store.dispatch('setCurrentCourse', data);
      })
      .finally(() => {
        this.$store.dispatch('setLoadingStop');
      });
  },
  methods: {
    t(key) {
      return this.$t(`pages.${PAGE_NAMES.courseItem}.${key}`);
    },
    onChangeStatus(status) {
      this.status = status;
    },
    endCall() {
      appRouter.push({name: PAGE_NAMES.courses});
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
    },
    dialogOptions() {
      return this.$store.getters.getDialogOptions;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@sass/media";

.course-completion-module {
  &__start-panel {

  }

  &__flex {
    justify-content: space-between;
    margin-top: -20px;
  }

  &__coll {
    width: 100%;
    margin-top: 20px;
  }

  &__colr {
    width: 100%;
    margin-top: 20px;

    & > :last-child {
      margin-bottom: 0;
    }
  }

  &__top {
    margin-bottom: 25px;
  }

  &__top-box {
    width: 100%;
  }

  &__top-btn {
    margin-top: 18px;
  }

  @media (min-width: $mb_middle) {
    &__flex {

      margin-left: -28px;
    }

    &__coll {
      width: calc(100% - 318px);
      margin-left: 28px;
      min-width: 540px;

      flex-grow: 1;
    }

    &__colr {
      width: 262px;
      margin-left: 28px;

      flex-grow: 1;

      align-self: flex-end;

      & > :last-child {
        margin-bottom: 0;
      }
    }

    &__top {
      flex-wrap: nowrap;
      justify-content: space-between;
    }

    &__top-box {
      width: auto;
      order: 2;
      align-self: center;
    }

    &__top-box .tag-list {
      justify-content: flex-end;
    }

    &__top-btn {
      margin: 0 20px 0 0;
      flex-shrink: 0;
    }
  }
}
</style>
