import { Calculator } from './calculator';

describe('Multiplication Tests --- ', () => {

    let testCandidate: Calculator;

    beforeEach(() => {
        testCandidate = new Calculator();
    });

    it('Adding two numbers', () => {
        expect(testCandidate.add(1, 2)).toEqual(3);
        expect(testCandidate.add(1, -2)).toEqual(-1);
        expect(testCandidate.add(-1, 2)).toEqual(1);
        expect(testCandidate.add(2, 2)).toEqual(4);
        expect(testCandidate.add(2, -2)).toEqual(0);
        expect(testCandidate.add(-2, 2)).toEqual(0);
    });

    it('Subtracting two numbers', () => {
        expect(testCandidate.sub(1, 2)).toEqual(-1);
        expect(testCandidate.sub(1, -2)).toEqual(3);
        expect(testCandidate.sub(-1, 2)).toEqual(-3);
        expect(testCandidate.sub(2, 2)).toEqual(0);
        expect(testCandidate.sub(2, -2)).toEqual(4);
        expect(testCandidate.sub(-2, 2)).toEqual(-4);
    });

    it('Multiplying two numbers', () => {
        expect(testCandidate.mul(1, 2)).toEqual(2);
        expect(testCandidate.mul(1, -2)).toEqual(-2);
        expect(testCandidate.mul(-1, 2)).toEqual(-2);
        expect(testCandidate.mul(2, 2)).toEqual(4);
        expect(testCandidate.mul(2, -2)).toEqual(-4);
        expect(testCandidate.mul(-2, 2)).toEqual(-4);
    });

    it('Divide two numbers', () => {
        expect(testCandidate.div(1, 2)).toEqual(0.5);
        expect(testCandidate.div(1, -2)).toEqual(-0.5);
        expect(testCandidate.div(-1, 2)).toEqual(-0.5);
        expect(testCandidate.div(2, 2)).toEqual(1);
        expect(testCandidate.div(2, -2)).toEqual(-1);
        expect(testCandidate.div(-2, 2)).toEqual(-1);
    });

    it('Remainder of two numbers', () => {
        expect(testCandidate.rem(1, 2)).toEqual(1);
        expect(testCandidate.rem(1, -2)).toEqual(1);
        expect(testCandidate.rem(-1, 2)).toEqual(-1);
        expect(testCandidate.rem(2, 2)).toEqual(0);
        expect(testCandidate.rem(2, -2)).toEqual(0);
    });
});
