const parser = require('./parser')

describe('Number Util', () => {
  test('converting string to hexa', () => {
    expect(parser.str2hex('AB')).toBe('41 42')
  })

  test.skip('converting string to hexa', () => {
    expect(parser.str2hex('ABC')).toBe('41 42 43')
  })

  test.skip('converting hexa to string', () => {
    expect(parser.hex2str('41 42')).toBe('AB')
  })

  test.skip('converting hexa to string', () => {
    expect(parser.hex2str('41 42 43')).toBe('ABC')
  })

  test.skip('converting string to binary', () => {
    expect(parser.str2bin('AB')).toBe('01000001 01000010')
  })

  test.skip('converting string to binary', () => {
    expect(parser.str2bin('ABC')).toBe('01000001 01000010 01000011')
  })

  test.skip('converting binary to string', () => {
    expect(parser.bin2str('01000001 01000010')).toBe('AB')
  })

  test.skip('converting binary to string', () => {
    expect(parser.bin2str('01000001 01000010 01000011')).toBe('ABC')
  })

  test.skip('converting string to octal', () => {
    expect(parser.str2dec('AB')).toBe('65 66')
  })

  test.skip('converting string to octal', () => {
    expect(parser.str2dec('ABC')).toBe('65 66 67')
  })

  test.skip('converting octal to string', () => {
    expect(parser.dec2str('65 66')).toBe('AB')
  })

  test.skip('converting octal to string', () => {
    expect(parser.dec2str('65 66 67')).toBe('ABC')
  })
})
