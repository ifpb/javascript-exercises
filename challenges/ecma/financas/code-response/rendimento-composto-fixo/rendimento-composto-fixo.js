// IOF Regressivo
// 22,50% 180
// 20,00% 181-360
// 17,50% 361-720
// 15,00% 721

function redimentoCompostoFixo(valorInicial, aporte, juroMensal, meses) {
  juroMensal = juroMensal / 100
  return (valorInicial * (1 + juroMensal) ** meses) + aporte * ((1 + juroMensal) ** meses - 1) / juroMensal
}

export { redimentoCompostoFixo }