import { repeatedString, mirrorSequence, zeroMeansZero, numberOfLeds } from './stringUtil.mjs'

console.log(repeatedString('aba', 10)) 
console.log(7)

console.log(repeatedString('a', 1000000000000)) 
console.log(1000000000000)

console.log(mirrorSequence(1, 5))
console.log('1234554321')

console.log(mirrorSequence(10, 13))
console.log('1011121331211101')

console.log(mirrorSequence(98, 101))
console.log('98991001011010019989')

console.log(zeroMeansZero(7, 8))
console.log('15')

console.log(zeroMeansZero(15, 5))
console.log('2')

console.log(zeroMeansZero(99, 6))
console.log('15')

console.log(numberOfLeds('115380'))
console.log(27)

console.log(numberOfLeds('2819311'))
console.log(29)

console.log(numberOfLeds('23456'))
console.log(25)
