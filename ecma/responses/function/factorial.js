function factorial(number){
  if(number)
    return number * factorial(number-1)
  else
    return 1
}

module.exports = factorial
