import { cpfCheckDigit } from './generating-cpf.js'

// Generating CPF Check Digit

// invalid cpf
console.log(cpfCheckDigit('000000000'))
console.log(false)

// the check digit of 123456789 is 09
console.log(cpfCheckDigit('123456789'))
console.log('12345678909')

// the check digit of 000111222 is 85
console.log(cpfCheckDigit('000111222'))
console.log('00011122285')
