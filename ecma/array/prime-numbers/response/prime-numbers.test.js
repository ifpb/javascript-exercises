import { primes } from './prime-numbers.js'

describe('Number Tools', () => {

  test('looking for the first 4 prime numbers', () => {
    expect(primes(4)).toEqual([2, 3, 5, 7])
  })

  test('looking for the first 6 prime numbers', () => {
    expect(primes(6)).toEqual([2, 3, 5, 7, 11, 13])
  })

  test('looking for prime numbers >= 2 and <= 10', () => {
    expect(primes(2, 10)).toEqual([2, 3, 5, 7])
  })

  test('looking for prime numbers >= 2 and <= 20', () => {
    expect(primes(2, 20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19])
  })

  test('looking for prime numbers >= 10 and <= 2', () => {
    expect(primes(10, 2)).toEqual([])
  })
})
