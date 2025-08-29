import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";
import { AUTH_LOCALSTORAGE_KEY } from "shared/const/localstorage";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    { rejectValue: string }>(
        'login/loginByUsername',
        async ({ username, password }, thunkAPI) => {
            try {
                const response = await axios.post<User>('http://localhost:8000/login', {
                    username,
                    password
                })
                if (!response.data) {
                    throw new Error()
                }
                thunkAPI.dispatch(userActions.setAuthData(response.data))
                localStorage.setItem(AUTH_LOCALSTORAGE_KEY, JSON.stringify(response.data))

                return response.data
            } catch (error) {
                console.log(error);
                return thunkAPI.rejectWithValue('Вы ввели неверный логин или пароль')
            }
        }
    )