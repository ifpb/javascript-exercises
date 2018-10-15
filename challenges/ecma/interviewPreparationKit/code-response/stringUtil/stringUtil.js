function repeatedString(s, n) {
  const size = s.length
  const repeat = Math.floor(n / size)
  const remainder = n % size
  const count = s.split('a').length - 1
  const countRemainer = s.slice(0, remainder).split('a').length - 1
  return count * repeat + countRemainer
}

function mirrorSequence(a, b) {
  let temp = []
  for (var n = a; n <= b; n++) {
    temp.push(n);
  }
  const sequence = temp.join('')
  const mirror = sequence.split('').reverse().join('')
  return sequence + mirror
}

function zeroMeansZero(a, b) {
  let sum = (a + b).toString()
  while(sum.includes('0'))
    sum = sum.replace('0', '');
  return sum
}

function numberOfLeds(number) {
  const led = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6]
  const total = number.split('').reduce((t, l) => t + led[l], 0)
  return total
}

export {
  repeatedString,
  mirrorSequence,
  zeroMeansZero,
  numberOfLeds
}