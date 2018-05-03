
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

    let violateTriangle = sides => sides[0] + sides[1] <= sides[2]
    
    return !violateTriangle(this.sides) && hasSidesPositives(this.sides)
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

export { Triangle }
