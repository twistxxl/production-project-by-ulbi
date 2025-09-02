import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { User, userActions } from "entities/User";
import { AUTH_LOCALSTORAGE_KEY } from "shared/const/localstorage";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>>(
        'login/loginByUsername',
        async ({ username, password }, thunkAPI) => {

            const {extra, dispatch, rejectWithValue} = thunkAPI

            try {
                const response = await extra.api.post<User>('/login', {
                    username,
                    password
                })
                if (!response.data) {
                    throw new Error()
                }
                dispatch(userActions.setAuthData(response.data))
                localStorage.setItem(AUTH_LOCALSTORAGE_KEY, JSON.stringify(response.data))

                extra.navigate('/about')
                return response.data
            } catch (error) {
                console.log(error);
                return rejectWithValue('Вы ввели неверный логин или пароль')
            }
        }
    )