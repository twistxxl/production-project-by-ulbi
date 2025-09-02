import axios from "axios";
import { AUTH_LOCALSTORAGE_KEY } from "shared/const/localstorage";

// const baseURL = __IS_DEV__ ? "http://localhost:8000" : "sexstudentki.com"


export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(AUTH_LOCALSTORAGE_KEY) || '',
    },
});
