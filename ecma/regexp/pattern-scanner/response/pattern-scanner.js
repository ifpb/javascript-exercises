
function scanDate(text) {
  const count = {}
  count.values = text.match(/(\d{2}\/){2}\d{4}|(\d{2}-){2}\d{4}|\d{4}(\/\d{2}){2}|\d{4}(-\d{2}){2}/g) || []
  count.values = count.values.map(date => {
    if (/\d{4}(-\d{2}){2}/.test(date)){
      return date
    } else if (/(\d{2}\/){2}\d{4}/.test(date)) {
      return date.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1')
    } else if (/(\d{2}-){2}\d{4}/.test(date)) {
      return date.replace(/(\d{2})-(\d{2})-(\d{4})/, '$3-$2-$1')
    } else if (/(\d{4}(\/\d{2}){2}/.test(date)) {
      return date.replace(/(\d{4})\/(\d{2})\/(\d{2})/, '$1-$2-$3')
    }
  })
  count.count = count.values.length
  return count
}

function scanCep(text) {
  const count = {}
  count.values = text.match(/\d{8}|\d{2}\.?\d{3}-\d{3}/g) || []
  count.count = count.values.length
  return count
}

export { scanDate, scanCep }
