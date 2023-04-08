import {Module} from 'vuex';
import {CourseDetailDto} from '@src/types/dto';

export interface ModuleCoursesState {
  courses: CourseDetailDto[]
  currentCourse?: CourseDetailDto
}

export const moduleCourses: Module<ModuleCoursesState, any> = {
  state: {
    courses: [],
    currentCourse: undefined
  },
  getters: {
    getCourses(state) {
      return state.courses;
    },
    getCurrentCourse(state) {
      return state.currentCourse;
    },
    getCurrentCourseId(state) {
      return state.currentCourse?.id;
    }
  },
  mutations: {
    setCourses(state, courses) {
      state.courses = courses;
    },
    setCurrentCourse(state, course) {
      state.currentCourse = course;
    }
  }
};
