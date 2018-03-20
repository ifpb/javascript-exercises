const validateCPF = require('./validate-cpf')

test('two plus two is four', () => {
  expect(validateCPF('12345678909')).toBe(true)
})
