<template>
    <BasePage
        :isLoading="isLoading"
        :title=" course?.name"
        :crumbs="[
            {url:'/', title:'Гланая'},
            {title:'Все курсы', url: '/courses'}
        ]"
    >
        <div class="grid-x" :class="bem()">
            <div class="cell small-12 margin-bottom-1" :class="bem('notice')" v-if="false">
                <Notice>
                    Супер! Выбери тип занятия и выключи подсказки, если уверен в своих силах. На тренировке подсказки не
                    влияют на лояльность. В режиме обучения каждая подсказка будет отнимать очки лояльности. А на
                    экзамене
                    они будут недоступны. Вот так:)
                </Notice>
            </div>
            <StartPanel
                :onChangeStatus="onChangeStatus"
                v-if="status === STATUSES.new"
            />
            <div class="cell small-12" v-if="status === STATUSES.inProgress">
                <div
                    class="cell small-12 margin-top-1 margin-bottom-1 grid-x"
                    style="justify-content: space-between">
                    <button type="submit" class="button warning margin-bottom-0">
                        Завершить звонок
                    </button>
                    <div
                        class="grid-x align-middle align-right align-center-middle"
                        style="{flex-grow: 1; align-content: center}">
                        <TagList :tags="['Тренировка', 'Открытый Диалог']"/>
                    </div>
                </div>
                <div>
                    <HelpPanel :helpPhrases="helpPhrases"/>
                </div>
                <div>
                    <DialogPanel :dialogLogs="dialogLogs"/>
                </div>
            </div>
        </div>
    </BasePage>
</template>
<script>
import {requestCourseById} from "../../requests";
import useBem from "vue3-bem";
import DialogPanel from "./components/DialogPanel.vue";
import StartPanel from "./components/StartPanel.vue";
import {STATUSES} from "../../constants/common";

const componentName = 'CurrentCoursePage';

const bem = useBem(componentName);

export default {
    components: {
        DialogPanel,
        StartPanel
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
        requestCourseById(this.$route.params.courseId).then(({data}) => {
            this.$store.dispatch('setCurrentCourse', data);
        }).finally(() => {
            this.$store.dispatch('setLoadingStop');
        });
    },
    methods: {
        onChangeStatus(status) {
            this.status = status
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
@import '../../../../sass/colors';

.current-course-page {

    &__notice {

    }

    &__filter {
    }

    &__main {
    }
}
</style>
