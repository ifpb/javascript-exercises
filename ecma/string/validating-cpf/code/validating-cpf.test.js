import { checkingDigitCpf } from './validating-cpf.js'

describe('Checking Digit CPF', () => {

  test('the check digit of 123456789 is 09', () => {
    expect(checkingDigitCpf('12345678909')).toBe(true)
  })

})
