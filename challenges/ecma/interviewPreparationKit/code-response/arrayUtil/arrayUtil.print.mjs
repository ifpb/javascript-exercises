import { rotLeft, stats, miniMaxSum, highestFrequency } from './arrayUtil.mjs'

let arr = [1, 2, 3, 4, 5]
console.log(rotLeft(arr, 4))
console.log([ 5, 1, 2, 3, 4 ])

arr = [41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51]
console.log(rotLeft(arr, 10))
console.log([ 77, 97, 58, 1, 86, 58, 26, 10, 86, 51, 41, 73, 89, 7, 10, 1, 59, 58, 84, 77 ])

arr = [33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97]
console.log(rotLeft(arr, 13))
console.log([ 87, 97, 33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60 ])

console.log(stats([-4, 3, -9, 0, 4, 1])) 
console.log(['0.500000', '0.333333', '0.166667'])

console.log(stats([1, 2, 3, -1, -2, -3, 0, 0])) 
console.log(['0.375000', '0.375000', '0.250000'])

console.log(miniMaxSum([1, 2, 3, 4, 5])) 
console.log([ 10, 14 ])

console.log(highestFrequency([1, 4, 4, 4, 5, 3])) 
console.log(4)

console.log(highestFrequency([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])) 
console.log(3)
