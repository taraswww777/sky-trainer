<template>
  <BaseTemplate>
    <div class="main-section">
      <div class="main-section__top">
        <div class="main-section__top-col">
          <UserCardWidget :userInfo="user" />
        </div>
        <div class="main-section__top-col">
          <ProgressWidget />
        </div>
      </div>
      <div class="main-section__info">
        <div class="main-section__info-col">
          <!-- <GrammarErrorsWidget/> -->
          <MainInformationWidget />
        </div>
        <div class="main-section__info-col">
          <!-- <ScriptMatchWidget/> -->
          <MainInformationWidget />
        </div>
        <div class="main-section__info-col">
          <!-- <VoiceAnalysisWidget/> -->
          <MainInformationWidget />
        </div>
      </div>
      <div class="main-section__bot">
        <div class="main-section__bot-col">
          <VoiceAnalysis />
        </div>

        <div class="main-section__bot-col main-section__bot-col--flex">
          <div class="main-section__bot-block">
            <ResponsibilityWidget />
          </div>

          <div class="main-section__bot-block">
            <MistakesNegotiationsWidget />
          </div>
        </div>
      </div>
    </div>
  </BaseTemplate>
</template>
<script>
import ProgressWidget from '../components/widgets/ProgressWidget.vue';
import GrammarErrorsWidget from '../components/widgets/GrammarErrorsWidget.vue';
import UserCardWidget from '../components/widgets/UserCardWidget.vue';
import ScriptMatchWidget from '../components/widgets/ScriptMatchWidget.vue';
import VoiceAnalysisWidget from '../components/widgets/VoiceAnalysisWidget.vue';
import ResponsibilityWidget from '../components/widgets/ResponsibilityWidget.vue';
import MistakesNegotiationsWidget from '../components/widgets/MistakesNegotiationsWidget.vue';
import MainInformationWidget from '../components/widgets/MainInformationWidget.vue';
import VoiceAnalysis from '../components/widgets/VoiceAnalysis.vue';

export default {
  components: {
    ProgressWidget,
    ResponsibilityWidget,
    MistakesNegotiationsWidget,
    UserCardWidget,
    MainInformationWidget,
    VoiceAnalysis
  },
  computed: {
    user() {
      return this.$store.getters.getCurrentUserInfo;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@sass/media";

.main-section__top{
  margin-top: -20px;

  &-col{
    margin-top: 20px;
  }

  @media (min-width: $mb_middle) {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
    flex-wrap: wrap;

    margin: -30px 0 0 -24px;

    &-col{
      width: calc(100%/2 - 24px);
      margin: 30px 0 0 24px;
      min-width: 360px;
      flex-grow: 1;
    }

    &-col > *{
      min-height: 100%;
    }
  }

  @media (min-width: $mb_huge) {
    margin-left: -30px;

    &-col{
      width: calc(100%/2 - 30px);
      margin-left: 30px;
    }
  }
}

.main-section__info{
  &-col{
    margin-top: 20px;
  }

  @media (min-width: $mb_small) {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
    flex-wrap: wrap;

    margin-left: -24px;

    &-col{
      width: calc(100%/3 - 24px);
      margin: 30px 0 0 24px;
      min-width: 280px;
      flex-grow: 1;
    }

    &-col > *{
      min-height: 100%;
    }
  }

  @media (min-width: $mb_huge) {
    margin-left: -30px;

    &-col{
      width: calc(100%/3 - 30px);
      margin-left: 30px;
      min-width: 1px;
      flex-grow: 0;
    }
  }
}

.main-section__bot{
  &-col{
    margin-top: 20px;

    &--flex{
      margin-top: 0;

      & > *{
        padding-top: 20px;
      }
    }
  }

  @media (min-width: $mb_small) {
    &-col{
      &--flex{
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        align-content: stretch;
        flex-wrap: wrap;
        margin-top: 0;

        & > *{
          padding-top: 20px;
          min-height: 1px;
          width: calc(100%/2 - 10px);
        }
      }
    }

    &-block > *{
      min-height: 100%;
    }
  }

  @media (min-width: $mb_middle) {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
    flex-wrap: wrap;

    margin-left: -24px;

    &-col{
      width: calc(100%/2 - 24px);
      margin: 30px 0 0 24px;
      min-width: 450px;
      flex-grow: 1;

      &--flex{
        margin-top: 0;

        & > *{
          padding-top: 30px;
          min-height: 1px;
          width: calc(100%/2 - 12px);
        }
      }
    }

    &-col > *{
      min-height: 100%;
    }
  }

  @media (min-width: $mb_huge) {
    margin-left: -30px;

    &-col{
      width: calc(100%/2 - 30px);
      margin-left: 30px;
      min-width: 1px;
      flex-grow: 0;

      &--flex{
        margin-top: 0;

        & > *{
          width: calc(100%/2 - 15px);
        }
      }
    }
  }
}
</style>
