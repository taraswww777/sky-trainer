<template>
  <div :class="bem()" v-if="userInfo">
    <div :class="bem('top _flex')">
      <div :class="bem('coll _flex')">
        <div :class="bem('name')">{{ userInfo.name }}</div>

        <router-link to="/auth/user/edit" :class="bem('edit')">
          <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.43743L9.5625 4.49993L11.4117 2.65073C11.464 2.59758 11.5264 2.55535 11.5952 2.52658C11.664 2.49774 11.7379 2.48291 11.8125 2.48291C11.8871 2.48291 11.961 2.49774 12.0298 2.52658C12.0986 2.55535 12.161 2.59758 12.2133 2.65073L15.3492 5.78664C15.4024 5.83903 15.4446 5.90137 15.4734 5.97018C15.5022 6.03898 15.517 6.11286 15.517 6.18743C15.517 6.262 15.5022 6.33588 15.4734 6.40469C15.4446 6.47349 15.4024 6.5359 15.3492 6.58823L13.5 8.43743Z" fill-opacity="0.1" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7458 6.98717L7.14775 15.5852C7.04226 15.6907 6.89918 15.7499 6.75 15.7499H3.375C3.375 15.7499 2.90901 15.7499 2.57951 15.4204C2.57951 15.4204 2.25 15.0909 2.25 14.6249L2.25 11.482C2.25 11.482 2.24922 11.2613 2.33382 11.0553C2.33382 11.0553 2.41842 10.8493 2.57549 10.6915L11.014 2.25297C11.014 2.25297 11.1695 2.09499 11.378 2.0077C11.378 2.0077 11.5865 1.92041 11.8125 1.92041C11.8125 1.92041 12.0385 1.92041 12.247 2.0077C12.247 2.0077 12.4555 2.09499 12.6141 2.25603L15.747 5.38891C15.747 5.38891 15.9049 5.54447 15.9922 5.75295C15.9922 5.75295 16.0795 5.96142 16.0795 6.18744C16.0795 6.18744 16.0795 6.41345 15.9922 6.62193C15.9922 6.62193 15.9058 6.82842 15.747 6.98597L15.7458 6.98717ZM14.9545 6.18744L14.9515 6.1844L11.8125 3.04541L11.8095 3.04847L3.375 11.4829V14.6249H6.517L14.9515 6.19047L14.9545 6.18744Z" />
            <path d="M13.102 8.83496L13.1023 8.83525C13.2077 8.94074 13.3508 9 13.5 9C13.6492 9 13.7923 8.94074 13.8977 8.83525C14.0032 8.72976 14.0625 8.58668 14.0625 8.4375C14.0625 8.28832 14.0032 8.14524 13.8977 8.03975L13.8975 8.03946L9.96031 4.10232C9.85476 3.99676 9.71168 3.9375 9.5625 3.9375C9.41332 3.9375 9.27024 3.99676 9.16475 4.10225C9.05926 4.20774 9 4.35082 9 4.5C9 4.64918 9.05926 4.79226 9.16475 4.89775L13.102 8.83496Z" />
            <path d="M15.1875 14.625H6.75C6.43934 14.625 6.1875 14.8768 6.1875 15.1875C6.1875 15.4982 6.43934 15.75 6.75 15.75H15.1875C15.4982 15.75 15.75 15.4982 15.75 15.1875C15.75 14.8768 15.4982 14.625 15.1875 14.625Z" />
          </svg>
        </router-link>
      </div>
      <div :class="bem('colr _flex')">
        <div :class="bem('id')">Ваш ID: <b>{{ userInfo.id }}</b></div>

        <div :class="bem('photo')">
          <img :src="userInfo.photoPath" />
        </div>
      </div>
    </div>
    <div :class="bem('items')">
      <div :class="bem('item _flex')">
        <div :class="bem('item-icon')">
          <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.6875 13.5V3.9375C1.6875 3.62684 1.93934 3.375 2.25 3.375H15.75C16.0607 3.375 16.3125 3.62684 16.3125 3.9375V13.5C16.3125 13.5 16.3125 13.966 15.983 14.2955C15.983 14.2955 15.6535 14.625 15.1875 14.625H2.8125C2.8125 14.625 2.34651 14.625 2.01701 14.2955C2.01701 14.2955 1.6875 13.966 1.6875 13.5ZM2.8125 13.5H15.1875V4.5H2.8125V13.5Z" />
            <path d="M2.6301 3.52285C2.52635 3.42775 2.39073 3.375 2.25 3.375C2.24185 3.375 2.23371 3.37518 2.22557 3.37553C2.07652 3.38201 1.93616 3.44743 1.83535 3.5574C1.74025 3.66115 1.6875 3.79677 1.6875 3.9375C1.6875 3.94565 1.68768 3.95379 1.68803 3.96193C1.69451 4.11098 1.75993 4.25134 1.8699 4.35215L8.6199 10.5396C8.83496 10.7368 9.16504 10.7368 9.3801 10.5396L16.1297 4.35249C16.2459 4.24595 16.3125 4.09517 16.3125 3.9375L16.3125 3.93282C16.3113 3.79371 16.2587 3.65996 16.1646 3.5574C16.0638 3.44743 15.9235 3.38201 15.7744 3.37553C15.7663 3.37518 15.7581 3.375 15.75 3.375L15.7474 3.37501C15.6076 3.37565 15.473 3.42836 15.3699 3.52285L9 9.36193L2.6301 3.52285Z" />
          </svg>
        </div>
        <router-link :to="`email:${userInfo.email}`" :class="bem('item-link')">
          {{ userInfo.email }}
        </router-link>
      </div>
      <div :class="bem('item _flex')">
        <div :class="bem('item-icon')">
          <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 7.5L12.4125 6.45L13.6125 5.25H9.75V3.75H13.6125L12.45 2.5875L13.5 1.5L16.5 4.5375L13.5 7.5ZM14.9625 15.75C13.35 15.75 11.7782 15.3905 10.2473 14.6715C8.71575 13.953 7.3595 13.003 6.1785 11.8215C4.997 10.6405 4.047 9.28425 3.3285 7.75275C2.6095 6.22175 2.25 4.65 2.25 3.0375C2.25 2.8125 2.325 2.625 2.475 2.475C2.625 2.325 2.8125 2.25 3.0375 2.25H6.075C6.25 2.25 6.40625 2.30625 6.54375 2.41875C6.68125 2.53125 6.7625 2.675 6.7875 2.85L7.275 5.475C7.3 5.65 7.297 5.80925 7.266 5.95275C7.2345 6.09675 7.1625 6.225 7.05 6.3375L5.23125 8.175C5.75625 9.075 6.41575 9.91875 7.20975 10.7062C8.00325 11.4937 8.875 12.175 9.825 12.75L11.5875 10.9875C11.7 10.875 11.847 10.7905 12.0285 10.734C12.2095 10.678 12.3875 10.6625 12.5625 10.6875L15.15 11.2125C15.325 11.25 15.4688 11.3342 15.5812 11.4653C15.6937 11.5967 15.75 11.75 15.75 11.925V14.9625C15.75 15.1875 15.675 15.375 15.525 15.525C15.375 15.675 15.1875 15.75 14.9625 15.75ZM4.51875 6.75L5.75625 5.5125L5.4375 3.75H3.76875C3.83125 4.2625 3.91875 4.76875 4.03125 5.26875C4.14375 5.76875 4.30625 6.2625 4.51875 6.75ZM11.2313 13.4625C11.7188 13.675 12.2157 13.8438 12.7222 13.9688C13.2282 14.0938 13.7375 14.175 14.25 14.2125V12.5625L12.4875 12.2062L11.2313 13.4625Z" />
          </svg>
        </div>
        <router-link :to="`tel:${userInfo.phone}`" :class="bem('item-link')">
          {{ userInfo.phone }}
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import useBem from 'vue3-bem';

const name = 'UserCatd';
const bem = useBem(name);

export default {
  name,
  data: () => ({
    bem
  }),
  props: {
    userInfo: {
      type: Object
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@sass/media";

.user-catd{
  padding: 22px;
  background: #FFFFFF;
  box-shadow: 0px 0px 44px rgba(0, 0, 0, 0.09);
  border-radius: 8px;

  &__top{
    align-content: center;
    align-items: center;
    flex-wrap: nowrap;

    justify-content: space-between;
  }

  &__coll{
    max-width: calc(100% - 170px);
    align-content: center;
    align-items: center;
    flex-wrap: nowrap;
  }

  &__name{
    font-weight: 600;
    font-size: 18px;
    line-height: normal;
    white-space: nowrap;
    max-width: calc(100% - 28px);
    overflow: hidden;
    text-overflow: ellipsis;

    color: #1C1C1C;
  }

  &__edit{
    width: 18px;
    height: 18px;
    margin-left: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;

    svg{
      display: block;
      max-width: 100%;
      max-height: 100%;
      fill: #A8A8A8;
    }

    @media (any-hover) {
      &:hover{
        svg{
          fill: #1C1C1C;
        }
      }
    }
  }

  &__colr{
    flex-shrink: 0;
    align-content: center;
    align-items: center;
    flex-wrap: nowrap;
  }

  &__id{
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    margin-right: 13px;
    color: #9D9D9D;
    white-space: nowrap;

    b{
      color: #1C1C1C;
    }
  }

  &__photo{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;

    img{
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__items{
    margin-top: 12px;
  }

  &__item{
    border-top: 1px solid #EFEFEF;
    padding-top: 14px;
    flex-wrap: nowrap;

    &-icon{
      width: 18px;
      height: 18px;
      margin-right: 12px;
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      flex-wrap: wrap;

      svg{
        display: block;
        max-width: 100%;
        max-height: 100%;
        fill: #A8A8A8;
      }
    }

    &-link{
      font-weight: 500;
      font-size: 13px;
      line-height: 16px;
      text-decoration: none;
      align-self: center;
      color: #1C1C1C;
    }
  }

  &__item + &__item{
    margin-top: 14px;
  }

  @media (min-width: $mb_middle) {
    padding: 24px;

    &__items{
      padding-bottom: 14px;
      border-bottom: 1px solid #EFEFEF;
    }
  }
}

/* .userCardWidget {
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
} */

</style>
