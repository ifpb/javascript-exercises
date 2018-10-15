import { repeatedString, mirrorSequence, zeroMeansZero, numberOfLeds } from './stringUtil.js'

describe('String Utils', () => {

  test('number of letter a in the first 10 repeated string', () => {
    expect(repeatedString('aba', 10)).toBe(7)
  })

  test.skip('number of letter a in the first 1000000000000 repeated string', () => {
    expect(repeatedString('a', 1000000000000)).toBe(1000000000000)
  })

  test.skip('mirror sequence of 1 to 5', () => {
    expect(mirrorSequence(1, 5)).toBe('1234554321')
  })

  test.skip('mirror sequence of 10 to 13', () => {
    expect(mirrorSequence(10, 13)).toBe('1011121331211101')
  })
  
  test.skip('mirror sequence of 98 to 101', () => {
    expect(mirrorSequence(98, 101)).toBe('98991001011010019989')
  })

  test.skip('remove zero of 7 + 8', () => {
    expect(zeroMeansZero(7, 8)).toBe('15')
  })

  test.skip('remove zero of 15 + 5', () => {
    expect(zeroMeansZero(15, 5)).toBe('2')
  })

  test.skip('remove zero of 99 + 6', () => {
    expect(zeroMeansZero(99, 6)).toBe('15')
  })

  test.skip('number of leds needed to set 115380', () => {
    expect(numberOfLeds('115380')).toBe(27)
  })

  test.skip('number of leds needed to set 2819311', () => {
    expect(numberOfLeds('2819311')).toBe(29)
  })

  test.skip('number of leds needed to set 23456', () => {
    expect(numberOfLeds('23456')).toBe(25)
  })

})