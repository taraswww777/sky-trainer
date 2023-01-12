export const moduleCourses = {
    state: {
        courses: []
    },
    getters: {
        getCourses(state) {
            return state.courses
        }
    },
    mutations: {
        setCourses(state, courses) {
            state.courses = courses;
        }
    },
    actions: {
        setCourses({commit}, courses) {
            commit('setCourses', courses);
        }
    }
};
