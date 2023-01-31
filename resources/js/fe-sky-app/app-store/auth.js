import {requestCurrentUser} from "../requests";
import {isString} from "lodash";

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
            }
            return false;
        })
    }
    return Promise.resolve(false);
}
