<template>
    <div class="mainMenu grid-x">
        <div class="cell small-12 grid-x flex-nowrap">
            <div class="cell auto">
                <UserStatusWidget :userName="user.name" :userId="user.id"/>
            </div>
            <div class="cell small-2 text-right">
                <button
                    v-if="onClose"
                    class="iconCircleWrapper"
                    type="button"
                    @click.prevent="onClose"
                >
                    <Fa icon="xmark"/>
                </button>
            </div>
        </div>
        <div class="cell small-12">
            Search
        </div>
        <div class="cell small-12">
            <MainMenuItems :onClose="onClose"/>
        </div>
        <div class="cell small-12">
            time status
        </div>
        <div class="cell small-12">
            theme switcher
        </div>
    </div>
</template>
<script>
import {MOCK_DATA_currentUser} from '../../mocked-data';

export default {
    props: {
        onClose: Function,
    },
    data() {
        return {
            user: MOCK_DATA_currentUser
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~foundation-sites/scss/foundation.scss';
@import '../../../sass/colors';

.mainMenu {
    background: $colorGray6;
    height: 100%;
    width: 100%;
    padding: 20px;
    overflow: scroll;
}
</style>
