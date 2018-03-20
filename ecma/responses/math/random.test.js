const random = require('./random')

describe('Random Util', () => {
  test('making random number >= 1 and <= 100', () => {
    let value = random.rand(100)
    expect(value).toBeGreaterThanOrEqual(0)
    expect(value).toBeLessThanOrEqual(100)
  })

  test.skip('making random number >= 10 and <= 100', () => {
    let value = random.rand(10, 100)
    expect(value).toBeGreaterThanOrEqual(10)
    expect(value).toBeLessThanOrEqual(100)
  })

  test.skip('looking for some value in array [\'Fulano\', \'Beltrano\' , \'Sicrano\']', () => {
    let names = ['Fulano', 'Beltrano' , 'Sicrano']
    let name = random.randArray(names)
    expect(names.includes(name)).toBe(true)
  })
})
