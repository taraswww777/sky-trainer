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
        getCurrentDialog(state) {
            return state.current
        },
    },
    mutations: {
        setCurrentDialog(state, dialog) {
            state.history.push(dialog);
            state.current = dialog;
        }
    },
    actions: {
        setCurrentDialog({commit}, dialog) {
            commit('setCurrentDialog', dialog);
        }
    }
};
