import {MOCK_DATA_products} from '../../mocked-data';

export const moduleCourses = {
    state: {
        courses: MOCK_DATA_products
    },
    getters: {
        getCourses(state) {
            return state.courses
        }
    }
};
