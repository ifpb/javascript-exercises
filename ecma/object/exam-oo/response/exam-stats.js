
class ExamStats {
  constructor(students) {
    this.students = students
  }

  avg() {
    let sum = this.students.reduce((sum, student) => sum + student.grade, 0)
    return sum / this.students.length
  }

  min(count = 1) {
    let grades = this.students.map(student => student.grade)
    grades.sort((a, b) => a - b)
    return grades.slice(0, count)
  }

  max(count = 1) {
    let grades = this.students.map(student => student.grade)
    grades.sort((a, b) => a - b)
    return grades.slice(-count)
  }

  lt(limit) {
    let grades = this.students.map(student => student.grade)
    grades.sort().reverse()
    return grades.filter(grade => grade < limit)
  }

  gt(limit) {
    let grades = this.students.map(student => student.grade)
    grades.sort().reverse()
    return grades.filter(grade => grade > limit)
  }
}

export { ExamStats }