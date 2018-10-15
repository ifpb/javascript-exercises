
function spelling(word) {
  return word
          .split('')
          .filter(w => w !== ' ')
          .map(w => w.toUpperCase())
          .join('-')
}

export { spelling }