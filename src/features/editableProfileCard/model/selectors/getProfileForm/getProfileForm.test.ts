import { StateSchema } from '@/app/providers/StoreProvider';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { getProfileForm } from './getProfileForm';

describe('getProfileError.test', () => {
    test('should return error', () => {
        const profileData = {
            username: 'admin',
            first: 'blabla',
            lastname: 'dili',
            age: 22,
            country: Country.Belarus,
            city: 'Minsk',
            currency: Currency.USD,
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                form: profileData,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(profileData);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
