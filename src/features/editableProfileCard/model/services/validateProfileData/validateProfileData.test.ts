import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from 'entities/Profile';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';

const profileData = {
    username: 'admin',
    first: 'blabla',
    lastname: 'dili',
    age: 22,
    country: Country.Belarus,
    city: 'Minsk',
    currency: Currency.USD,
};

describe('fetchProfileData.test', () => {
    test('success ', async () => {
        const result = validateProfileData(profileData);

        expect(result).toEqual([]);
    });

    test('without fitrst or lastname ', async () => {
        const result = validateProfileData({ ...profileData, first: '', lastname: '' });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
    test('incorrect age ', async () => {
        const result = validateProfileData({ ...profileData, age: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });

    test('incorrect country ', async () => {
        const result = validateProfileData({ ...profileData, country: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });

    test('incorrect user data - undefined profile', async () => {
        const result = validateProfileData(undefined);
        expect(result).toEqual([
            ValidateProfileError.NO_USER_DATA,
        ]);
    });

    test('incorrect user data - empty object', async () => {
        const result = validateProfileData({} as Profile);
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
