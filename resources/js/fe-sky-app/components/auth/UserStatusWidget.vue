<template>
  <div :class="bem()">
    <div :class="bem('icon')">
      <!-- <span class="iconCircleWrapper"><Fa :icon="['far','user']"/></span> -->
      <img src="../../../../img/ic_user.svg" alt="">
    </div>
    <div :class="bem('box')">
      <div :class="bem('name userName')">{{ userName }}</div>
      <div :class="bem('id userId')">Ваш ID: {{ userId }}</div>
    </div>
  </div>
</template>
<script>
import useBem from 'vue3-bem';

const name = 'UserStatusWidget';

const bem = useBem(name);

export default {
  props: ['userName', 'userId'],
  data: () => ({bem})
};
</script>
<style lang="scss" scoped>
@import '@sass/mixins';

.user-status-widget
{
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;
    flex-wrap: nowrap;

    &__icon {
      @include iconCircleWrapper();
      flex-shrink: 0;

      margin-right: 10px;
      padding: 11px;
      box-shadow: 0px 0px 44px rgba(0, 0, 0, 0.1);
    }

    &__box
    {
        width: calc(100% - 50px);
        padding-top: 6px;
    }

    &__name
    {
        color: #29343E;
        font-size: 14px;
        font-weight: 500;
        line-height: normal;

        overflow: hidden;

        white-space: nowrap;
        text-overflow: ellipsis;
    }

    &__id
    {
        color: #29343E;
        font-size: 11px;
        font-weight: 400;
        line-height: normal;

        overflow: hidden;

        margin-top: .5px;

        white-space: nowrap;
        text-overflow: ellipsis;
    }
}
</style>
