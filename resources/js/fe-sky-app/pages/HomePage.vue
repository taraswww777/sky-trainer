<template>
  <BaseTemplate>
    <div class="grid-x">
      <div class="cell small-12 medium-6">
        <UserCardWidget :userInfo="user"/>
      </div>
      <div class="cell small-12 medium-6">
        <ProgressWidget/>
      </div>
      <div class="cell small-12 medium-6">
        <GrammarErrorsWidget/>
      </div>
      <div class="cell small-12 medium-6">
        <ScriptMatchWidget/>
      </div>
      <div class="cell small-12 medium-6">
        <VoiceAnalysisWidget/>
      </div>
      <div class="cell small-12 medium-3">
        <ResponsibilityWidget/>
      </div>
      <div class="cell small-12 medium-3">
        <MistakesNegotiationsWidget/>
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

export default {
  components: {
    ProgressWidget,
    GrammarErrorsWidget,
    ScriptMatchWidget,
    VoiceAnalysisWidget,
    ResponsibilityWidget,
    MistakesNegotiationsWidget,
    UserCardWidget,
  },
  computed: {
    user() {
      return this.$store.getters.getCurrentUserInfo;
    },
  },
};
</script>
