import { triangleChecker } from './triangle-checker.mjs'

// Triangle Tools

// checking if it is equilateral
console.log(triangleChecker(2, 2, 2))
console.log('equilateral')

console.log(triangleChecker(10, 10, 10))
console.log('equilateral')

// checking if it is isosceles
console.log(triangleChecker(3, 4, 4))
console.log('isosceles')

console.log(triangleChecker(4, 3, 4))
console.log('isosceles')

console.log(triangleChecker(4, 4, 3))
console.log('isosceles')

console.log(triangleChecker(10, 10, 2))
console.log('isosceles')

// checking if it is scalene
console.log(triangleChecker(3, 4, 5))
console.log('scalene')

console.log(triangleChecker(10, 11, 12))
console.log('scalene')

console.log(triangleChecker(5, 4, 2))
console.log('scalene')

// checking if it is invalid
console.log(triangleChecker(0, 0, 0))
console.log('none')

console.log(triangleChecker(3, 4, -5))
console.log('none')

console.log(triangleChecker(1, 1, 3))
console.log('none')

console.log(triangleChecker(2, 4, 2))
console.log('none')
