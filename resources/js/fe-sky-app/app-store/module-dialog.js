import {map} from 'lodash';

export const moduleDialog = {
    state: {
        messages: [],
        dialogs: []
    },
    getters: {
        getMessages(state) {
            return state.messages
        },
        getDialogsData(state) {
            return state.dialogs
        },
    },
    mutations: {
        pushDialog(state, dialogData) {
            state.dialogs.push(dialogData);
        },
        pushMessage(state, message){
            state.messages.push(message);
        }
    },
    actions: {
        pushMessage({commit}, message){
            commit('pushMessage', message);
        },
        pushDialog({commit}, dialogData) {
            commit('pushDialog', dialogData);
        }
    }
};
