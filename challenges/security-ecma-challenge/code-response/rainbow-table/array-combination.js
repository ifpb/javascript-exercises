// https://rosettacode.org/wiki/Combinations_with_repetitions#ES6

function combinationRepeted(elements, length) {
  return length ? (
    elements.length ? combinationRepeted(elements, length - 1).map(function (t) {
      return [elements[0]].concat(t);
    }).concat(combinationRepeted(elements.slice(1), length)) : []
  ) : [[]];
}

function combination(elements, length) {
  let result = []

  for(let flag = 1; flag <= length; flag++)
    result = result.concat(combinationRepeted(elements, flag))

  return result.map(combination => combination.join(''))
}

Array.prototype.combination = function (length) {
  return combination(this, length)
}

Array.letters = function() {
  return 'abcdefghijklmnopqrstuvwxyz'.split('')
}

module.exports = Array