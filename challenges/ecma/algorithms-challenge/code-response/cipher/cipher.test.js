let Cipher = require('./cipher')

describe('Cipher', function() {
  let cipher

  beforeEach(function() {
    cipher = new Cipher()
  })

  test('encripting text with rot2', function() {
    expect(cipher.rot('abc', 2)).toEqual('cde')
    expect(cipher.rot('xyz', 2)).toEqual('zab')
  })

  test('encripting text with rot13', function() {
    expect(cipher.rot('abc', 13)).toEqual('nop')
    expect(cipher.rot('xyz', 13)).toEqual('klm')
  })

})
