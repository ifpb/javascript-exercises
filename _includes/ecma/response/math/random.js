function rand(min, max) {
  min = max ? min : 1
  max = max || min
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function randArray(array) {
  return array[rand(array.length - 1)]
}

export { rand, randArray }
