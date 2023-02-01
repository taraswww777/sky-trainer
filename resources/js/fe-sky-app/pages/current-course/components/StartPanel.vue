<template>
    <form :class="`${bem()} grid-x width-100` " @submit="start">
        <div class="cell small-4" v-if="false">
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
        <div class="cell small-4" v-if="false">
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
        <div class="cell small-4" v-if="false">
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
            <button type="submit" class="button primary">
                Начать звонок
            </button>
        </div>
    </form>
</template>
<script>
import useBem from "vue3-bem";
import {requestDialogStart} from "../../../requests";
import {STATUSES} from "../../../constants/common";

const componentName = 'StartPanel';

const bem = useBem(componentName);

export default {
    props: {
        status: {
            type: String
        },
        onChangeStatus: {
            type: Function
        }
    },
    data: () => ({
        STATUSES,
        bem,
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
@import 'foundation-sites/scss/foundation.scss';
@import '../../../../../sass/colors';

.start-panel {
}
</style>
