import {isLogin} from "../vue-store/auth";
import {PAGE_NAMES} from "../constants";

export const checkAuth = (to, from, next) => {
    // TODO: Потенциальное место для улучшений
    //       https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
    if (!isLogin() && to.name !== PAGE_NAMES.login && to.name !== PAGE_NAMES.logout) {
        next({name: PAGE_NAMES.login});
    }
    next();
}
