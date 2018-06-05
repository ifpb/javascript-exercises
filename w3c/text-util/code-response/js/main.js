
const text = document.querySelector('textarea')

loadActions()

function loadActions() {
  const actions = Array.from(document.querySelectorAll('.btn'))
  for(const action of actions) {
    action.addEventListener('click', function(event) {
      const actionName = this.innerHTML.toLowerCase().replace(' ', '')
      text.value = formatter(text.value, actionName)
    })
  }
}

function formatter(text, action) {
  switch (action) {
    case 'lowercase':
      return text.toLowerCase()
    case 'uppercase':
      return text.toUpperCase()
    case 'capitalize':
      return toCamelCase(text)
    case 'snakecase':
      return text.replace(/\s/g, '_')
    case 'reverse':
      return text.split('').reverse().join('')
    case 'charactercount':
      return text.split('').length
    case 'wordcount':
      return text.split(/\s/g).length
    case 'linecount':
      return text.split('\n').length
    default:
      return text
  }
}

function toCamelCase(text) {
  let result = []
  for (let word of text.split(' ')) {
    let firstLetter = word[0].toUpperCase()
    let slicedWord = word.substr(1).toLowerCase()
    result.push(firstLetter + slicedWord)
  }
  return result.join(' ')
}