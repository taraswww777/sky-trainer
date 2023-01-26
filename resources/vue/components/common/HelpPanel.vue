<template>
    <div :class="bem()" v-if="tags.length > 0">
        <div :class="bem('header')">
            <div :class="bem('title')">
                Подсказки
            </div>
            <div :class="bem('toggle')">
                <label>
                    Включить подсказки
                    <input type="checkbox" value="{{isShowHelpText}}"/>
                </label>
            </div>
        </div>
        <div :class="bem('text')">
            {{helpText}}
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
    }
}
</script>
<style lang="scss" scoped>
@import '~foundation-sites/scss/foundation.scss';
@import '../../../sass/colors';

.help-panel {
    display: flex;
    flex-wrap: wrap;
    width: 100%;


    &__item {
        background: $colorGray5;
        padding: 10px 18px;
        border-radius: 50px;
        color: $colorBrand;
        font-weight: bold;
        line-height: 1;

        & + & {
            margin-left: 10px;
        }
    }
}
</style>
