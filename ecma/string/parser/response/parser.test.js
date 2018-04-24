import { str2hex, hex2str, str2bin, bin2str, str2dec, dec2str } from './parser.js'

describe('Number Util', () => {
  test('converting string to hexa', () => {
    expect(str2hex('AB')).toBe('41 42')
  })

  test('converting string to hexa', () => {
    expect(str2hex('ABC')).toBe('41 42 43')
  })

  test('converting hexa to string', () => {
    expect(hex2str('41 42')).toBe('AB')
  })

  test('converting hexa to string', () => {
    expect(hex2str('41 42 43')).toBe('ABC')
  })

  test('converting string to binary', () => {
    expect(str2bin('AB')).toBe('01000001 01000010')
  })

  test('converting string to binary', () => {
    expect(str2bin('ABC')).toBe('01000001 01000010 01000011')
  })

  test('converting binary to string', () => {
    expect(bin2str('01000001 01000010')).toBe('AB')
  })

  test('converting binary to string', () => {
    expect(bin2str('01000001 01000010 01000011')).toBe('ABC')
  })

  test('converting string to decimals', () => {
    expect(str2dec('AB')).toBe('065 066')
  })

  test('converting string to decimals', () => {
    expect(str2dec('ABC')).toBe('065 066 067')
  })

  test('converting decimal to string', () => {
    expect(dec2str('065 066')).toBe('AB')
  })

  test('converting decimal to string', () => {
    expect(dec2str('065 066 067')).toBe('ABC')
  })
})
