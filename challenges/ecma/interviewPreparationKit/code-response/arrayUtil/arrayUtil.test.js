import { rotLeft, stats, miniMaxSum, highestFrequency } from './arrayUtil.js'

describe('Array Utils', () => {

  test('performing 4 left rotations', () => {
    const arr = [1, 2, 3, 4, 5]
    const expected = [5, 1, 2, 3, 4]
    expect(rotLeft(arr, 4)).toEqual(expected)
  })

  test('performing 10 left rotations', () => {
    const arr = [41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51]
    const expected = [77, 97, 58, 1, 86, 58, 26, 10, 86, 51, 41, 73, 89, 7, 10, 1, 59, 58, 84, 77]
    expect(rotLeft(arr, 10)).toEqual(expected)
  })

  test('performing 13 left rotations', () => {
    const arr = [33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97]
    const expected = [87, 97, 33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60]
    expect(rotLeft(arr, 13)).toEqual(expected)
  })

  test('stats [-4, 3, -9, 0, 4, 1]', () => {
    const arr = [-4, 3, -9, 0, 4, 1]
    const expected = ['0.500000', '0.333333', '0.166667']
    expect(stats(arr)).toEqual(expected)
  })

  test('stats [1, 2, 3, -1, -2, -3, 0, 0]', () => {
    const arr = [1, 2, 3, -1, -2, -3, 0, 0]
    const expected = ['0.375000', '0.375000', '0.250000']
    expect(stats(arr)).toEqual(expected)
  })
  
  test('min and max of [1, 2, 3, 4, 5]', () => {
    const arr = [1, 2, 3, 4, 5]
    const expected = [10, 14]
    expect(miniMaxSum(arr)).toEqual(expected)
  })
  
  test('highest frequency of [1, 4, 4, 4, 5, 3]', () => {
    const arr = [1, 4, 4, 4, 5, 3]
    expect(highestFrequency(arr)).toBe(4)
  })

  test('highest frequency of [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]', () => {
    const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]
    expect(highestFrequency(arr)).toBe(3)
  })

})
