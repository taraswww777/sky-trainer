<template>
    <div :class="bem()">
        <div :class="bem('header')">
            <div :class="bem('title')">
                Подсказки
            </div>
            <div :class="bem('toggle')">
                <label @change="toggleIsShowHelpText">
                    Включить подсказки
                    <input type="checkbox" value="{{isShowHelpText}}" checked="{{isShowHelpText && 'checked'}}"/>
                </label>
            </div>
        </div>
        <div :class="bem('text')" v-if="isShowHelpText">
            {{ helpText }}
        </div>
    </div>
</template>
<script>
import useBem from "vue3-bem";

const bem = useBem("help-panel");
export default {
    data: () => ({
        bem,
        isShowHelpText: true
    }),
    props: {
        helpText: {
            type: String,
            default: ''
        }
    },
    methods: {
        toggleIsShowHelpText() {
            this.isShowHelpText = !this.isShowHelpText;
        }
    }
}
</script>
<style lang="scss" scoped>
@import 'foundation-sites/scss/foundation.scss';
@import '../../../../sass/colors';

.help-panel {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background: #ffffff;
    padding: 20px 20px 20px 30px;
    border-radius: 8px;


    &__header {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    &__title {
        flex-grow: 1;
    }

    &__toggle {
        &, label, input {
            cursor: pointer;
        }

        input {
            padding-left: 10px;
            margin: 0;
        }
    }

    &__text {
        width: 100%;
        background: #EAEEF6;
        border-radius: 8px;
        padding: 10px 16px;
    }

}
</style>
