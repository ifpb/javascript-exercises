import { checkingDigitCpf } from '../../../string/validating-cpf/response/validating-cpf.js'

function validateCpf(cpf) {
  return /^(\d{11}|(\d{3}\.){2}\d{3}-\d{2})$/.test(cpf) && checkingDigitCpf(cpf.replace(/[\.-]/g, ''))
}

function validateCnpj(cnpj) {
  // TODO
  // return /^()$/.test(cnpj)
}

function validateCep(cep) {
  return /^(\d{8}|\d{2}[\.-]?\d{3}-\d{3})$/.test(cep)
}

function validateOctal(octal) {
  return /^0[oO]?[0-7]+$/.test(octal)
}

export { validateCpf, validateCnpj, validateCep, validateOctal }
