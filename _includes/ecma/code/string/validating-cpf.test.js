import { validateCPF } from './validating-cpf.js'

describe('Validate CPF', () => {

  test('two plus two is four', () => {
    expect(validateCPF('12345678909')).toBe(true)
  })

})
