/**
 * text: string
 * action: lowercase, uppercase, camelcase, snakecase, reverse,
 *         countchar, countword, countline
 */
function formatter(text, action) {
  switch (action) {
    case 'lowercase':
      return text.toLowerCase();
    case 'uppercase':
      return text.toUpperCase();
    case 'camelcase':
      return toCamelCase(text);
    case 'snakecase':
      return text.replace(/\s/g, '_');
    case 'reverse':
      return text
        .split('')
        .reverse()
        .join('');
    case 'countchar':
      return text.split('').length;
    case 'countword':
      return text.split(/\s/g).length;
    case 'countline':
      return text.split('\n').length;
  }
}

function toCamelCase(text) {
  let result = [];
  for (let word of text.split(' ')) {
    let firstLetter = word[0].toUpperCase();
    let slicedWord = word.substr(1).toLowerCase();
    result.push(firstLetter + slicedWord);
  }
  return result.join(' ');
}

export { formatter };
