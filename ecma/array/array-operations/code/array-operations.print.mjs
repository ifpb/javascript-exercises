import { sum, product, sumOdds } from './array-operations.mjs'

// Array Operation

// adding values from [1, 2, 3]
let values = [1, 2, 3]
console.log(sum(values))
console.log(6)

// adding values from [2, 2, 2]
values = [2, 2, 2]
console.log(sum(values))
console.log(6)

// adding values from [1, 2, 3, 4, 5, 6]
values = [1, 2, 3, 4, 5, 6]
console.log(sum(values))
console.log(21)

// adding odd values from [1, 2, 3]
values = [1, 2, 3]
console.log(sumOdds(values))
console.log(4)

// adding odd values from [2, 2, 2]
values = [2, 2, 2]
console.log(sumOdds(values))
console.log(0)

// adding odd values from [1, 2, 3, 4, 5, 6]
values = [1, 2, 3, 4, 5, 6]
console.log(sumOdds(values))
console.log(9)

// multiplying values from [1, 2, 3]
values = [1, 2, 3]
console.log(product(values))
console.log(6)

// multiplying values from [2, 2, 2]
values = [2, 2, 2]
console.log(product(values))
console.log(8)

// multiplying values from [1, 2, 3, 4, 5, 6]
values = [1, 2, 3, 4, 5, 6]
console.log(product(values))
console.log(720)
