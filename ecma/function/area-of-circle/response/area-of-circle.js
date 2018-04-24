// A = πr²

function areaOfCircle(radius) {
  return Math.PI * radius ** 2
}

let areaOfCircleWithAnonymous = function (radius) {
  return Math.PI * radius ** 2
}

let areaOfCircleWithArrow = (radius) => Math.PI * radius ** 2

export { areaOfCircle, areaOfCircleWithAnonymous, areaOfCircleWithArrow }
