<template>
  <div :class="bem()">
    <div
      v-if="status === STATUSES.new"
      :class="bem('start-panel')"
    >
      <StartPanel />
    </div>
    <div :class="bem('process')" v-if="status === STATUSES.inProgress">
      <div :class="bem('process-header')">
        <div :class="bem('top-box')">
          <TagList
            :tags="[
              this.$t(`data.training_types.${dialogOptions?.phaseId}`),
              course.extra?.stages?.find(({ id })=>(
                id === dialogOptions?.stageId
              ))?.caption,
              this.$t(`data.available_trainers.${dialogOptions?.trainerId}`),
            ].filter(v=>v)"
          />
        </div>

        <UiButton
          type="submit"
          btnType="call-end"
          @click="endCall"
        >
          <span>{{ t('finishCall') }}</span>
        </UiButton>
      </div>
      <div :class="bem('process-content')">
        <div :class="bem('main')">
          <HelpPanel :helpPhrases="helpPhrases" />

          <DialogPanel :dialogLogs="dialogLogs" />
        </div>
        <div :class="bem('bar')">
          <FunnelStage />

          <SpeedSpeech />

          <QualityControl />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import useBem from 'vue3-bem';
import {STATUSES} from '@src/constants/common';
import {PAGE_NAMES} from '@src/constants';
import HelpPanel from '@src/components/common/HelpPanel.vue';
import TagList from '@src/components/common/TagList.vue';
import {apiClient} from '@src/api';
import UiButton from '@src/ui/UiButton.vue';
import {identity, map} from 'lodash';
import FunnelStage from './components/FunnelStage.vue';
import SpeedSpeech from './components/SpeedSpeech.vue';
import QualityControl from './components/QualityControl.vue';
import DialogPanel from './components/DialogPanel.vue';
import StartPanel from './components/StartPanel.vue';
import {actionEndCall} from './actions';

const name = 'CourseCompletionModule';

const bem = useBem(name);

export default {
  name,
  components: {
    UiButton,
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
    STATUSES,
    stage: undefined,
    training_type: undefined,
    trainer: undefined
  }),
  mounted() {
    this.$store.commit('setLoadingStart');
    apiClient.getCourseById(this.$route.params.courseId)
      .then(({data: course}) => {
        this.$store.commit('setCurrentCourse', {
          ...course,
          extra: {
            ...course?.extra,
            training_types: map(course?.extra?.training_types, (value, key) => (value ? ({
              id: key,
              caption: key,
              value: key
            }) : undefined))
              .filter(identity)
          }
        });
        this.$store.commit('setPageTitle', course?.name);
      })
      .finally(() => {
        this.$store.commit('setLoadingStop');
      });
  },
  methods: {
    t(key) {
      return this.$t(`pages.${PAGE_NAMES.courseItem}.${key}`);
    },

    endCall() {
      actionEndCall(this.$store)();
    }
  },
  computed: {
    status() {
      return this.$store.getters.getStatus;
    },
    isLoading() {
      return this.$store.getters.getIsLoading;
    },
    course() {
      return this.$store.getters.getCurrentCourse;
    },
    dialogLogs() {
      return this.$store.getters.getDialogFlow;
    },
    helpPhrases() {
      return this.$store.getters.getNextHelpPhrases;
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

  &__process {
    display: flex;
    flex-wrap: wrap;
    row-gap: 20px;
    column-gap: 20px;
  }

  &__process-header {
    width: 100%;
  }

  &__process-content {
    row-gap: 20px;
    column-gap: 20px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  &__main {
    width: 100%;
  }

  &__bar {
    width: 100%;

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
    &__process-content {
      flex-wrap: nowrap;
    }
    &__main {
      width: calc(80% - 10px);
    }

    &__bar {
      width: calc(20% - 10px);
      min-width: 262px;
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
