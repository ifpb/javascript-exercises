import { sum } from './sum.js';

describe('Number Tools', () => {
  test('adding 1 + 2', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adding 3 + 2', () => {
    expect(sum(3, 2)).toBe(5);
  });
});
