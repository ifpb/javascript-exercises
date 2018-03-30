import { substitution } from './simple-substitution.mjs'

// Basic Leet

// converting message to "lorem ipsum"
// https://simple.wikipedia.org/wiki/Leet
// http://www.robertecker.com/hp/research/leet-converter.php?lang=en

console.log(substitution('lorem ipsum', 'aegiost', '4361057'))
console.log('l0r3m 1p5um')

// Simple Substitution

// converting to basic leet

console.log(substitution('lorem ipsum', 'aegiost', '4361057'))
console.log('l0r3m 1p5um')

// converting to custom leet

console.log(substitution('senha secreta', 'aegiost', '!@#$%&*'))
console.log('&@nh! &@cr@*!')

