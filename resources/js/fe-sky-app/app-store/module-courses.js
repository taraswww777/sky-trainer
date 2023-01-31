import {map} from 'lodash';

export const moduleCourses = {
    state: {
        courses: [],
        currentCourse: {}
    },
    getters: {
        getCourses(state) {
            return state.courses
        },
        getCurrentCourse(state) {
            return state.currentCourse
        },
        getCurrentCourseId(state) {
            return state.currentCourse?.id
        },
    },
    mutations: {
        setCourses(state, courses) {
            state.courses = courses;
        },
        setCurrentCourse(state, course) {
            state.currentCourse = course;
        }
    },
    actions: {
        setCourses({commit}, courses) {
            commit('setCourses', courses);
        },
        setCurrentCourse({commit}, course) {
            commit('setCurrentCourse', {
                ...course,
                extra: {
                    ...course?.extra,
                    training_types: map(course?.extra?.training_types, (value, key) => ({
                        id: key,
                        caption: value,
                        value
                    }))
                }
            });
        }
    }
};
