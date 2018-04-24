import { min, max, range, zip, uniq, sortNum } from './array-util.mjs'

// Array Util

// finding lowest value in [1, 4, 2, 6, 10, 3]
console.log(min([1, 4, 2, 6, 10, 3]))
console.log(1)

// finding lowest value in [1, 4, -1, 6, 10, 3]
console.log(min([1, 4, -1, 6, 10, 3]))
console.log(-1)

// finding greatest value in [1, 4, 2, 6, 10, 3]
console.log(max([1, 4, 2, 6, 10, 3]))
console.log(10)

// generating range of numbers from 0 to 10
console.log(range(10))
console.log([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

// generating range of numbers from 1 to 11
console.log(range(1, 11))
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

// generating range of numbers from 0 to 10 with steps
console.log(range(0, 30, 5))
console.log([0, 5, 10, 15, 20, 25])

// generating zip of [\'moe\', \'larry\'] and [30, 40]
console.log(zip(['moe', 'larry'], [30, 40]))
console.log([["moe", 30], ["larry", 40]])

// generating zip of [\'moe\', \'larry\', \'curly\'], [30, 40, 50] and [true, false, false]
console.log(zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]))
console.log([["moe", 30, true], ["larry", 40, false], ["curly", 50, false]])

// removing duplicate values in [1, 2, 1, 4, 1, 3]
console.log(uniq([1, 2, 1, 4, 1, 3]))
console.log([1, 2, 4, 3])

// removing duplicate values in [1, 2, 1, 3, 3]
console.log(uniq([1, 2, 1, 3, 3]))
console.log([1, 2, 3])

// sorting number values in [1, 3, 2]
console.log(sortNum([1, 3, 2]))
console.log([1, 2, 3])

// sorting number values in [1, 2, 10, 3, 32]
console.log(sortNum([1, 2, 10, 3, 32]))
console.log([1, 2, 3, 10, 32])
