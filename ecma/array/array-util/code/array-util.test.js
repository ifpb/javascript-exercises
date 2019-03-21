import { min, max, range, zip, uniq, sortNum } from './array-util.js';

describe('Array Util', () => {
  test('finding lowest value in [1, 4, 2, 6, 10, 3]', () => {
    expect(min([1, 4, 2, 6, 10, 3])).toBe(1);
  });

  test.skip('finding lowest value in [1, 4, -1, 6, 10, 3]', () => {
    expect(min([1, 4, -1, 6, 10, 3])).toBe(-1);
  });

  test.skip('finding greatest value in [1, 4, 2, 6, 10, 3]', () => {
    expect(max([1, 4, 2, 6, 10, 3])).toBe(10);
  });

  test.skip('generating range of numbers from 0 to 10', () => {
    expect(range(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test.skip('generating range of numbers from 1 to 11', () => {
    expect(range(1, 11)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test.skip('generating range of numbers from 0 to 10 with steps', () => {
    expect(range(0, 30, 5)).toEqual([0, 5, 10, 15, 20, 25]);
  });

  test.skip("generating zip of ['moe', 'larry'] and [30, 40]", () => {
    expect(zip(['moe', 'larry'], [30, 40])).toEqual([['moe', 30], ['larry', 40]]);
  });

  test.skip("generating zip of ['moe', 'larry', 'curly'], [30, 40, 50] and [true, false, false]", () => {
    expect(zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false])).toEqual([
      ['moe', 30, true],
      ['larry', 40, false],
      ['curly', 50, false],
    ]);
  });

  test.skip('removing duplicate values in [1, 2, 1, 4, 1, 3]', () => {
    expect(uniq([1, 2, 1, 4, 1, 3])).toEqual([1, 2, 4, 3]);
  });

  test.skip('removing duplicate values in [1, 2, 1, 3, 3]', () => {
    expect(uniq([1, 2, 1, 3, 3])).toEqual([1, 2, 3]);
  });

  test.skip('sorting number values in [1, 3, 2]', () => {
    expect(sortNum([1, 3, 2])).toEqual([1, 2, 3]);
  });

  test.skip('sorting number values in [1, 2, 10, 3, 32]', () => {
    expect(sortNum([1, 2, 10, 3, 32])).toEqual([1, 2, 3, 10, 32]);
  });
});
