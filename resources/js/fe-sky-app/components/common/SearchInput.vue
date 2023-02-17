<template>
	<form :class="bem()">
		<input type="text" name="" value="" placeholder="Search" :class="bem('input')">
	</form>
</template>
<script>
import useBem from "vue3-bem";

const bem = useBem("search");

export default {
    data: () => ({
        bem
    })
}
</script>
<style lang="scss" scoped>
@import "../../../../sass/media";

.search
{
    width: 100%;
    margin-bottom: 9px;

	@media (min-width: $mb_large) {
		display: none;
	}

    &__input
    {
        color: #000;
        font: 14px 'Inter';

        display: block;

        width: 100%;
        height: 40px;
        margin: 0;
        padding: 0 15px 0 38px;

        border: 1px solid #E6E6E6;
        border-radius: 50px;
        background: #FFF url(../../../../img/ic_search.svg) 18px 50%/16px auto no-repeat;
        box-shadow: none;
    }
}
</style>
