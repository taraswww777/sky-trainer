<template>
  <div :class="bem()">
    <div :class="bem('flex _flex')">
      <div :class="bem('coll _flex')">
        <div :class="bem('logo')">
          <router-link to="/">
            <img src="../../../../img/logo_big.svg" alt="logo">
          </router-link>
        </div>

        <SearchInput :class="bem('search')"/>
      </div>

      <div :class="bem('colr _flex')">
        <TimeWidget :class="bem('time-block')"/>

        <UserStatusWidget v-if="user"
          :class="bem('head-user')"
          :userName="user.name"
          :userId="user.id"
        />

        <MobileMainMenu/>
      </div>
    </div>
  </div>
</template>
<script>
import useBem from 'vue3-bem';

const bem = useBem('header');

export default {
  data: () => ({
    bem
  }),
  computed: {
    user() {
      return this.$store.getters.getCurrentUserInfo;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../sass/media";

.header
{
  padding: 18px 0;

  @media (min-width: $mb_middle) {
    padding: 24px 0 28px;
  }

  &__flex{
    justify-content: space-between;
  }

  &__logo{
    a,
    img{
      display: block;
    }

    @media (min-width: $mb_exlarge) {
      display: none;
    }
  }

  &__search{
    display: none;

    @media (min-width: $mb_exlarge) {
      display: block;
    }
  }

  &__time-block.time-block
  {
    display: none;

    @media (min-width: $mb_middle) {
      margin-left: 31px;
      display: flex;
    }
  }

  &__head-user.head-user
  {
    display: none;

    @media (min-width: $mb_middle) {
      margin-left: 31px;
      display: flex;
    }
  }
}
</style>
