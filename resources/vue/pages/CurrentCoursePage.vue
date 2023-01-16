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
            <form class="grid-x" @submit="start">
                <div class="cell small-4">
                    Выберете тип тренировки
                    {{ course?.extra?.training_types }}
                </div>
                <div class="cell small-4">
                    Выберете стадию
                    <select v-if="course?.extra?.stages" v-model="stage" required>
                        <option disabled value="">Select your stage</option>
                        <option
                            v-for="stage in course.extra.stages"
                            :key="stage.id"
                            :value="stage.id"
                        >
                            {{ stage.caption }}
                        </option>
                    </select>
                </div>
                <div class="cell small-4">
                    Тип диалога
                    <select v-if="course?.available_trainers" v-model="trainer" required>
                        <option disabled  value="">Select your trainer</option>
                        <option
                            v-for="trainer in course.available_trainers"
                            :key="trainer.id"
                            :value="trainer.id"
                        >
                            {{ trainer.name }}
                        </option>
                    </select>
                </div>
                <div class="cell small-12 margin-top-1 margin-bottom-1">
                    <button type="submit" class="button primary">
                        Начать звонок
                    </button>
                </div>
            </form>
            <div class="cell small-12 ">
                <!--            {{ JSON.stringify(course) }}-->
            </div>
        </div>
    </BasePage>
</template>
<script>
import {requestCourseById} from "../../js/requests/courses";
import useBem from "vue3-bem";

const bem = useBem("current-course-page");

export default {
    data: () => ({
        bem,
        isLoading: false,
        stage: undefined,
        trainer: undefined
    }),
    mounted() {
        console.log('CurrentCoursePage.vue')
        this.isLoading = true;
        requestCourseById(this.$route.params.courseId).then(({data}) => {
            this.$store.dispatch('setCurrentCourse', data);
        }).finally(() => {
            this.isLoading = false;
        });
    },
    methods: {
        start(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('this.stage:', this.stage)
            console.log('this.trainer:', this.trainer)
        }
    },
    computed: {
        course() {
            return this.$store.getters.getCurrentCourse
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~foundation-sites/scss/foundation.scss';
@import '../../sass/colors';

.current-course-page {

    &__notice {

    }

    &__filter {
    }

    &__main {
    }
}
</style>
