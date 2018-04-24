import { primeFactors } from './prime-factors.js'

describe('Prime Factors', function () {
  test('returning an empty array for 1', function () {
    expect(primeFactors(1)).toEqual([])
  })

  test.skip('factoring 2', function () {
    expect(primeFactors(2)).toEqual([2])
  })

  test.skip('factoring 3', function () {
    expect(primeFactors(3)).toEqual([3])
  })

  test.skip('factoring 4', function () {
    expect(primeFactors(4)).toEqual([2, 2])
  })

  test.skip('factoring 6', function () {
    expect(primeFactors(6)).toEqual([2, 3])
  })

  test.skip('factoring 8', function () {
    expect(primeFactors(8)).toEqual([2, 2, 2])
  })

  test.skip('factoring 9', function () {
    expect(primeFactors(9)).toEqual([3, 3])
  })

  test.skip('factoring 27', function () {
    expect(primeFactors(27)).toEqual([3, 3, 3])
  })

  test.skip('factoring 625', function () {
    expect(primeFactors(625)).toEqual([5, 5, 5, 5])
  })

  test.skip('factoring 901255', function () {
    expect(primeFactors(901255)).toEqual([5, 17, 23, 461])
  })

  test.skip('factoring 93819012551', function () {
    expect(primeFactors(93819012551)).toEqual([11, 9539, 894119])
  })
})
