import { diffMonth } from './diff-timestamp.mjs'

// Date Tool

// calculating the difference between months
let last = 1483239600000 // (new Date(2017, 0, 1)).getTime()
let now  = 1496762425846 // Date.now()
console.log(diffMonth(last, now))
console.log(5)
