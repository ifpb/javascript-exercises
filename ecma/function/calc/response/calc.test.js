import { calc } from './calc.js';

describe('Calculator', () => {
  test('adding 1 + 1', () => {
    expect(calc(1, 1, '+')).toBe(2);
  });

  test('subtracting 1 - 1', () => {
    expect(calc(1, 1, '-')).toBe(0);
  });

  test('multiplying 1 * 1', () => {
    expect(calc(1, 1, '*')).toBe(1);
  });

  test('dividing 1 / 1', () => {
    expect(calc(1, 1, '/')).toBe(1);
  });
});
