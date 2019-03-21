function gtZero(products) {
  const isGtZero = product => product[2] > 0;
  return products.filter(isGtZero);
}

function subTotal(products) {
  const sum = product => [product[0], product[1] * product[2]];
  return products.map(sum);
}

function total(products) {
  const sum = (total, product) => total + product[1] * product[2];
  return products.reduce(sum, 0);
}

export { gtZero, subTotal, total };
