import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../types/article';

export const fetchArticleById = createAsyncThunk<
    Article,
    string | undefined,
    ThunkConfig<string>
    >(
        'article/fetchArticleById',
        async (articleId, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                if (!articleId) {
                    throw new Error();
                }
                const response = await extra.api.get<Article>(`/articles/${articleId}`);
                if (!response.data) {
                    throw new Error();
                }
                return response.data;
            } catch (e) {
                // eslint-disable-next-line no-console
                console.log(`error: ${e}`);
                return rejectWithValue('error');
            }
        },
    );
