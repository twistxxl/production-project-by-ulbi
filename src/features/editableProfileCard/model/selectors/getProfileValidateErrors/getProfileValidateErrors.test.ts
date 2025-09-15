import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';

describe('getProfileValidateErrors.test', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.NO_USER_DATA,
                    ValidateProfileError.INCORRECT_AGE,
                ],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.NO_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
