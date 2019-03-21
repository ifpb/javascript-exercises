let result = '';

for (let number = 99; number >= 0; number -= 1) {
  const whiteSpace = number % 10 ? ' ' : '\n';
  const value = number < 10 ? `0${number}` : number;
  result += value + whiteSpace;
}

console.log(result);
