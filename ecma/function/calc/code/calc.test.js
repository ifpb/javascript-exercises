import { calc } from './calc.js';

describe('Calculator', () => {
  test('adding 1 + 1', () => {
    expect(calc(1, 1, '+')).toBe(2);
  });

  test.skip('subtracting 1 - 1', () => {
    expect(calc(1, 1, '-')).toBe(0);
  });

  test.skip('multiplying 1 * 1', () => {
    expect(calc(1, 1, '*')).toBe(1);
  });

  test.skip('dividing 1 / 1', () => {
    expect(calc(1, 1, '/')).toBe(1);
  });
});
