<template>
  <div :class="bem()">
    <h3 :class="bem('title')">
      Совпадение со скриптом
    </h3>
  </div>
</template>
<script>
import useBem from 'vue3-bem';

const name = 'ScriptMatchWidget';
const bem = useBem(name);

export default {
  name,
  data: () => ({
    bem
  })
};
</script>
<style lang="scss" scoped>
@import "@sass/media";

.ScriptMatchWidget {

}
</style>
