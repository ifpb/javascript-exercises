const array = require('./array')

describe('Array Util', () => {

  test('finding lowest value in [1, 4, 2, 6, 10, 3]', () => {
    expect(array.min([1, 4, 2, 6, 10, 3])).toBe(1)
  })

  test('finding lowest value in [1, 4, -1, 6, 10, 3]', () => {
    expect(array.min([1, 4, -1, 6, 10, 3])).toBe(-1)
  })

  test('finding greatest value in [1, 4, 2, 6, 10, 3]', () => {
    expect(array.max([1, 4, 2, 6, 10, 3])).toBe(10)
  })

  test('generating range of numbers from 0 to 10', () => {
    expect(array.range(10))
      .toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  test('generating range of numbers from 1 to 11', () => {
    expect(array.range(1, 11))
      .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })

  test('generating range of numbers from 0 to 10 with steps', () => {
    expect(array.range(0, 30, 5))
      .toEqual([0, 5, 10, 15, 20, 25])
  })

  test('generating zip of [\'moe\', \'larry\'] and [30, 40]', () => {
    expect(array.zip(['moe', 'larry'], [30, 40]))
    .toEqual([["moe", 30], ["larry", 40]])
  })

  test('generating zip of [\'moe\', \'larry\', \'curly\'], [30, 40, 50] and [true, false, false]', () => {
    expect(array.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]))
      .toEqual([["moe", 30, true], ["larry", 40, false], ["curly", 50, false]])
  })

  test('removing duplicate values in [1, 2, 1, 4, 1, 3]', () => {
    expect(array.uniq([1, 2, 1, 4, 1, 3])).toEqual([1, 2, 4, 3])
  })

  test('removing duplicate values in [1, 2, 1, 3, 3]', () => {
    expect(array.uniq([1, 2, 1, 3, 3])).toEqual([1, 2, 3])
  })

})
