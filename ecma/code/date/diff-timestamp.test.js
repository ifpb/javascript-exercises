import { diffMonth } from './diff-timestamp.js'

describe('Date Tool', () => {
  test('calculating the difference between months', () => {
    let start = 1483239600000 // (new Date(2017, 0, 1)).getTime()
    let end   = 1496762425846 // Date.now()
    expect(diffMonth(start, end)).toBe(5)
  })
})
