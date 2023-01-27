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
            <div class="wrapperMainMenu">
                <MainMenu :onClose="closeMenu"/>
            </div>
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
.wrapperMainMenuModal {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.75);
    width: 100%;
    height: 100%;
    z-index: 1;
}

.wrapperMainMenu {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 100%;
    max-width: 320px;
}
</style>
