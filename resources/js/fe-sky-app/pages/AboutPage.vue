<template>
  <BaseTemplate>
    <div>
      AboutPage
      <b>{{ title }}</b>
      <!--  Вот так обращаемся к props.children -->
      <slot />
    </div>
  </BaseTemplate>
</template>
<script>
export default {
};
</script>
