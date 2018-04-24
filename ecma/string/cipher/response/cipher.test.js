import { rot } from './cipher.js'

describe('Caesar Cipher', () => {
  test('encoding rot2', () => {
    expect(rot('abc', 2)).toBe('cde')
    expect(rot('xyz', 2)).toBe('zab')
  })

  test('encoding rot13', () => {
    expect(rot('abc', 13)).toBe('nop')
    expect(rot('xyz', 13)).toBe('klm')
  })
})
