import { primes } from './prime-numbers.mjs'

// Number Tools

// looking for the first 4 prime numbers
console.log(primes(4))
console.log([2, 3, 5, 7])

// looking for the first 6 prime numbers
console.log(primes(6))
console.log([2, 3, 5, 7, 11, 13])

// looking for prime numbers >= 2 and <= 10
console.log(primes(2, 10))
console.log([2, 3, 5, 7])

// looking for prime numbers >= 2 and <= 20
console.log(primes(2, 20))
console.log([2, 3, 5, 7, 11, 13, 17, 19])

// looking for prime numbers >= 10 and <= 2
console.log(primes(10, 2))
console.log([])
