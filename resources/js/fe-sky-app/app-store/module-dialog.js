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
        getHelpPhrases(state) {
            return state.helpPhrases
        },
    },
    mutations: {
        pushDialog(state, dialogData) {
            state.dialogs.push(dialogData);
        },
        pushMessage(state, message) {
            state.messages.push(message);
        },
        setHelpPhrases(state, helpPhrases) {
            state.helpPhrases = helpPhrases;
        },
    },
    actions: {
        pushMessage({commit}, message) {
            commit('pushMessage', message);
        },
        setHelpPhrases({commit}, helpPhrases) {
            commit('setHelpPhrases', helpPhrases);
        },
        pushDialog({commit}, dialogData) {
            commit('pushDialog', dialogData);
        }
    }
};
