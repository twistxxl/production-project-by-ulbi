import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

describe('getProfileData.test', () => {
    test('should return data', () => {
        const profileData = {
            username: 'admin',
            first: 'blabla',
            lastname: 'dili',
            age: 22,
            country: Country.Belarus,
            city: 'Minsk',
            currency: Currency.USD,
        }

        const state: DeepPartial<StateSchema> = {
            profile: {
                data: profileData
            }
        };
        expect(getProfileData(state as StateSchema)).toEqual(profileData);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
