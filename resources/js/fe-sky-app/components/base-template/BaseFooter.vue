<template>
    <div class="grid-x">
        <div class="cell hide-for-small-only medium-3">© 2022</div>
        <div class="cell small-12 medium-9">
            <nav class="footerMenu">
                <ul>
                    <li>
                        <router-link to="/about">О нас</router-link>
                    </li>
                    <li>
                        <router-link to="/support">Поддержка</router-link>
                    </li>
                    <li>
                        <router-link to="/contacts">Контакты</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
@import 'foundation-sites/scss/foundation.scss';
@import '../../../../sass/colors';

.icon {
    display: inline-flex;
    width: 40px;
    height: 40px;
    background: $colorWhite;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
}

.copyright {
    color: $colorGray3;
}

.footerMenu {
    width: 100%;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        width: 100%;
        justify-content: flex-end;
        flex-wrap: wrap;
    }

    li {
        padding: 0;
        margin: 0 10px 0 0;

        &:last-child {
            margin-right: 0;
        }
    }

    a {
        padding: 10px;
        color: $colorGray3;
        text-decoration: none;
        position: relative;

        &:after {
            transition: 0.15s all ease;
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            height: 2px;
            background: $colorBrand;
            width: 0;
            transform: translateY(-100%);
        }

        &:hover {
            &:after {
                width: 100%;
            }
        }
    }
}
</style>
