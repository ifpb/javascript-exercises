import { grade, avg, min, max, gt, lt } from './exam.mjs'

// Exam Tool

// calculating grade by weighted average
let student = {q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'b'}
let weight =   {q1:  2 , q2:  2 , q3:  2 , q4:  2 , q5:  2 }
let answer =   {q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd'}

console.log(grade(student, weight, answer))
console.log(4)

// calculating grade by weighted average
let student = {q1: 'c', q2: 'b', q3: 'a', q4: 'c', q5: 'd'}
let weight =   {q1:  2 , q2:  2 , q3:  2 , q4:  2 , q5:  2 }
let answer =   {q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd'}

console.log(grade(student, weight, answer))
console.log(8)

// calculating exam values
let students = [
  {"student": "Fulano", "grade": 10},
  {"student": "Sicrano", "grade": 5},
  {"student": "Beltrano", "grade": 7},
]

console.log(avg(students))
console.log(7.333333333333333)

console.log(min(students))
console.log([5])
console.log(min(students, 2))
console.log([5, 7])

console.log(max(students))
console.log([10])

console.log(lt(students, 6))
console.log([5])

console.log(gt(students, 6))
console.log([7, 10])

