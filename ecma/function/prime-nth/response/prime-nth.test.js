import { nthPrime } from './prime-nth.js';

describe('Number Tools', () => {
  test('looking for the first 4 prime number', () => {
    expect(nthPrime(4)).toBe(7);
  });

  test('looking for the first 6 prime number', () => {
    expect(nthPrime(6)).toBe(13);
  });
});
