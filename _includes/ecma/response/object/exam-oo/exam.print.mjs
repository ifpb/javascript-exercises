import { ExamCheck } from './exam-check.mjs'
import { ExamStats } from './exam-stats.mjs'

// Exam Tool

// calculating grade by weighted average
let weight =   {q1:  2 , q2:  2 , q3:  2 , q4:  2 , q5:  2 }
let answer =   {q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd'}
let examCheck = new ExamCheck(answer, weight)

let student = {q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'b'}
console.log(examCheck.grade(student))
console.log(4)

// calculating grade by weighted average
let weight =   {q1:  2 , q2:  2 , q3:  2 , q4:  2 , q5:  2 }
let answer =   {q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd'}
let examCheck = new ExamCheck(answer, weight)

let student = {q1: 'c', q2: 'b', q3: 'a', q4: 'c', q5: 'd'}
console.log(examCheck.grade(student))
console.log(8)

// calculating exam values
let examStats = new ExamStats([
  { "student": "Fulano", "grade": 10 },
  { "student": "Sicrano", "grade": 5 },
  { "student": "Beltrano", "grade": 7 },
])

console.log(examStats.avg())
console.log(7.333333333333333)

console.log(examStats.min())
console.log([5])
console.log(examStats.min(2))
console.log([5, 7])

console.log(examStats.max())
console.log([10])

console.log(examStats.lt(6))
console.log([5])

console.log(examStats.gt(6))
console.log([7, 10])
