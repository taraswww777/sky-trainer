import {axiosAuthGet} from './base';

export const requestCourses = () => (
  axiosAuthGet({
    url: '/courses',
  })
);

export const requestCourseById = (courseId) => (
  axiosAuthGet({
    url: `/courses/${courseId}`,
  })
);
