
function gtZero(products) {
  return products.filter(product => product.qtd > 0)
}

function subTotal(products) {
  const genSubTotal = p => ({id: p.id, subtotal: (p.qtd * p.preco)})
  return products.map(genSubTotal)
}

function total(products) {
  return products.reduce((total, p) => total + p.qtd * p.preco, 0)
}

export { gtZero, subTotal, total }
