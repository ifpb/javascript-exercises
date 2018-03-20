let result = '';

for(let number = 0; number <= 99; number++){
  let whiteSpace = number % 10 == 9 ? '\n' : ' '
  let value = number < 10 ? '0'+number : number
  result += value + whiteSpace
}

console.log(result)
