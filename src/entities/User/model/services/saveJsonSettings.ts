import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { JsonSettings } from '../types/jsonSettings';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../selectors/getUserInited/jsonSettings';
import { setJsonSettingsMutation } from '../../api/userApi';

export const saveJsonSettings = createAsyncThunk<
    JsonSettings,
    JsonSettings,
    ThunkConfig<string>
>('user/saveJsonSettings', async (newJsonSettings, thunkApi) => {
    const { rejectWithValue, getState, dispatch } = thunkApi;
    const userData = getUserAuthData(getState());
    const currentJsonSettings = getJsonSettings(getState());

    if (!userData) {
        return rejectWithValue('no data');
    }
    const userId = userData.id;
    const jsonSettings = {
        ...currentJsonSettings,
        ...newJsonSettings,
    };

    try {
        const response = await dispatch(setJsonSettingsMutation({
            userId,
            jsonSettings,
        })).unwrap();

        if (!response.jsonSettings) {
            return rejectWithValue('error');
        }

        return response.jsonSettings;
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(`error: ${e}`);
        return rejectWithValue('error');
    }
});
