import {axiosPost} from "./base";

export const requestLogin = async ({email, password}) => (
    axiosPost({
        params: {
            email: email,
            password: password,
        },
        url: '/token'
    })
);
