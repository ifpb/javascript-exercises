import { factorial } from './factorial.js';

describe('Number Tools', () => {
  test('calculating factorial of 1', () => {
    expect(factorial(1)).toBe(1);
  });

  test('calculating factorial of 2', () => {
    expect(factorial(2)).toBe(2);
  });

  test('calculating factorial of 3', () => {
    expect(factorial(3)).toBe(6);
  });

  test('calculating factorial of 4', () => {
    expect(factorial(4)).toBe(24);
  });
});
