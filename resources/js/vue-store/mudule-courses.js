export const moduleCourses = {
    state: {
        courses: [],
        currentCourses: {}
    },
    getters: {
        getCourses(state) {
            return state.courses
        },
        getCurrentCourse(state) {
            return state.currentCourses
        },
    },
    mutations: {
        setCourses(state, courses) {
            state.courses = courses;
        },
        setCurrentCourse(state, courses) {
            state.currentCourses = courses;
        }
    },
    actions: {
        setCourses({commit}, courses) {
            commit('setCourses', courses);
        },
        setCurrentCourse({commit}, courses) {
            commit('setCurrentCourse', courses);
        }
    }
};
