<template>
    <div class="grid-x">
        <div class="cell small-12 medium-6">
            <UserCardWidget :userInfo="user"/>
        </div>
    </div>
</template>
<script>
import {MOCK_DATA_currentUser} from '../mocked-data';

export default {
    data() {
        return {
            user: MOCK_DATA_currentUser
        }
    }
}
</script>
