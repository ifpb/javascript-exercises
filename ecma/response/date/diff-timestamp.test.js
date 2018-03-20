const diffMonth = require('diff-timestamp')

describe('Date Tool', () => {
  test('calculating the difference between months', () => {
    let last = 1483239600000 // (new Date(2017, 0, 1)).getTime()
    let now  = 1496762425846 // Date.now()
    expect(diffMonth(last, now)).toBe(5)
  })
})
