function total(products) {
  const sum = (total, product) => total + product[1];
  return products.reduce(sum, 0);

  // let sum = 0
  // products.forEach(product => sum += product[1])
  // return sum
}

export { total };
