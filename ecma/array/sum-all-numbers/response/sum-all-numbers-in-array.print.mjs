import { sumIntegerInArray } from './sum-all-numbers-in-array';

// the sum of a regular array
const regularArray = [1, 2, 3, 20];
console.log(sumIntegerInArray(regularArray)); // 26, which is (1 + 2 + 3 + 20)

// an array with 2 dimensions (2d)
const array2d = [[1, 3], [2, 2]];
console.log(sumIntegerInArray(array2d)); // 8, which is (1 + 3 + 2 + 2);

// with a totally random array of arrays
const randomArray = [2, [3, 4], [3, 1]];
console.log(sumIntegerInArray(randomArray)); // 13, which is (2 + 3 + 4 + 3 + 1)

// with empty arrays
const arrayWithEmptyArrays = [1, 3, [3, 2, []], [3], []];
console.log(sumIntegerInArray(arrayWithEmptyArrays)); // 12, which is (1 + 3 + 3 + 2 + 3)
