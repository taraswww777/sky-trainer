import {getCurrentUser} from './_current-user';
import {getCourseById, getCourses} from './_courses';
import {getDialogStart, postDialogSpeechResult} from './_dialog';

export const apiClient = {
  getCurrentUser,
  getCourses,
  getCourseById,
  getDialogStart,
  postDialogSpeechResult
};
