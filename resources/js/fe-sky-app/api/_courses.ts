import {CourseDetailDto} from '@src/types/dto';
import {axiosAuthGet} from './_base';

export const getCourses = () => (
  axiosAuthGet<CourseDetailDto[]>({
    url: '/courses'
  })
);

export const getCourseById = (courseId: string | number) => (
  axiosAuthGet<CourseDetailDto>({
    url: `/courses/${courseId}`
  })
);
