
Array.prototype.uniq = function () {
  let uniq = []
  let values = this

  values.forEach(function (v) {
    if (!uniq.includes(v))
      uniq.push(v)
  })

  return uniq
}

class WordFrequency {
  static frequency(message) {
    let frequency = {}
    message = message.toLowerCase()
    
    message.split('').uniq().forEach(char => {
      let count = message.split(char).length - 1
      if (frequency[count]) {
        frequency[count].push(char)
        frequency[count].sort()
      } else {
        frequency[count] = [char]
      }
    })

    return frequency
  }
}

export { WordFrequency }