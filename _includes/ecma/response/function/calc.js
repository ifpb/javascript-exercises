/**
 * operator: '+', '-', '*', '/'
 */
function calc(operand1, operand2, operator){
  switch (operator) {
    case '+':
      return parseInt(operand1) + parseInt(operand2)
    case '-':
      return operand1 - operand2
    case '*':
      return operand1 * operand2
    case '/':
      return operand1 / operand2
  }

  
}

/* alternative answer. to undersand how eval works:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/eval */
function calcWithEval(operand1, operand2, operator) {
  return eval(operand1 + operator + operand2)
}

export { calc, calcWithEval }
