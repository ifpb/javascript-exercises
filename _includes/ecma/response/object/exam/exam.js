
function grade(student, weight, answer) {
  return Object.keys(student)
    .reduce((total, q) => total + (student[q] === answer[q] ? weight[q] : 0), 0)
}

function avg(students) {
  let sum = students.reduce((sum, student) => sum + student.grade, 0)
  return sum / students.length
}

function min(students, count=1) {
  let grades = students.map(student => student.grade)
  grades.sort((a, b) => a - b)
  return grades.slice(0, count)
}

function max(students, count=1) {
  let grades = students.map(student => student.grade)
  grades.sort((a, b) => a - b)
  return grades.slice(-count)
}

function lt(students, limit) {
  let grades = students.map(student => student.grade)
  grades.sort().reverse()
  return grades.filter(grade => grade < limit)
}

function gt(students, limit) {
  let grades = students.map(student => student.grade)
  grades.sort().reverse()
  return grades.filter(grade => grade > limit)
}

export { grade, avg, min, max, gt, lt }