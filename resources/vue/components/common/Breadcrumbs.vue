<template>
    <div class="breadcrumbsWrapper">
        <ul class="breadcrumbs" v-if="crumbs">
            <li v-for="crumb in crumbs">
                <router-link v-if="crumb.url" :to="crumb.url">{{ crumb.title }}</router-link>
                <span v-else>{{ crumb.title }}</span>
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    props: {
        crumbs: {
            type: Array,
            default: []
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~foundation-sites/scss/foundation.scss';
@import '../../../sass/colors';

.breadcrumbsWrapper {
    text-transform: uppercase;
    font-size: 0.9rem;

    .breadcrumbs {
        margin: 0;
    }


    li {
        &:after {
            content: '';
            background-image: url(./arrow.svg);
            background-position: center center;
            display: inline-block;
            width: 12px;
            height: 12px;
            margin: 0 6px;
            background-repeat: no-repeat;
        }

        &:last-child {
            &:after {
                display: none;
            }
        }
    }

    a {
        color: $colorBrand;
    }
    span{
        color: $colorGray3;
    }
}
</style>
