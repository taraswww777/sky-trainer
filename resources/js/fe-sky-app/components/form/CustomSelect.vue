<template>
    <div :class="bem()">
        <div :class="bem('placeholder', {active: isActive})" @click="onToggle">
            {{ options.find(({id}) => value === id).caption }}
        </div>

        <div :class="bem('list')" v-if="isOpen">
            <div :class="bem('scroll')">
        <div
          v-for="option in options"
                    :key="option.id"
          :class="bem('item',isSelected(option)?'selected':'')"
          @click="()=>onChange(option)"
        >
          <span>{{ option.caption }}</span>
        </div>
      </div>
        </div>
    </div>
</template>

<script>
import useBem from 'vue3-bem';
import {noop} from 'lodash';

const componentName = 'CustomSelect';
const bem = useBem(componentName);

export default {
  name: componentName,
  props: {
    options: {
      type: Array,
    },
    value: {
      type: String,
    },
    onChangeValue: {
      type: Function,
      default: noop,
    },
  },
  data: () => ({
    bem,
    isOpen: false,
    isActive: false,
  }),
  methods: {
    onChange(v) {
      this.isOpen = false;
      this.onChangeValue(v);
      this.isActive = false;
    },
    onToggle() {
      this.isOpen = !this.isOpen;
      this.isActive = !this.isActive;
    },
    isSelected(option) {
      return Boolean(this.value === option.id);
    },
  },

};
</script>

<style scoped lang="scss">
.custom-select {
    position: relative;

    &__placeholder{
        width: 100%;
    border: 1px solid #DEDEDE;
    cursor: pointer;
    border-radius: 50px;

    font-weight: 400;
    font-size: 13px;
    line-height: 46px;

    color: #29343E;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    padding: 0 49px 0 19px;
    position: relative;
    transition: border-color .2s linear;

    &::before{
      content: '';
      position: absolute;
      right: 19px;
      top: 50%;
      width: 10px;
      height: 8px;
      margin-top: -4px;
      background: url(../../../../img/ic_arrow2.svg) 50%/contain no-repeat;
    }
    }

  &__placeholder--active{
    border-color: #7156F8;
  }

    &__list {
        background: #FFFFFF;
    box-shadow: 0px 0px 44px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
        position: absolute;
        top: calc(100% + 17px);
        left: 0;
    z-index: 99;
        width: 100%;
  }

  &__scroll{
        max-height: 200px;
        overflow: hidden;
    overflow-y: auto;

    scrollbar-color: #EAEAEA #8C63F7;
    scrollbar-width: thin;

    &::-webkit-scrollbar
    {
      width: 5px;
      height: 5px;

      background-color: #EAEAEA;
    }

    &::-webkit-scrollbar-track
    {
      background-color: #EAEAEA;
    }

    &::-webkit-scrollbar-thumb
    {
      background-color: #8C63F7;
    }
  }

    &__item {
        padding: 4px 20px;
    font-size: 13px;
    line-height: 18px;

    color: #686868;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;

    min-height: 36px;
    cursor: pointer;
    transition: background .2s linear, color .2s linear;

    @media (any-hover: hover) {
      &:hover
      {
        color: #7156F8;
      }
    }
    }

  &__item:first-child{
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &__item:last-child{
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  &__item--selected{
    background: #EAEEF6;
    color: #313131;
  }
}
</style>
