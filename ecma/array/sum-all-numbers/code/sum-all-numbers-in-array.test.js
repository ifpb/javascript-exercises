import { sumIntegerInArray } from './sum-all-numbers-in-array';

describe('Sum all integers in an Array', () => {
  test('Should return 0 for a empty array', () => {
    const array = [];
    expect(sumIntegerInArray([])).toEqual(0);
  });

  test.skip('For a regular array', () => {
    const regularArray = [1, 2, 3, 20];
    expect(sumIntegerInArray(regularArray)).toEqual(1 + 2 + 3 + 20);
  });

  test.skip('For a 2D array', () => {
    const array2d = [[1, 3], [2, 2]];
    expect(sumIntegerInArray(array2d)).toEqual(1 + 3 + 2 + 2);
  });

  test.skip('For a totally random array', () => {
    const randomArray = [2, [3, 4], [3, 1]];
    expect(sumIntegerInArray(randomArray)).toEqual(2 + 3 + 4 + 3 + 1);
  });

  test.skip('A random Array with empty arrays', () => {
    const arrayWithEmptyArrays = [1, 3, [3, 2, []], [3], []];
    expect(sumIntegerInArray(arrayWithEmptyArrays)).toEqual(1 + 3 + 3 + 2 + 3);
  });
});
