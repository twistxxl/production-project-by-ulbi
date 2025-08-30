import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"
import { getLoginUsername } from "./getLoginUsername"

describe('getLoginUsername', () => {
    test('should return Username', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: 'admin'
            }
        }
        expect(getLoginUsername(state as StateSchema)).toEqual('admin')
    })
    test('should return Username', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginUsername(state as StateSchema)).toEqual('')
    })
})