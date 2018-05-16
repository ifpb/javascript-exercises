
function valorIndicador(tabela, mesInicial, mesFinal) {
  const valor = {}
  const anoInicial = mesInicial.split('/')[1]
  const anoFinal = mesFinal.split('/')[1]
  mesInicial = mesInicial.split('/')[0]
  mesFinal = mesFinal.split('/')[0]

  for (let ano = anoInicial; ano <= anoFinal; ano++) {
    const inicio = ano === anoInicial ? mesInicial : 1
    const fim = ano === anoFinal ? mesFinal : 12
    for (let mes = inicio; mes <= fim; mes++) {
      valor[`${mes.toString().padStart(2, '0')}/${ano}`] = tabela[ano][mes - 1]
    }
  }

  return valor
}

function saldoIndices(tabela1, tabela2, mesInicial, mesFinal) {
  const valores1 = valorIndicador(tabela1, mesInicial, mesFinal)
  const valores2 = valorIndicador(tabela2, mesInicial, mesFinal)
  const saldos = {}
  for (const key of Object.keys(valores1)) {
    saldos[key] = valores1[key] - valores2[key]
  }
  return saldos
}

export { saldoIndices }
