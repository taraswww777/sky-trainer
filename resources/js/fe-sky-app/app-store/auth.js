import {requestCurrentUser} from "../requests";
import {isString} from "lodash";
import {appRouter} from "../app-router";
import {PAGE_NAMES} from "../constants";

export const setToken = (token) => {
    localStorage.setItem('token', token);
}

export const getToken = () => {
    return localStorage.getItem('token');
}

export const removeToken = () => {
    localStorage.removeItem('token');
}

export const isLogin = () => {
    return Boolean(getToken())
}

export const refreshCurrentUser = (dispatch) => {
    if (isLogin()) {
        return requestCurrentUser().then(({data}) => {
            if (!isString(data)) {
                dispatch('setCurrentUserInfo', data)
                return true;
            } else {
                appRouter.push({name: PAGE_NAMES.logout})
            }
            return false;
        })
    }
    return Promise.resolve(false);
}
