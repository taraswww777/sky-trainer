<template>
  <BaseTemplate>
    <div class="main-section">
		<div class="main-section__top">
			<div class="main-section__top-col">
				<UserCardWidget :userInfo="user"/>
			</div>
			<div class="main-section__top-col">
				<ProgressWidget/>
			</div>
		</div>
		<div class="main-section__info">
			<div class="main-section__info-col">
				<GrammarErrorsWidget/>
			</div>
			<div class="main-section__info-col">
				<ScriptMatchWidget/>
			</div>
			<div class="main-section__info-col">
				<VoiceAnalysisWidget/>
			</div>
		</div>
		<div class="main-section__bot">
			<div class="main-section__top-col">
				<ResponsibilityWidget/>
			</div>
			<div class="main-section__bot-col">
				<MistakesNegotiationsWidget/>
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

<style lang="scss" scoped>
@import "../../../sass/media";

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

		margin-left: -20px;

		&-col{
			width: calc(100%/2 - 20px);
			margin-left: 20px;
			min-width: 360px;
			flex-grow: 1;
		}

		&-col > *{
			min-height: 100%;
		}
	}
}

.main-section__info{
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

		margin-left: -20px;

		&-col{
			width: calc(100%/3 - 20px);
			margin-left: 20px;
			/* min-width: 360px;
			flex-grow: 1; */
		}

		&-col > *{
			min-height: 100%;
		}
	}
}

.main-section__bot{
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: flex-start;
	flex-wrap: wrap;

	grid-gap: 30px;
}
</style>
