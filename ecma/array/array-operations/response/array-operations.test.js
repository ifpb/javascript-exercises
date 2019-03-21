import { sum, product, sumOdds } from './array-operations.js';

describe('Array Operation', () => {
  test('adding values from [1, 2, 3]', () => {
    let values = [1, 2, 3];
    expect(sum(values)).toBe(6);
  });

  test('adding values from [2, 2, 2]', () => {
    let values = [2, 2, 2];
    expect(sum(values)).toBe(6);
  });

  test('adding values from [1, 2, 3, 4, 5, 6]', () => {
    let values = [1, 2, 3, 4, 5, 6];
    expect(sum(values)).toBe(21);
  });

  test('adding odd values from [1, 2, 3]', () => {
    let values = [1, 2, 3];
    expect(sumOdds(values)).toBe(4);
  });

  test('adding odd values from [2, 2, 2]', () => {
    let values = [2, 2, 2];
    expect(sumOdds(values)).toBe(0);
  });

  test('adding odd values from [1, 2, 3, 4, 5, 6]', () => {
    let values = [1, 2, 3, 4, 5, 6];
    expect(sumOdds(values)).toBe(9);
  });

  test('multiplying values from [1, 2, 3]', () => {
    let values = [1, 2, 3];
    expect(product(values)).toBe(6);
  });

  test('multiplying values from [2, 2, 2]', () => {
    let values = [2, 2, 2];
    expect(product(values)).toBe(8);
  });

  test('multiplying values from [1, 2, 3, 4, 5, 6]', () => {
    let values = [1, 2, 3, 4, 5, 6];
    expect(product(values)).toBe(720);
  });
});
