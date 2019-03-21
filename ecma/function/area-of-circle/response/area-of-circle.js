// A = πr²

function areaOfCircle(radius) {
  return Math.PI * radius ** 2;
}

const areaOfCircleWithAnonymous = function(radius) {
  return Math.PI * radius ** 2;
};

const areaOfCircleWithArrow = radius => Math.PI * radius ** 2;

export { areaOfCircle, areaOfCircleWithAnonymous, areaOfCircleWithArrow };
