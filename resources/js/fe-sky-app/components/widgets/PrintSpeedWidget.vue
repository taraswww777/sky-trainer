<template>
  <div :class="bem()">
    <h3 :class="bem('title')">
      Скорость печати
    </h3>
  </div>
</template>
<script>
import useBem from 'vue3-bem';

const name = 'PrintSpeedWidget';
const bem = useBem(name);

export default {
  name,
  data: () => ({
    bem
  })
};
</script>
<style lang="scss" scoped>
@import "../../../../sass/media";

.PrintSpeedWidget {

}
</style>
