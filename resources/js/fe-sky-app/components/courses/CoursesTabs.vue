<template>
    <ul class="coursesTabs">
        <template v-for="tab in tabs" :key="tab.id">
            <li v-if="tab.id===activeTabId" class="item is-active">{{ tab.title }}</li>
            <li v-else @click="()=>onChangeTab(tab.id)" class="item">{{ tab.title }}</li>
        </template>
    </ul>
</template>
<script>
import {noop} from 'lodash';

export default {
  props: {
    activeTabId: String,
    tabs: {
      type: Array,
      default: () => []
    },
    onChangeTab: {
      type: Function,
      default: noop
    }
  }
};
</script>
<style lang="scss" scoped>
;
@import '../../../../sass/colors';

.coursesTabs {
    display: flex;
    flex-wrap: nowrap;
    list-style: none;
    padding: 0;
    margin: 0;

    .item {
        background: $colorBgCard;
        border-radius: 8px;
        padding: 15px 24px;
        margin-right: 2rem;

        &:last-child {
            margin-right: 0;
        }

        &:hover {
            background: $colorBgActiveCard;
            cursor: pointer;
        }

        &.is-active {
            background: $colorBgActiveCard;
            cursor: default;
        }
    }
}
</style>
