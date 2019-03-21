let result = '';

for (let number = 0; number <= 99; number += 1) {
  const whiteSpace = number % 10 === 9 ? '\n' : ' ';
  const value = number < 10 ? `0${number}` : number;
  result += value + whiteSpace;
}

console.log(result);
