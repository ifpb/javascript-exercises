function sum(array) {
  let sum = 0;
  for (let value of array) {
    sum += value;
  }
  return sum;
}

function product(array) {
  let product = 1;
  for (let value of array) {
    product *= value;
  }
  return product;
}

function sumOdds(array) {
  let sum = 0;
  for (let value of array) {
    if (value % 2) sum += value;
  }
  return sum;
}

export { sum, product, sumOdds };
