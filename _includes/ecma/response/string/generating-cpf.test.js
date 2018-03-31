import { cpfCheckDigit } from './generating-cpf.js'

describe('Generating CPF Check Digit', () => {

  test('invalid cpf', () => {
    expect(cpfCheckDigit('000000000')).toBe(false)
  })

  test('the check digit of 123456789 is 09', () => {
    expect(cpfCheckDigit('123456789')).toBe('12345678909')
  })

  test('the check digit of 000111222 is 85', () => {
    expect(cpfCheckDigit('000111222')).toBe('00011122285')
  })

})
