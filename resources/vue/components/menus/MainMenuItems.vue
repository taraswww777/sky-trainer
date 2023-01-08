<template>
    <nav class="mainMenuItems">
        <ul class="menu vertical">
            <li>
                <router-link to="/" @click="onClose" active-class="active">
                    <img src="/logo.svg" alt="" class="icon">
                    Главная
                </router-link>
            </li>
            <li>
                <router-link to="/profile" @click="onClose" active-class="active">
                    <Fa :icon="['far','id-badge']"/>
                    Профиль
                </router-link>
            </li>
            <li>
                <router-link to="/top" @click="onClose" active-class="active">
                    <Fa icon="chart-pie"/>
                    Рейтинги
                </router-link>
            </li>
            <li>
                <router-link to="/courses" @click="onClose" active-class="active">
                    <Fa :icon="['far','folder-closed']"/>
                    Курсы
                </router-link>
                <ul class="list-none">
                    <li>
                        <router-link to="/courses/1" @click="onClose">Презентации</router-link>
                    </li>
                    <li>
                        <router-link to="/courses/2" @click="onClose">Звонки</router-link>
                    </li>
                    <li>
                        <router-link to="/courses/3" @click="onClose">Презентации</router-link>
                    </li>
                    <li>
                        <router-link to="/courses/4" @click="onClose">Встречи</router-link>
                    </li>
                </ul>
            </li>
            <li>
                <router-link
                    :to="{name: PAGE_NAMES.logout}"
                    @click="onClose"
                    active-class="active"
                >
                    <Fa icon="right-to-bracket"/>
                    Выход
                </router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
const {PAGE_NAMES} = require("../../../js/constants");
import {noop} from "lodash";

export default {
    data() {
        return {PAGE_NAMES}
    },
    props: {
        onClose: {
            type: Function,
            default: noop
        },
    }
}
</script>
<style lang="scss" scoped>
@import '~foundation-sites/scss/foundation.scss';
@import '../../../sass/colors';

.mainMenuItems {
    background: $colorGray6;
    height: 100%;
    width: 100%;
    padding: 20px 0;
}

.mainMenuItems .menu {
    margin: 0;

    a {
        font-size: 1.5rem;
        font-weight: 500;
        color: $colorBrand;
    }

    ul {
        list-style: none;

        a {
            font-weight: normal;
        }
    }

    .icon {
        height: 1.5rem;
        width: 1.5rem;
    }
}
</style>
