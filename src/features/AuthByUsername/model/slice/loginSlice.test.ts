import { DeepPartial } from "@reduxjs/toolkit"
import { loginActions, loginReducer } from "./loginSlice"
import { LoginSchema } from "../types/loginSchema"

describe('loginSlice', () => {

    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'admin' }
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('123'))).toEqual({
            username: '123'
        })
    })

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: 'admin' }
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('123'))).toEqual({
            password: '123'
        })
    })

})