class School {

  constructor() {
    this.grades = {}
  }

  roster() {
    return this.grades
  }

  add(student, grade) {
    if (this.grades[grade]){
      this.grades[grade].push(student)
      this.grades[grade].sort()
    } else {
      this.grades[grade] = [student]
    }
  }

  grade(grade) {
    return this.grades[grade] || []
  }
}

export { School }
