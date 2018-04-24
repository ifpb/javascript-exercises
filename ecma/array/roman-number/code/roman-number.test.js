import { toRoman } from './roman-number.js'

describe('Roman Number', function () {

  test('converting 1', function () {
    expect(toRoman(1)).toEqual('I')
  })

  test.skip('converting 2', function () {
    expect(toRoman(2)).toEqual('II')
  })

  test.skip('converting 3', function () {
    expect(toRoman(3)).toEqual('III')
  })

  test.skip('converting 4', function () {
    expect(toRoman(4)).toEqual('IV')
  })

  test.skip('converting 5', function () {
    expect(toRoman(5)).toEqual('V')
  })

  test.skip('converting 6', function () {
    expect(toRoman(6)).toEqual('VI')
  })

  test.skip('converting 9', function () {
    expect(toRoman(9)).toEqual('IX')
  })

  test.skip('converting 27', function () {
    expect(toRoman(27)).toEqual('XXVII')
  })

  test.skip('converting 48', function () {
    expect(toRoman(48)).toEqual('XLVIII')
  })

  test.skip('converting 59', function () {
    expect(toRoman(59)).toEqual('LIX')
  })

  test.skip('converting 93', function () {
    expect(toRoman(93)).toEqual('XCIII')
  })

  test.skip('converting 141', function () {
    expect(toRoman(141)).toEqual('CXLI')
  })

  test.skip('converting 163', function () {
    expect(toRoman(163)).toEqual('CLXIII')
  })

  test.skip('converting 402', function () {
    expect(toRoman(402)).toEqual('CDII')
  })

  test.skip('converting 575', function () {
    expect(toRoman(575)).toEqual('DLXXV')
  })

  test.skip('converting 911', function () {
    expect(toRoman(911)).toEqual('CMXI')
  })

  test.skip('converting 1024', function () {
    expect(toRoman(1024)).toEqual('MXXIV')
  })

  test.skip('converting 3000', function () {
    expect(toRoman(3000)).toEqual('MMM')
  })
})
