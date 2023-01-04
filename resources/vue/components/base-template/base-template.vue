<template>
    <div class="container">
        <header class="row header">
            <div class="headerLogo">logo</div>
            <div class="search">search</div>
            <div class="time">time</div>
            <div class="user">user</div>
            <div class="menuToggle">menuToggle</div>
        </header>
        <main>
            Вот тут какойто контент
            <slot></slot>
        </main>
        <footer class="row footer">
            <div class="copyright">© 2022</div>
            <div class="links">
                <nav>
                    <ul>
                        <li><a href="#">О нас</a></li>
                        <li><a href="#">Поддержка</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    props: ['title'],
    data: () => ({
        title: ''
    }),
    mounted() {
        console.log('Example:mounted: this.$options', this.$options)
    }
}
</script>
<style lang="scss">
@import '~foundation-sites/scss/foundation.scss';
@import '../../../sass/colors';

.header, .footer {
    margin: 30px 0;
}

.headerLogo {
    @include xy-cell(2);
}

.search {
    @include xy-cell(3);
}

.time {
    @include xy-cell(3);
}

.user {
    @include xy-cell(3);
}

.menuToggle {
    @include xy-cell(1);
}

.copyright {
    @include xy-cell(4);
    color: $colorGray3;
}

.links {
    @include xy-cell(8);

    nav {
        width: 100%;

        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            width: 100%;
            justify-content: flex-end;
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
}
</style>
