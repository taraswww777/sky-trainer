<template>
  <div :class="bem() + ' cont-page'">
    <header :class="bem('header')">
      <BaseHeader />
    </header>

    <main :class="bem('main')">
      <slot />
    </main>

    <footer :class="bem('footer')">
      <BaseFooter />
    </footer>
  </div>
</template>

<style scoped lang="scss">
@import '@sass/mixins';
@import "@sass/media";

.base-template {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;

  &__header {
    width: 100%;
    position: relative;
  }

  &__main {
    width: 100%;
    margin-top: 22px;
    flex-grow: 1;
    position: relative;
  }

  &__footer {
    width: 100%;
    padding: 53px 0 30px;
    position: relative;

    @media (min-width: $mb_exlarge) {
      padding-bottom: 35px;
    }
  }
}

</style>
<script>
import useBem from 'vue3-bem';
import BaseHeader from './BaseHeader.vue';
import BaseFooter from './BaseFooter.vue';

const name = 'BaseTemplate';
const bem = useBem(name);

export default {
  name,
  components: {
    BaseHeader,
    BaseFooter
  },
  data: () => ({bem})
};
</script>
