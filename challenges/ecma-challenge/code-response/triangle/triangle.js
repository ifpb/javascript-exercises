
Array.prototype.uniq = function () {
  let uniq = []
  let values = this

  values.forEach(function (v) {
    if (!uniq.includes(v))
      uniq.push(v)
  })

  return uniq
}

class Triangle {
  constructor(a, b, c) {
    this.sides = [a, b, c]
    this.sides.sort()
  }

  isTriangle() {
    let hasSidesPositives = sides => sides.every(side => side > 0)

    let notViolateTriangle = sides => sides[0] + sides[1] > sides[2] ? true : false
    
    return notViolateTriangle(this.sides) && hasSidesPositives(this.sides)
  }

  kind() {
    let type = {
      1: 'equilateral',
      2: 'isosceles',
      3: 'scalene'
    }
    return type[this.sides.uniq().length]
  }
}

module.exports = Triangle
