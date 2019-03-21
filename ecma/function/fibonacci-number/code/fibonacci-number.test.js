import { fibonacci } from './fibonacci-number.js';

describe('Fibonacci series', () => {
  test('making the 0th number', () => {
    expect(fibonacci(0)).toBe(undefined);
  });

  test.skip('making the 1st numbers', () => {
    expect(fibonacci(1)).toBe(0);
  });

  test.skip('making the 2nd numbers', () => {
    expect(fibonacci(2)).toBe(1);
  });

  test.skip('making the 4th numbers', () => {
    expect(fibonacci(4)).toBe(2);
  });

  test.skip('making the 6th numbers', () => {
    expect(fibonacci(6)).toBe(5);
  });
});
