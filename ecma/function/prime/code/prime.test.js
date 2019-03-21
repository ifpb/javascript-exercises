import { isPrime } from './prime.js';

describe('Number Tools', () => {
  test('checking if the number 2 is prime', () => {
    expect(isPrime(2)).toBe(true);
  });

  test.skip('checking if the number 3 is prime', () => {
    expect(isPrime(3)).toBe(true);
  });

  test.skip('checking if the number 4 is prime', () => {
    expect(isPrime(4)).toBe(false);
  });

  test.skip('checking if the number 5 is prime', () => {
    expect(isPrime(5)).toBe(true);
  });

  test.skip('checking if the number 6 is prime', () => {
    expect(isPrime(6)).toBe(false);
  });

  test.skip('checking if the number 7 is prime', () => {
    expect(isPrime(7)).toBe(true);
  });
});
