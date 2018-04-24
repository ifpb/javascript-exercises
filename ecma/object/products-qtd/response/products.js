
function total(products) {
  return products.reduce((s, p) => s + p.preco, 0)
}

export { total }
