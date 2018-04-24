
function cpfCheckDigit(cpf) {
  let sum
  let remainder
  
  sum = 0
  if (cpf == "000000000") 
    return false

  for (let i = 1; i <= 9; i++) 
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i)
  remainder = (sum * 10) % 11

  if ((remainder == 10) || (remainder == 11)) 
    remainder = 0

  cpf += remainder

  sum = 0
  for (let i = 1; i <= 10; i++) 
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i)
  remainder = (sum * 10) % 11

  if ((remainder == 10) || (remainder == 11)) 
    remainder = 0
  
  cpf += remainder

  return cpf
}

export { cpfCheckDigit }
