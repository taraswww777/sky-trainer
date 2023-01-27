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
            <div class="cell small-12 margin-bottom-1" :class="bem('notice')">
                <Notice>
                    Супер! Выбери тип занятия и выключи подсказки, если уверен в своих силах. На тренировке подсказки не
                    влияют на лояльность. В режиме обучения каждая подсказка будет отнимать очки лояльности. А на
                    экзамене
                    они будут недоступны. Вот так:)
                </Notice>
            </div>
            <form class="grid-x width-100" @submit="start" v-if="status === STATUSES.new">
                <div class="cell small-4">
                    <label>
                        Выберете тип тренировки
                        <select
                            class="margin-bottom-0"
                            v-if="course?.extra?.training_types"
                            v-model="training_type"
                            required
                        >
                            <option disabled value="">Select your training type</option>
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
                <div class="cell small-4">
                    <label>
                        Выберете стадию
                        <select
                            class="margin-bottom-0"
                            v-if="course?.extra?.stages"
                            v-model="stage"
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
                <div class="cell small-4">
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
            <div class="cell small-12">
                <!--            <div class="cell small-12" v-if="status === STATUSES.inProgress">-->
                <div
                    class="cell small-12 margin-top-1 margin-bottom-1 grid-x"
                    style="justify-content: space-between">
                    <button type="submit" class="button warning margin-bottom-0">
                        Завершить звонок
                    </button>
                    <div
                        class="grid-x align-middle align-right align-center-middle"
                        style="{flex-grow: 1; align-content: center}">
                        <TagList :tags="[training_type, stage, trainer]"/>
                    </div>
                </div>
                <div>
                    <HelpPanel
                        help-text="Дмитрий Сергеевич, Ранее Вы заполняли анкету на сайте Скайтрэйнер Банка для получения кредита
                    наличными верно?"/>
                </div>
                <div>
                    <DialogPanel

                    />
                </div>
                {{ JSON.stringify(dialog) }}
            </div>
        </div>
    </BasePage>
</template>
<script>
import {requestCourseById} from "../requests";
import useBem from "vue3-bem";
import {requestDialogStart} from "../requests";
import {DialogPanel} from "../components/dialog";

const bem = useBem("current-course-page");
const STATUSES = {
    new: 'new',
    inProgress: 'inProgress',
    done: 'done',
}

export default {
    components: {
        DialogPanel
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
        console.log('CurrentCoursePage.vue')
        this.$store.dispatch('setLoadingStart');
        requestCourseById(this.$route.params.courseId).then(({data}) => {
            this.$store.dispatch('setCurrentCourse', data);
        }).finally(() => {
            this.$store.dispatch('setLoadingStop');
        });
    },
    methods: {
        start(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('this.training_type:', this.training_type)
            console.log('this.stage:', this.stage)
            console.log('this.trainer:', this.trainer)
            this.$store.dispatch('setLoadingStart');
            this.status = STATUSES.inProgress;
            requestDialogStart({
                courseId: this.$route.params.courseId,
                phaseId: this.training_type,
                stageId: this.stage,
                trainerId: this.trainer,
            }).then(({data}) => {
                console.log(data)
                this.$store.dispatch('setCurrentDialog', data);
            }).finally(() => {
                this.$store.dispatch('setLoadingStop');
            });
        }
    },
    computed: {
        isLoading() {
            return this.$store.getters.getIsLoading
        },
        course() {
            return this.$store.getters.getCurrentCourse
        },
        dialog() {
            return this.$store.getters.getCurrentDialog
        }
    }
}
</script>
<style lang="scss" scoped>
@import 'foundation-sites/scss/foundation.scss';
@import '../../../sass/colors';

.current-course-page {

    &__notice {

    }

    &__filter {
    }

    &__main {
    }
}
</style>
