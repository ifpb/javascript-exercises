const substitution = require('./simple-substitution')
describe('Simple Substitution', () => {
  test('converting to basic leet', () => {
    expect(substitution('lorem ipsum', 'aegiost', '4361057')).toBe('l0r3m 1p5um')
  })

  test('converting to custom leet', () => {
    expect(substitution('senha secreta', 'aegiost', '!@#$%&*')).toBe('&@nh! &@cr@*!')
  })
})
