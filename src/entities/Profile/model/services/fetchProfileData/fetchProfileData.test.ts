import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';


const profileData = {
            username: 'admin',
            first: 'blabla',
            lastname: 'dili',
            age: 22,
            country: Country.Belarus,
            city: 'Minsk',
            currency: Currency.USD,
        }

describe('fetchProfileData.test', () => {

    test('success ', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: profileData }));
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profileData);
    });

    test('error ', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
      
    });
});
