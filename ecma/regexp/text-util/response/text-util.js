
String.prototype.toCamelCase = function() {
  const delimiters = this.match(/\s/g) || []
  const words = this.split(/\s/g).map(word => word[0].toUpperCase()+word.slice(1).toLocaleLowerCase())
  return words.reduce((camel, word, index) => camel + word + (delimiters[index] || ''), '')
}

String.prototype.toSnakeCase = function() {
  return this.replace(/\s/g, '_')
}

String.prototype.applyBold = function(text) {
  return this.replace(text, `<b>${text}</b>`)
}

export { String }
