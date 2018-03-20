const substitution = require('./simple-substitution')

describe('Basic Leet', () => {

  test('converting message to "lorem ipsum"', () => {
    // https://simple.wikipedia.org/wiki/Leet
    // http://www.robertecker.com/hp/research/leet-converter.php?lang=en
    expect(substitution('lorem ipsum', 'aegiost', '4361057')).toBe('l0r3m 1p5um')
  })
})
