import { validateCpf, validateCnpj, validateCep, validateOctal } from './pattern-validator.js'

describe('Validator Pattern', () => {
  // CPF
  test('validating correct numerical CPF pattern', () => {
    expect(validateCpf('12345678909')).toBe(true)
    expect(validateCpf('98765432100')).toBe(true)
  })

  test('validating correct mask CPF pattern', () => {
    expect(validateCpf('111.444.777-35')).toBe(true)
    expect(validateCpf('111.222.333-96')).toBe(true)
  })

  test('invalidating wrong numerial pattern by size', () => {
    expect(validateCpf('123456789091')).toBe(false)
    expect(validateCpf('9876543210')).toBe(false)
  })

  test('invalidating wrong numecial pattern by including letters', () => {
    expect(validateCpf('1234567890a')).toBe(false)
    expect(validateCpf('9876543210X')).toBe(false)
  })

  test('invalidating wrong mask pattern', () => {
    expect(validateCpf('111444.777-35')).toBe(false)
    expect(validateCpf('111-222.333-96')).toBe(false)
    expect(validateCpf('111.222.33396')).toBe(false)
  })

  test('invalidating wrong mask pattern by size', () => {
    expect(validateCpf('111.444.777-353')).toBe(false)
    expect(validateCpf('111.222.333-9')).toBe(false)
  })

  test('invalidating wrong mask pattern by including letters', () => {
    expect(validateCpf('111.444.777-3a')).toBe(false)
    expect(validateCpf('111.a22.333-96')).toBe(false)
  })

  test('invalidating numerical pattern by check digit', () => {
    expect(validateCpf('12345678999')).toBe(false)
    expect(validateCpf('98765432199')).toBe(false)
  })

  test('invalidating numerical pattern by check digit', () => {
    expect(validateCpf('111.444.777-99')).toBe(false)
    expect(validateCpf('111.222.333-99')).toBe(false)
  })

  // CEP
  test('validating with only numbers', () => {
    expect(validateCep('01000100')).toBe(true)
  })

  test('validating with numbers and hyphen', () => {
    expect(validateCep('01000-100')).toBe(true)
  })

  test('validating with numbers, dot and hyphen', () => {
    expect(validateCep('01.000-100')).toBe(true)
  })

  test('detecting invalid code', () => {
    expect(validateCep('a01001000')).toBe(false)
    expect(validateCep('01-001.000')).toBe(false)
    expect(validateCep('01.001000')).toBe(false)
  })

  // Octal
  test('with correct digits', () => {
    expect(validateOctal('0125')).toBe(true)
    expect(validateOctal('0257')).toBe(true)
    expect(validateOctal('0o257')).toBe(true)
    expect(validateOctal('0O257')).toBe(true)
  })

  test('with wrong pattern', () => {
    expect(validateOctal('125')).toBe(false)
    expect(validateOctal('0x257')).toBe(false)
    expect(validateOctal('0X25F')).toBe(false)
    expect(validateOctal('0b010')).toBe(false)
    expect(validateOctal('0B011')).toBe(false)
  })

  test('with wrong digits', () => {
    expect(validateOctal('025F')).toBe(false)
    expect(validateOctal('0o259')).toBe(false)
    expect(validateOctal('0O258')).toBe(false)
  })
})
