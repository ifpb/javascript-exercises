import { rand, randArray } from './random.js'

describe('Random Util', () => {
  test('making random number >= 1 and <= 100', () => {
    let value = rand(100)
    expect(value).toBeGreaterThanOrEqual(1)
    expect(value).toBeLessThanOrEqual(100)
  })

  test('making random number >= 10 and <= 100', () => {
    let value = rand(10, 100)
    expect(value).toBeGreaterThanOrEqual(10)
    expect(value).toBeLessThanOrEqual(100)
  })

  test('looking for some value in array [\'Fulano\', \'Beltrano\' , \'Sicrano\']', () => {
    let names = ['Fulano', 'Beltrano' , 'Sicrano']
    let name = randArray(names)
    expect(names.includes(name)).toBe(true)
  })
})
