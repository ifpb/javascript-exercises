import { toRoman } from './roman-number.js'

describe('Roman Number', function () {

  test('converting 1', function () {
    expect(toRoman(1)).toEqual('I')
  })

  test('converting 2', function () {
    expect(toRoman(2)).toEqual('II')
  })

  test('converting 3', function () {
    expect(toRoman(3)).toEqual('III')
  })

  test('converting 4', function () {
    expect(toRoman(4)).toEqual('IV')
  })

  test('converting 5', function () {
    expect(toRoman(5)).toEqual('V')
  })

  test('converting 6', function () {
    expect(toRoman(6)).toEqual('VI')
  })

  test('converting 9', function () {
    expect(toRoman(9)).toEqual('IX')
  })

  test('converting 27', function () {
    expect(toRoman(27)).toEqual('XXVII')
  })

  test('converting 48', function () {
    expect(toRoman(48)).toEqual('XLVIII')
  })

  test('converting 59', function () {
    expect(toRoman(59)).toEqual('LIX')
  })

  test('converting 93', function () {
    expect(toRoman(93)).toEqual('XCIII')
  })

  test('converting 141', function () {
    expect(toRoman(141)).toEqual('CXLI')
  })

  test('converting 163', function () {
    expect(toRoman(163)).toEqual('CLXIII')
  })

  test('converting 402', function () {
    expect(toRoman(402)).toEqual('CDII')
  })

  test('converting 575', function () {
    expect(toRoman(575)).toEqual('DLXXV')
  })

  test('converting 911', function () {
    expect(toRoman(911)).toEqual('CMXI')
  })

  test('converting 1024', function () {
    expect(toRoman(1024)).toEqual('MXXIV')
  })

  test('converting 3000', function () {
    expect(toRoman(3000)).toEqual('MMM')
  })
})
