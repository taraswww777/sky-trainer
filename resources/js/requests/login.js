import {API_URL} from "./constants";

export const requestLogin = async ({email, password}) => (
    axios({
        params: {
            email: email,
            password: password,
        },
        method: 'post',
        baseURL: API_URL,
        url: '/sanctum/token'
    })
);
