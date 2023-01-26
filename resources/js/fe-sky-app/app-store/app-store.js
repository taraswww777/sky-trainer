import {createStore} from 'vuex'
import {moduleUser} from "./module-user";
import {moduleCourses} from "./module-courses";
import {moduleDialog} from "./module-dialog";
import {moduleLoadings} from "./module-loadings";

export const appStore = createStore({
    modules: {
        moduleUser,
        moduleCourses,
        moduleDialog,
        moduleLoadings
    }
});
