import {MOCK_DATA_currentUser} from '../../mocked-data';

export const moduleUser = {
    state: {
        currentUserInfo: MOCK_DATA_currentUser
    },
    getters: {
        getCurrentUserInfo(state) {
            return state.currentUserInfo
        }
    }
};
