import { RainbowTable } from './rainbow-table.js'

describe('Cipher', function () {
  test('decripting text with rot13', function () {
    let rainbowTable = new RainbowTable(1)
    expect(rainbowTable.cracker('0cc175b9c0f1b6a831c399e269772661')).toBe('a')
  })

  test('decripting text with rot13', function () {
    let rainbowTable = new RainbowTable(2)
    expect(rainbowTable.cracker('534b9a3588bdd87bf7c3b9d650e43e46')).toBe('pu')
  })
})