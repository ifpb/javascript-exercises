import { primeFactors } from './prime-factors.mjs'

// Prime Factors

// returning an empty array for 1
console.log(primeFactors(1))
console.log([])

// factoring 2
console.log(primeFactors(2))
console.log([2])

// factoring 3
console.log(primeFactors(3))
console.log([3])

// factoring 4
console.log(primeFactors(4))
console.log([2, 2])

// factoring 6
console.log(primeFactors(6))
console.log([2, 3])

// factoring 8
console.log(primeFactors(8))
console.log([2, 2, 2])

// factoring 9
console.log(primeFactors(9))
console.log([3, 3])

// factoring 27
console.log(primeFactors(27))
console.log([3, 3, 3])

// factoring 625
console.log(primeFactors(625))
console.log([5, 5, 5, 5])

// factoring 901255
console.log(primeFactors(901255))
console.log([5, 17, 23, 461])

// factoring 93819012551
console.log(primeFactors(93819012551))
console.log([11, 9539, 894119])
