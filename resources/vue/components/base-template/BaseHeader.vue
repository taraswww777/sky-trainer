<template>
    <div class="grid-x">
        <div class="cell small-8 medium-1">
            <router-link to="/">
                <img src="/logo.svg" alt="logo">
            </router-link>
        </div>
        <div class="cell hide-for-small-only medium-4">
            <span class="iconCircleWrapper"><Fa icon="magnifying-glass"/></span>
        </div>
        <div class="cell hide-for-small-only medium-3">
            <span class="iconCircleWrapper"><Fa :icon="['far','clock']"/></span>
        </div>
        <div class="cell hide-for-small-only medium-3">
            <UserStatusWidget
                :userName="user.name"
                :userId="user.id"
            />
        </div>
        <div class="cell small-4 medium-1">
            <MobileMainMenu/>
        </div>
    </div>
</template>
<script>
import MOCK_DATA from '../../mocked-data.json';

export default {
    data() {
        return {
            user: MOCK_DATA.user
        }
    }
}
</script>
