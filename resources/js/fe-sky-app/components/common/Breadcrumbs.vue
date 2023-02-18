<template>
    <!-- <div class="breadcrumbsWrapper"> -->
	<div class="breadcrumbs" v-if="crumbs">
		<div v-for="crumb in crumbs" class="breadcrumbs__item">
			<router-link v-if="crumb.url" :to="crumb.url">{{ crumb.title }}</router-link>
			<span v-else>{{ crumb.title }}</span>
		</div>
	</div>
    <!-- </div> -->
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
/* @import 'foundation-sites/scss/foundation.scss';
@import '../../../../sass/colors';

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
} */

@import "../../../../sass/media";

.breadcrumbs{
	margin-bottom: 10px;

	&__item{
		font-weight: 400;
		font-size: 11px;
		line-height: normal;
		text-transform: uppercase;
		display: inline;

		color: #767676;

		&:after {
            content: '';
            background: url(../../../../img/ic_arrow1.svg) 50%/contain no-repeat;
            display: inline-block;
            width: 4px;
            height: 8px;
            margin: 0 6px;
			position: relative;
			top: -.5px;
        }

        &:last-child {
            &:after {
                display: none;
            }
        }
	}

	a{
		color: #29343E;
		text-decoration: none;
		transition: color .2s linear;

		&:hover{
			color: #7458F8;
		}
	}
}
</style>
