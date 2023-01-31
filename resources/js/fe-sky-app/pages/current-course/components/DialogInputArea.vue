<template>
    <form :class="bem()" @submit="pushMessage">
        <button :class="bem('btn-rec')" type="button">
            <img src="./mic.svg">
        </button>
        <input
            :class="bem('textarea')"
            type="text"
            v-model="speechResult"
            placeholder="Введите фразу"/>
    </form>
</template>

<script>
import useBem from "vue3-bem";
import {requestDialogSpeechResult} from "../../../requests";

const componentName = 'DialogInputArea';
const bem = useBem(componentName);

export default {
    name: componentName,
    data: () => ({
        bem,
        speechResult: undefined
    }),
    computed: {
        courseId() {
            return this.$store.getters.getCurrentCourseId
        },
    },
    methods: {
        pushMessage() {
            console.log('this.outputMessage:', this.speechResult, this.courseId);
            requestDialogSpeechResult({
                courseId: this.courseId,
                speechResult: this.speechResult,
                // TODO: Убрать раздкод когда перейдём на распознавание голоса
                timing: 4100
            }).then(({data: {dialog_logs, next_phrases, dialog_end}}) => {
                this.speechResult = undefined;
                this.$store.dispatch('setDialogLogs', dialog_logs);
                this.$store.dispatch('setHelpPhrases', next_phrases?.phrases[0] || []);
                this.scrollToBottom();

                if (dialog_end) {
                    alert('Диалог заверщён');
                }
            })
        },
        scrollToBottom() {
            const container = document.querySelector("#DialogPanel__messages");
            container.scroll(0, container.scrollWidth || 0);
        }
    }
}
</script>

<style scoped lang="scss">
@import '../../../../../sass/mixins';

.dialog-input-area {
    width: 100%;
    padding: 25px 20px;
    background: #EAEEF6;
    display: flex;
    flex-wrap: nowrap;

    &__btn-rec {
        @include borderCircle;
        padding: 12px 13.5px;
        background: linear-gradient(45deg, #D485F1, #7156F8);
        cursor: pointer;
        width: fit-content;
        height: fit-content;
    }

    &__textarea {
        @include borderRadius;
        margin: 0 0 0 16px;
        padding: 10px 18px;
        color: #737373;
        min-height: 52px;
        resize: none;
        font-size: 13px;
        line-height: 1.1;
        flex-grow: 1;
    }
}
</style>
