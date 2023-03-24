<template>
  <div :class="bem()" v-if="crumbs">
    <div
      :class="bem('item')"
      v-for="crumb in crumbs"
      :key="crumb.url"
    >
      <router-link
        v-if="crumb.url"
        :to="crumb.url"
        :class="bem('url')"
      >{{ crumb.title }}
      </router-link>
      <span
        v-else
        :class="bem('title')"
      >{{ crumb.title }}</span>
    </div>
  </div>
</template>
<script>
import useBem from 'vue3-bem';

const name = 'CommonBreadcrumbs';
const bem = useBem(name);

export default {
  name,
  data: () => ({bem}),
  props: {
    crumbs: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@sass/_media.scss";

.common-breadcrumbs {
  margin-bottom: 10px;

  &__item {
    font-weight: 400;
    font-size: 11px;
    line-height: normal;
    text-transform: uppercase;
    display: inline;

    color: #767676;

    &:after {
      content: '';
      background: url(../../../../img/ic_arrow1.svg) 50%/contain no-repeat;
      display: inline-block;
      width: 4px;
      height: 8px;
      margin: 0 6px;
      position: relative;
      top: -.5px;
    }

    &:last-child {
      &:after {
        display: none;
      }
    }
  }

  a {
    color: #29343E;
    text-decoration: none;
    transition: color .2s linear;

    &:hover {
      color: #7458F8;
    }
  }
}
</style>
