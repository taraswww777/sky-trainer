<template>
    <div :class="bem()">
        <div :class="bem('spinner')">
            <Fa icon="spinner"/>
        </div>
    </div>
</template>
<script>
import useBem from 'vue3-bem';

const name = 'loader';
const bem = useBem(name);

export default {
  name,
  data: () => ({
    bem,
  }),
};
</script>
<style lang="scss" scoped>
@import 'foundation-sites/scss/foundation.scss';
@import '../../../../sass/colors';

.loader {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.7);
    width: 100%;
    height: 100%;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;

    &__spinner {
        line-height: 1;
        display: inline-block;
        animation: rotate 1.5s linear infinite;
    }

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }

}
</style>
