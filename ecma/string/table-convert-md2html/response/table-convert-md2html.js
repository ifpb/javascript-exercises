
function md2html(tableMd) {
  
  const rows = 
    tableMd
      .split('\n')
      .map(row => row.match(/\|(.*)\|(.*)\|/))

  const thead = [rows[0]]
    .map(head => head.slice(1).map(th => `      <th>${th.trim()}</th>`))
    .map(head => `    <tr>\n${head.join('\n')}\n    </tr>`)
    .join('\n')

  const tbody = rows
    .slice(2)
    .map(row => row.slice(1).map(td => `      <td>${td.trim()}</td>`))
    .map(row => `    <tr>\n${row.join('\n')}\n    </tr>`)
    .join('\n')

  return `<table>\n  <thead>\n${thead}\n  </thead>\n  <tbody>\n${tbody}\n  </tbody>\n</table>`
}

export { md2html }
