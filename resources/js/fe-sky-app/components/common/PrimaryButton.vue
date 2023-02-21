<template>
    <button :type="type" class="btn-purple-bg">
        <slot></slot>
    </button>
</template>
<script>
export default {
  props: {
    crumbs: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: 'button',
    },
  },
};
</script>
<style lang="scss">


.btn-purple-bg{
	background: linear-gradient(84.09deg, #D485F1 4.37%, #7156F8 94.11%);
	border-radius: 50px;

	padding: 0 25px;
	text-align: center;
	height: 48px;

	font: 14px/48px "Inter", Helvetica, Roboto, Arial, sans-serif;
	cursor: pointer;

	color: #FFFFFF;
	border: none;
	display: inline-block;
	vertical-align: top;
	text-decoration: none;
	position: relative;

	&::before{
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(84.09deg, #7156F8 4.37%, #D485F1 94.11%);
		border-radius: 50px;
		opacity: 0;
		transition: opacity .2s linear;
	}

	span{
		display: inline-block;
		vertical-align: top;
		padding-left: 29px;
		position: relative;

		&::before{
			content: '';
			position: absolute;
			left: 0;
			top: 50%;
			width: 16px;
			height: 16px;
			margin-top: -8px;
			background: url(../../../../img/ic_logout.svg) 50%/contain no-repeat;
		}
	}

	@media (any-hover: hover) {
		&:hover{
			&::before{
				opacity: 1;
			}
		}
	}
}

/* @import 'foundation-sites/scss/foundation.scss';
@import '../../../../sass/colors'; */

/* .primaryButton {
    &.button {
        border-radius: 2rem;
        padding: 1rem 1.5rem;
        margin: 0;

        &.primary {
            background: $colorWhite;
            border-color: $colorDarkPurple;
            color: $colorDarkPurple;

            a {
                color: $colorDarkPurple;
            }

            &:hover {
                color: $colorWhite;
                background: linear-gradient(84.09deg, $colorPurple 4.37%, $colorDarkPurple 94.11%);

                a {
                    color: $colorWhite;
                }
            }
        }
    }
} */
</style>
