import { cpf, cnpj, cep, octal } from './validador-regexp.js'

describe('Validator Pattern', () => {
  // CPF
  test('validating correct numerical CPF pattern', () => {
    expect(validateCpf('12345678909')).toBe(true)
    expect(validateCpf('98765432100')).toBe(true)
  })

  test.skip('validating correct mask CPF pattern', () => {
    expect(validateCpf('111.444.777-35')).toBe(true)
    expect(validateCpf('111.222.333-96')).toBe(true)
  })

  test.skip('invalidating wrong numerial pattern by size', () => {
    expect(validateCpf('123456789091')).toBe(false)
    expect(validateCpf('9876543210')).toBe(false)
  })

  test.skip('invalidating wrong numecial pattern by including letters', () => {
    expect(validateCpf('1234567890a')).toBe(false)
    expect(validateCpf('9876543210X')).toBe(false)
  })

  test.skip('invalidating wrong mask pattern', () => {
    expect(validateCpf('111444.777-35')).toBe(false)
    expect(validateCpf('111-222.333-96')).toBe(false)
    expect(validateCpf('111.222.33396')).toBe(false)
  })

  test.skip('invalidating wrong mask pattern by size', () => {
    expect(validateCpf('111.444.777-353')).toBe(false)
    expect(validateCpf('111.222.333-9')).toBe(false)
  })

  test.skip('invalidating wrong mask pattern by including letters', () => {
    expect(validateCpf('111.444.777-3a')).toBe(false)
    expect(validateCpf('111.a22.333-96')).toBe(false)
  })

  test.skip('invalidating numerical pattern by check digit', () => {
    expect(validateCpf('12345678999')).toBe(false)
    expect(validateCpf('98765432199')).toBe(false)
  })

  test.skip('invalidating numerical pattern by check digit', () => {
    expect(validateCpf('111.444.777-99')).toBe(false)
    expect(validateCpf('111.222.333-99')).toBe(false)
  })

  // CEP
  test('validating with only numbers', () => {
    expect(isValidCep('01000100')).toBe(true)
  })

  test.skip('validating with numbers and hyphen', () => {
    expect(isValidCep('01000-100')).toBe(true)
  })

  test.skip('validating with numbers, dot and hyphen', () => {
    expect(isValidCep('01.000-100')).toBe(true)
  })

  test.skip('detecting invalid code', () => {
    expect(isValidCep('a01001000')).toBe(false)
    expect(isValidCep('01-001.000')).toBe(false)
    expect(isValidCep('01.001000')).toBe(false)
  })

  // Octal
  test('with correct digits', () => {
    expect(isValidOctal('0125')).toBe(true)
    expect(isValidOctal('0257')).toBe(true)
    expect(isValidOctal('0o257')).toBe(true)
    expect(isValidOctal('0O257')).toBe(true)
  })

  test.skip('with wrong pattern', () => {
    expect(isValidOctal('125')).toBe(false)
    expect(isValidOctal('0x257')).toBe(false)
    expect(isValidOctal('0X25F')).toBe(false)
    expect(isValidOctal('0b010')).toBe(false)
    expect(isValidOctal('0B011')).toBe(false)
  })

  test.skip('with wrong digits', () => {
    expect(isValidOctal('025F')).toBe(false)
    expect(isValidOctal('0o259')).toBe(false)
    expect(isValidOctal('0O258')).toBe(false)
  })
})
