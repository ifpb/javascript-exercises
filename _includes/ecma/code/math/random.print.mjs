import { rand, randArray } from './random.mjs'

// Random Util

// making random number >= 1 and <= 100
let value = rand(100)
console.log(value)
console.log('number >= 1 and <= 100')

// making random number >= 10 and <= 100
value = rand(10, 100)
console.log(value)
console.log('number >= 1 and <= 100')

// looking for some value in array [\'Fulano\', \'Beltrano\' , \'Sicrano\']
let names = ['Fulano', 'Beltrano' , 'Sicrano']
let name = randArray(names)
console.log(names.includes(name))
console.log(true)
