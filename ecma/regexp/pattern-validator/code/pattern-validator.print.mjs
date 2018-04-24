import { validateCpf, validateCnpj, validateCep, validateOctal } from './pattern-validator.js'

// Validator Pattern

// CPF
// validating correct numerical CPF pattern
console.log(validateCpf('12345678909'))
console.log(true)

console.log(validateCpf('98765432100'))
console.log(true)

// validating correct mask CPF pattern
console.log(validateCpf('111.444.777-35'))
console.log(true)

console.log(validateCpf('111.222.333-96'))
console.log(true)

// invalidating wrong numerial pattern by size
console.log(validateCpf('123456789091'))
console.log(false)

console.log(validateCpf('9876543210'))
console.log(false)

// invalidating wrong numecial pattern by including letters
console.log(validateCpf('1234567890a'))
console.log(false)

console.log(validateCpf('9876543210X'))
console.log(false)

// invalidating wrong mask pattern
console.log(validateCpf('111444.777-35'))
console.log(false)

console.log(validateCpf('111-222.333-96'))
console.log(false)

console.log(validateCpf('111.222.33396'))
console.log(false)

// invalidating wrong mask pattern by size
console.log(validateCpf('111.444.777-353'))
console.log(false)

console.log(validateCpf('111.222.333-9'))
console.log(false)

// invalidating wrong mask pattern by including letters
console.log(validateCpf('111.444.777-3a'))
console.log(false)

console.log(validateCpf('111.a22.333-96'))
console.log(false)

// invalidating numerical pattern by check digit
console.log(validateCpf('12345678999'))
console.log(false)

console.log(validateCpf('98765432199'))
console.log(false)

// invalidating numerical pattern by check digit
console.log(validateCpf('111.444.777-99'))
console.log(false)

console.log(validateCpf('111.222.333-99'))
console.log(false)

// CEP
// validating with only numbers
console.log(isValidCep('01000100'))
console.log(true)

// validating with numbers and hyphen
console.log(isValidCep('01000-100'))
console.log(true)

// validating with numbers, dot and hyphen
console.log(isValidCep('01.000-100'))
console.log(true)

// detecting invalid code
console.log(isValidCep('a01001000'))
console.log(false)

console.log(isValidCep('01-001.000'))
console.log(false)

console.log(isValidCep('01.001000'))
console.log(false)

// Octal
// with correct digits
console.log(isValidOctal('0125'))
console.log(true)

console.log(isValidOctal('0257'))
console.log(true)

console.log(isValidOctal('0o257'))
console.log(true)

console.log(isValidOctal('0O257'))
console.log(true)

// with wrong pattern
console.log(isValidOctal('125'))
console.log(false)

console.log(isValidOctal('0x257'))
console.log(false)

console.log(isValidOctal('0X25F'))
console.log(false)

console.log(isValidOctal('0b010'))
console.log(false)

console.log(isValidOctal('0B011'))
console.log(false)

// with wrong digits
console.log(isValidOctal('025F'))
console.log(false)

console.log(isValidOctal('0o259'))
console.log(false)

console.log(isValidOctal('0O258'))
console.log(false)
