import {getCurrentUser} from './_current-user';
import {getCourseById, getCourses} from './_courses';

export const apiClient = {
  getCurrentUser,
  getCourses,
  getCourseById
};
