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

function minMaxIndice(tabela, mesInicial, mesFinal) {
  const juros = Object.values(valorIndicador(tabela, mesInicial, mesFinal))
  juros.sort()
  return [juros[0], juros[juros.length - 1]]
}

export { minMaxIndice }
