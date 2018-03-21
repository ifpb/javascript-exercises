import { grade, avg, min, max, gt, lt } from './exam.js'

describe('Exam Tool', () => {

  test('calculating grade by weighted average', () => {
    let student = {q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'b'}
    let weight =   {q1:  2 , q2:  2 , q3:  2 , q4:  2 , q5:  2 }
    let answer =   {q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd'}

    expect(grade(student, weight, answer)).toBe(4)
  })

  test('calculating grade by weighted average', () => {
    let student = {q1: 'c', q2: 'b', q3: 'a', q4: 'c', q5: 'd'}
    let weight =   {q1:  2 , q2:  2 , q3:  2 , q4:  2 , q5:  2 }
    let answer =   {q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd'}

    expect(grade(student, weight, answer)).toBe(8)
  })

  test('calculating exam values', () => {
    let students = [
      {"student": "Fulano", "grade": 10},
      {"student": "Sicrano", "grade": 5},
      {"student": "Beltrano", "grade": 7},
    ]

    expect(avg(students)).toBe(7.333333333333333)

    expect(min(students)).toEqual([5])
    expect(min(students, 2)).toEqual([5, 7])

    expect(max(students)).toEqual([10])

    expect(lt(students, 6)).toEqual([5])

    expect(gt(students, 6)).toEqual([7, 10])
  })

})
