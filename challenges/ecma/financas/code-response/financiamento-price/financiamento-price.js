function financiamentoPrice(financiamento, juroMensal, meses) {
  juroMensal = juroMensal / 100
  const parecela = financiamento * juroMensal / (1 - 1 / (1 + juroMensal) ** meses)
  return parecela * meses
}

export { financiamentoPrice }