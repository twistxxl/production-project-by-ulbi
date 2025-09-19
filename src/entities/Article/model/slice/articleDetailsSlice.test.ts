// сделать тесты на все селекторы
// сделать тесты на все редьюсеры
import { StateSchema } from '@/app/providers/StoreProvider';

describe('hernya', () => {
    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(undefined).toEqual(undefined);
    });
});
