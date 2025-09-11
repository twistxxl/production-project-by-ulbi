import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
    test('test with one param', () => {
        const params = getQueryParams({
            test: '123',
        });
        expect(params).toBe('?test=123');
    });

    test('test with multiple params', () => {
        const params = getQueryParams({
            test: '123',
            second: '1234',
        });
        expect(params).toBe('?test=123&second=1234');
    });
    test('test with param undefined', () => {
        const params = getQueryParams({
            test: '123',
            second: undefined,
        });
        expect(params).toBe('?test=123');
    });
});
