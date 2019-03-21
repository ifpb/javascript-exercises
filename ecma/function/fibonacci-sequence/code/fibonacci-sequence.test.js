import { fibonacci } from './fibonacci-sequence.js';

describe('Fibonacci series', () => {
  test('making the first 0 numbers', () => {
    expect(fibonacci(0)).toBe('');
  });

  test.skip('making the first 1 numbers', () => {
    expect(fibonacci(1)).toBe('0');
  });

  test.skip('making the first 2 numbers', () => {
    expect(fibonacci(2)).toBe('0, 1');
  });

  test.skip('making the first 4 numbers', () => {
    expect(fibonacci(4)).toBe('0, 1, 1, 2');
  });

  test.skip('making the first 6 numbers', () => {
    expect(fibonacci(6)).toBe('0, 1, 1, 2, 3, 5');
  });
});
