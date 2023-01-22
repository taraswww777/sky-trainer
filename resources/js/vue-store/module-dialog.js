import {map} from 'lodash';

export const moduleDialog = {
    state: {
        history: [],
        current: {}
    },
    getters: {
        getHistory(state) {
            return state.history
        },
        getCurrent(state) {
            return state.current
        },
    },
    mutations: {
        setCurrent(state, dialog) {
            state.history.push(dialog);
            state.current = dialog;
        }
    },
    actions: {
        setCurrentDialog({commit}, dialog) {
            commit('setCurrent', dialog);
        }
    }
};
