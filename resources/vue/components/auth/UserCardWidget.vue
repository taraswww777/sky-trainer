<template>
    <div class="grid-x userCardWidget" v-if="userInfo">
        <div class="cell small-12 grid-x align-justify align-middle userLine">
            <div class="userName">
                {{ userInfo.name }}
                <router-link to="/auth/user/edit" class="iconWrapper margin-left-1">
                    <Fa icon="pen"/>
                </router-link>
            </div>
            <div class="userId">
                Ваш ID: <b>{{ userInfo.id }}</b>
                <img class="userPhoto margin-left-1" :src="userInfo.photoPath"/>
            </div>
        </div>
        <div class="cell small-12 userLine">
            <span class="iconWrapper margin-right-1">
                <Fa icon="envelope"/>
            </span>
            <router-link :to="`email:${userInfo.email}`" class="userEmail">
                {{ userInfo.email }}
            </router-link>
        </div>
        <div class="cell small-12 userLine">
            <span class="iconWrapper margin-right-1">
                <Fa icon="phone"/>
            </span>
            <router-link :to="`tel:${userInfo.phone}`" class="userPhone">
                {{ userInfo.phone }}
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    props: ['userInfo']
}
</script>
<style lang="scss" scoped>
@import '~foundation-sites/scss/foundation.scss';
@import '../../../sass/colors';

.userCardWidget {
    padding: 24px;
    background: $colorWhite;
    border-radius: 8px;
}

.userLine {
    border-bottom: 1px solid $colorGray6;
    padding: 15px 0;
}

.userName {
    color: $colorGray1;
    font-weight: bold;
    font-size: 1.5rem;
}

.userEmail, .userPhone {
    color: $colorGray1;
}

.userId {
}

.iconWrapper {
    color: $colorGray3;
    font-size: 1rem;
}

.userPhoto {
    border-radius: 50%;
    width: 40px;
    height: 40px;
}
</style>
