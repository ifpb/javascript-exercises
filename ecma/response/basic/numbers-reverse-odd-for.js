let result = '';

for(let number = 99; number >= 0; number -= 2){
  let whiteSpace = number % 10 == 1 ? '\n' : ' '
  let value = number < 10 ? '0'+number : number
  result += value + whiteSpace
}

console.log(result)
