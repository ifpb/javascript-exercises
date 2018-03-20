
function total(products) {
  return products.reduce((s, p) => s + p.preco, 0)
}

module.exports = total
