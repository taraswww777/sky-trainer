<template>
    <div>
        <button
            class="iconCircleWrapper"
            type="button"
            @click.prevent="openMenu"
        >
            <Fa icon="bars"/>
        </button>
        <div class="wrapperMainMenuModal" v-show="isOpen">
            <MainMenu :onClose="closeMenu"/>
        </div>
    </div>
</template>
<script>

export default {
    data: () => ({
        isOpen: false
    }),
    methods: {
        closeMenu() {
            this.isOpen = false;
        },
        openMenu() {
            this.isOpen = true;
        },
    }
}
</script>
<style lang="scss" scoped>
@import "../../../../sass/media";

.wrapperMainMenuModal {
    display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	align-content: flex-start;
	flex-wrap: wrap;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.75);
    width: 100%;
    height: 100%;
    z-index: 100;

	@media (min-width: $mb3) {
		width: 247px;
	}
}
</style>
