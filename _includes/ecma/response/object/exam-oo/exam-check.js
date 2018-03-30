
class ExamCheck {
  constructor(answer, weight) {
    this.weight = weight
    this.answer = answer
  }
  
  grade(student) {
    return Object.keys(student)
      .reduce((total, q) => {
        return total + (student[q] === this.answer[q] ? this.weight[q] : 0)
      }, 0)
  }
}

export { ExamCheck }