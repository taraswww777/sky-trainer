<template>
    <div class="grid-x">
        <div class="cell small-12 medium-6">
            <UserCardWidget :userInfo="user"/>
        </div>
    </div>
</template>
<script>
import MOCK_DATA from '../mocked-data.json';

export default {
    data() {
        return {
            user: MOCK_DATA.user
        }
    }
}
</script>
