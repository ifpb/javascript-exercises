let result = '';

for(let decimal = 0; decimal <= 9; decimal++){
  for(let unit = 0; unit <= 9; unit++){
    let whiteSpace = unit == 9 ? '\n' : ' '
    result += decimal + (unit + whiteSpace)
  }
}

console.log(result)
