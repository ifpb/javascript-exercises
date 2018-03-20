/**
 * text: string
 * action: lowercase, uppercase, camelcase, snakecase, reverse,
 *         countchar, countword, countline
 */
function formatter(text, action) {
  switch (action) {
    case 'lowercase':
      return text.toLowerCase()
    case 'uppercase':
      return text.toUpperCase()
    case 'camelcase':
      return toCamelCase(text)
  }
}

function toCamelCase(text) {
  result = []
  for (let word of text.split(' ')) {
    let firstLetter = word[0].toUpperCase()
    let slicedWord = word.substr(1).toLowerCase()
    result.push(firstLetter+slicedWord)
  }
  return result.join(' ')
}

module.exports = formatter
