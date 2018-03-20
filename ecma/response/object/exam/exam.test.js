const exam = require('./exam')

describe('Exam Tool', () => {

  test('calculating grade by weighted average', () => {
    let student = {q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'b'}
    let weight =   {q1:  2 , q2:  2 , q3:  2 , q4:  2 , q5:  2 }
    let answer =   {q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd'}

    expect(exam.grade(student, weight, answer)).toBe(4)
  })

  test('calculating grade by weighted average', () => {
    let student = {q1: 'c', q2: 'b', q3: 'a', q4: 'c', q5: 'd'}
    let weight =   {q1:  2 , q2:  2 , q3:  2 , q4:  2 , q5:  2 }
    let answer =   {q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd'}

    expect(exam.grade(student, weight, answer)).toBe(8)
  })

  test('calculating exam values', () => {
    let students = [
      {"student": "Fulano", "grade": 10},
      {"student": "Sicrano", "grade": 5},
      {"student": "Beltrano", "grade": 7},
    ]

    expect(exam.avg(students)).toBe(7.333333333333333)

    expect(exam.min(students)).toEqual([5])
    expect(exam.min(students, 2)).toEqual([5, 7])

    expect(exam.max(students)).toEqual([10])

    expect(exam.lt(students, 6)).toEqual([5])

    expect(exam.gt(students, 6)).toEqual([7, 10])
  })

})
