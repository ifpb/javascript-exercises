import { triangleChecker } from './triangle-checker.js';

describe('Triangle Tools', () => {
  test('checking if it is equilateral', () => {
    expect(triangleChecker(2, 2, 2)).toBe('equilateral');
    expect(triangleChecker(10, 10, 10)).toBe('equilateral');
  });

  test.skip('checking if it is isosceles', () => {
    expect(triangleChecker(3, 4, 4)).toBe('isosceles');
    expect(triangleChecker(4, 3, 4)).toBe('isosceles');
    expect(triangleChecker(4, 4, 3)).toBe('isosceles');
    expect(triangleChecker(10, 10, 2)).toBe('isosceles');
  });

  test.skip('checking if it is scalene', () => {
    expect(triangleChecker(3, 4, 5)).toBe('scalene');
    expect(triangleChecker(10, 11, 12)).toBe('scalene');
    expect(triangleChecker(5, 4, 2)).toBe('scalene');
  });

  test.skip('checking if it is invalid', () => {
    expect(triangleChecker(0, 0, 0)).toBe('none');
    expect(triangleChecker(3, 4, -5)).toBe('none');
    expect(triangleChecker(1, 1, 3)).toBe('none');
    expect(triangleChecker(2, 4, 2)).toBe('none');
  });
});
