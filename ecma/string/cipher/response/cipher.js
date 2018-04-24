
Array.prototype.rotate = function (n) {
  return this.slice(n, this.length).concat(this.slice(0, n));
}

function complent(rotate) {
  let complent = {}
  let inputChars = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let outputChars = inputChars.rotate(rotate)

  inputChars.forEach((char, index) => {
    complent[char.toLowerCase()] = outputChars[index].toLowerCase()
    complent[char.toUpperCase()] = outputChars[index].toUpperCase()
  })

  return complent
}

function rot(message, number=13) {
  let substitution = complent(number)

  return message
    .split('')
    .map(char => substitution[char] || char)
    .join('')
}

export { rot }
