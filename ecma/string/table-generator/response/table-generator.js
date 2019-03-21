function createTable(rows, cols, text) {
  let result = '';
  text = text ? `${text} ` : '';

  for (let row = 1; row <= rows; row++) {
    for (let col = 1; col <= cols; col++) {
      result += `${text}${row}.${col}`;
      result += col === cols ? '\n' : ' ';
    }
  }

  return result;
}

function createTableHTML(rows, cols, text) {
  let result = '<table>\n';
  text = text ? `${text} ` : '';

  for (let row = 1; row <= rows; row++) {
    result += '  <tr>\n';
    let tds = [];
    for (let col = 1; col <= cols; col++) {
      tds.push(`    <td>${text}${row}.${col}</td>\n`);
    }
    result += tds.join('');
    result += '  </tr>\n';
  }

  result += '</table>\n';
  return result;
}

export { createTable, createTableHTML };
