function fibonacci(number) {
  let a = 0;
  let b = 1;
  let result = `${a}, ${b}`;
  let temp;

  if (number > 1)
    while (number > 2) {
      temp = a + b;
      a = b;
      b = temp;

      number--;
      result += `, ${temp}`;
    }
  else if (number == 1) return '0';
  else return '';

  return result;
}

export { fibonacci };
