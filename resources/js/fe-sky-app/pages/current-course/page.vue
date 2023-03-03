<template>
  <BaseTemplate>
    <BasePage
      :isLoading="isLoading"
      :title=" course?.name"
      :crumbs="[
      {url:'/', title:'Гланая'},
      {title:'Все курсы', url: '/courses'}
    ]"
    >
      <div :class="bem()">
        <StartPanel
          :onChangeStatus="onChangeStatus"
          v-if="status === STATUSES.new"/>

        <div :class="bem('flex _flex')" v-if="status === STATUSES.inProgress">
          <div :class="bem('coll')">
            <div :class="bem('top _flex')">
              <div :class="bem('top-box')">
                <TagList :tags="['Тренировка', 'Открытый Диалог']"/>
              </div>

              <button type="submit" :class="bem('top-btn')" class="btn-orange" @click="endCall">
                <span>{{ t('finishCall') }}</span>
              </button>
            </div>

            <HelpPanel :helpPhrases="helpPhrases"/>

            <DialogPanel :dialogLogs="dialogLogs"/>
          </div>

          <div :class="bem('colr')">
            <FunnelStage/>

            <SpeedSpeech/>

            <QualityControl/>
          </div>
        </div>
      </div>
    </BasePage>
  </BaseTemplate>
</template>
<script>
import useBem from 'vue3-bem';
import {requestCourseById} from '../../requests';
import {STATUSES} from '../../constants/common';
import {appRouter} from '../../app-router';
import {PAGE_NAMES} from '../../constants';
import DialogPanel from './components/DialogPanel.vue';
import StartPanel from './components/StartPanel.vue';
import SpeedSpeech from './components/SpeedSpeech.vue';
import QualityControl from './components/QualityControl.vue';
import FunnelStage from './components/FunnelStage.vue';

const name = 'CurrentCoursePage';

const bem = useBem(name);

export default {
  name,
  components: {
    DialogPanel,
    StartPanel,
    SpeedSpeech,
    QualityControl,
    FunnelStage
  },
  data: () => ({
    status: STATUSES.new,
    STATUSES,
    bem,
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
    }
  }
};
</script>
<style lang="scss" scoped>
/* ;
@import '../../../../sass/colors'; */
@import "../../../../sass/media";

.current-course-page {
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
