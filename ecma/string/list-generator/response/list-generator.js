function createList(number, text = 'Text') {
  let result = '<ul>\n';
  for (let flag = 1; flag <= number; flag++) {
    result += `  <li>${text} ${flag}</li>\n`;
  }
  result += '</ul>';

  return result;
}

export { createList };
