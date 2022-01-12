const check = require('../check')

describe('check', () => {
    let onSuccess;
    let onFail;

    beforeEach(() => {
        onSuccess = jest.fn();
        onFail = jest.fn();
    })

    it('Success case', () => {
        check(() => true, onSuccess, onFail);
        expect(onSuccess.mock.calls.length).toBe(1)
        expect(onSuccess).toHaveBeenCalledTimes(1)
        expect(onSuccess).toBeCalledWith('yes')
    })

    it('Fail case', () => {
        check(() => false, onSuccess, onFail);
        expect(onFail.mock.calls.length).toBe(1)
        expect(onFail).toHaveBeenCalledTimes(1)
        expect(onFail).toBeCalledWith('no')
    })
})