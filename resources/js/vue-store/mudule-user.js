import {MOCK_DATA_currentUser} from '../../mocked-data';

export const moduleUser = {
    state: {
        currentUserInfo: MOCK_DATA_currentUser
    },
    getters: {
        getCurrentUserInfo(state) {
            return state.currentUserInfo
        }
    },
    mutations: {
        // setToken(state, token) {
        //     sessionStorage.setItem('token', token);
        // }
    },
    actions: {
        // setToken({commit}, token) {
        //     // console.log('setToken:', state, payload)
        //     commit('setToken', token);
        // },
    }
};
