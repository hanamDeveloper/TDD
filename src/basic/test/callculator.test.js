const { test } = require('@jest/globals');
const Calculator = require('../calculator');

describe('Calculator Test', () => {
    let Calculator1;
    beforeEach(() => {
        Calculator1 =  new Calculator()
    })

    test('default value', () => {
        expect(Calculator1.value).toBe(0)
    })

    test('add 1', () => {
        const num = 1;
        Calculator1.add(num);
        expect(Calculator1.value).toBe(num)
    })

    test('more then 100 should be throw error!', () => {
        const num = 1000;
        expect(() => Calculator1.add(num)).toThrow(Error)
    })

    test('clear', () => {
        Calculator1.set(20);
        Calculator1.clear();
        expect(Calculator1.value).toBe(0)
    })

    test('subtract', () => {
        const num = 2;
        Calculator1.subtract(num);
        expect(Calculator1.value).toBe(-2)
    })

    test('multiply', () => {
        const num = 5;
        Calculator1.set(20);
        Calculator1.multiply(num);
        expect(Calculator1.value).toBe(100)
    })

    describe('divide', () => {
        it('10 / 5', () => {
            Calculator1.set(10);
            Calculator1.divide(5);
            expect(Calculator1.value).toBe(2)
        })

        it('0 / 0 === NaN', () => {
            Calculator1.divide(0);
            expect(Calculator1.value).toBe(NaN)
        })
        
        it('1 / 0 === Infiinity', () => {
            Calculator1.set(1);
            Calculator1.divide(0);
            expect(Calculator1.value).toBe(Infinity)
        })
    })
})

