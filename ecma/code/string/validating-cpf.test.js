import { validateCPF } from './validate-cpf.js'

test('two plus two is four', () => {
  expect(validateCPF('12345678909')).toBe(true)
})
