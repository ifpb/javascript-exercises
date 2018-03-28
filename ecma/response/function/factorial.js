function factorial(number){
  if(number)
    return number * factorial(number-1)
  else
    return 1

  /* alternative. to understand how ternary operators works:
   * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operador_Condicional */

  // return number ? number * factorial(number - 1) : 1;
}

export { factorial }
