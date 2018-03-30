import { sum, product, sumOdds, addingMatrix, multiplyingMatrix } from './array-operations.js'

describe('Array Operation', () => {

  test('adding values from [1, 2, 3]', () => {
    let values = [1, 2, 3]
    console.log(sum(values))
    expect(sum(values)).toBe(6)
  })

  test('adding values from [2, 2, 2]', () => {
    let values = [2, 2, 2]
    expect(sum(values)).toBe(6)
  })

  test('adding values from [1, 2, 3, 4, 5, 6]', () => {
    let values = [1, 2, 3, 4, 5, 6]
    expect(sum(values)).toBe(21)
  })

  test('adding odd values from [1, 2, 3]', () => {
    let values = [1, 2, 3]
    expect(sumOdds(values)).toBe(4)
  })

  test('adding odd values from [2, 2, 2]', () => {
    let values = [2, 2, 2]
    expect(sumOdds(values)).toBe(0)
  })

  test('adding odd values from [1, 2, 3, 4, 5, 6]', () => {
    let values = [1, 2, 3, 4, 5, 6]
    expect(sumOdds(values)).toBe(9)
  })

  test('multiplying values from [1, 2, 3]', () => {
    let values = [1, 2, 3]
    expect(product(values)).toBe(6)
  })

  test('multiplying values from [2, 2, 2]', () => {
    let values = [2, 2, 2]
    expect(product(values)).toBe(8)
  })

  test('multiplying values from [1, 2, 3, 4, 5, 6]', () => {
    let values = [1, 2, 3, 4, 5, 6]
    expect(product(values)).toBe(720)
  })

  test('adding a matrix (2x2) by another matrix (2x2)', () => {
    let a = [[3, 8], [4, 6]]
    let b = [[4, 0], [1, -9]]
    expect(addingMatrix(a, b)).toEqual([[7, 8], [5, -3]])
  })

  test('adding a matrix (3x3) by another matrix (3x3)', () => {
    let a = [[3, 8, 3], [4, 6, -1], [3, 8, 3]]
    let b = [[4, 0, 5], [1, -9, 0], [3, 8, 3]]
    expect(addingMatrix(a, b)).toEqual([[7, 8, 8], [5, -3, -1], [6, 16, 6]])
  })

  test('multiplying a matrix (2x3) by another matrix (3x2)', () => {
    let a = [[1, 2, 3], [4, 5, 6]]
    let b = [[7, 8], [9, 10], [11, 12]]
    expect(multiplyingMatrix(a, b)).toEqual([[58, 64], [139, 154]])
  })

  test('multiplying a matrix (2x2) by another matrix (2x2)', () => {
    let a = [[1, 2], [3, 4]]
    let b = [[2, 0], [1, 2]]
    expect(multiplyingMatrix(a, b)).toEqual([[4, 4], [10, 8]])
  })

})
