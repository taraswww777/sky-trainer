<template>
  <div :class="bem()" class="help-panel--marg">
    <div :class="bem('header')">
      <div :class="bem('title')">
        Подсказки
      </div>
      <div :class="bem('checkbox-toggle')" class="checkbox-toggle">
        <label class="checkbox-toggle__label" @change="toggleIsShowHelpText">
          <input type="checkbox" value="{{isShowHelpText}}" checked="{{isShowHelpText && 'checked'}}" />

          <span class="checkbox-toggle__text">Включить подсказки</span>
        </label>
      </div>
    </div>
    <div :class="bem('text')" v-if="isShowHelpText">
      <ul>
        <li v-for="(item, index) in helpPhrases" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import useBem from 'vue3-bem';

const componentName = 'HelpPanel';
const bem = useBem(componentName);
export default {
  name: componentName,
  data: () => ({
    bem,
    isShowHelpText: true
  }),
  props: {
    helpPhrases: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    toggleIsShowHelpText() {
      this.isShowHelpText = !this.isShowHelpText;
    }
  }
};
</script>
<style lang="scss" scoped>
/* ;
@import '../../../../sass/colors'; */
@import "@sass/media";

.help-panel {
    background: rgba(255, 255, 255, 0.75);
    box-shadow: 0px 0px 44px rgba(0, 0, 0, 0.075);
    border-radius: 8px;
    padding: 18px 25px 32px;

  &--marg{
    margin-bottom: 18px;
  }

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        align-content: flex-start;
        flex-wrap: wrap;
        margin-top: -10px;
    }

    &__title {
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;

        color: #000;
        margin: 10px 20px 0 0;
    }

    &__checkbox-toggle {
        align-self: center;
        margin-top: 10px;
        line-height: 1;
    }

    &__text {
        margin-top: 15px;
        background: #EAEEF6;
        border-radius: 8px;
        padding: 10px 16px;
        position: relative;

        font-weight: 400;
        font-size: 13px;
        line-height: 16px;

        color: #313131;

        &::before {
            content: '';
            position: absolute;
            right: 15px;
            top: calc(100% - 2px);
            border: 6px solid transparent;
            border-top: 6px solid #EAEEF6;
            border-right: 6px solid #EAEEF6;
        }

        p {
            margin-bottom: 16px;
        }

        ul {
            margin-bottom: 16px;
            margin-left: 1.25rem;
        }

        & > *:last-child {
            margin-bottom: 0 !important;
        }
    }

  @media (min-width: $mb_middle) {
    &--marg{
      margin-bottom: 30px;
    }
  }
}

.checkbox-toggle {
    input[type=checkbox] {
        display: none;
    }

    &__label {
        display: inline-block;
        vertical-align: top;
        cursor: pointer;
        font-size: 12px;
        line-height: 14px;
        color: #717171;
    }

    &__text {
        padding-right: 36px;
        position: relative;
        display: block;

        &::before {
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            width: 28px;
            height: 14px;
            background: #F1F1F1;
            border-radius: 50px;
            transition: background .2s linear;
        }

        &::after {
            content: '';
            position: absolute;
            right: 14px;
            top: 0;
            width: 14px;
            height: 14px;
            background: #FFFFFF;
            border: 2px solid #06D6A0;
            border-radius: 50px;
            transition: right .2s linear;
        }
    }

    input[type=checkbox]:checked + &__text {
        &::before {
            background: #06D6A0;
        }

        &::after {
            right: 0;
        }
    }
}
</style>
