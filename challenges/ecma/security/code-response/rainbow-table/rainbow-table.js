const md5 = require('./md5')
const Array = require('./array-combination')

class RainbowTable {
  constructor(length) {
    this.table(length)
  }

  table(length) {
    Array.letters().combination(length).forEach(combination => {
      this.table[md5(combination)] = combination
    })
  }

  cracker(hash) {
    return this.table[hash]
  }
}

export { RainbowTable }
