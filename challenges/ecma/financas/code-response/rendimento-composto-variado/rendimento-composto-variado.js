
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
      valor[`${mes}/${ano}`] = tabela[ano][mes - 1]
    }
  }

  return valor
}


function redimentoCompostoVariado(tabela, valorInicial, aporte, mesInicial, mesFinal) {
  const juros = Object.values(valorIndicador(tabela, mesInicial, mesFinal))
  return juros
    .map(juro => juro / 100)
    .reduce((acumulado, juro) => (acumulado + aporte) * (1 + juro), valorInicial)
}

export { redimentoCompostoVariado }
