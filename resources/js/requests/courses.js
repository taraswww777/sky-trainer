import axios from "axios";
import {API_URL} from "./constants";
import {getToken} from "../vue-store/auth";

export const requestCourses = () => (
    axios({
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${getToken()}`
        },
        method: 'get',
        baseURL: API_URL,
        url: '/courses'
    })
);
