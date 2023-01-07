import {createStore} from 'vuex'
import {moduleUser} from "./mudule-user";
import {moduleCourses} from "./mudule-courses";

export const vueStore = createStore({
    modules: {
        moduleUser,
        moduleCourses
    }
});
