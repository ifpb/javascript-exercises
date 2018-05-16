import { redimentoCompostoFixo } from './rendimento-composto-fixo.js'

describe('RendimentoCompostoFixo', function () {

  test('obtendo o rendimento de uma entrada de 100, com aportes de 500, juros de 0.5936 e prazo de 12 meses', function () {
    expect(redimentoCompostoFixo(100, 500, 0.5936, 12)).toEqual(6307.176654943719)
  })

  test('obtendo o rendimento de uma entrada de 100, com aportes de 500, juros de 0.5936 e prazo de 24 meses', function () {
    expect(redimentoCompostoFixo(100, 500, 0.5936, 24)).toEqual(12971.227695545636)
  })

  test('obtendo o rendimento de uma entrada de 100, com aportes de 500, juros de 0.5936 e prazo de 36 meses', function () {
    expect(redimentoCompostoFixo(100, 500, 0.5936, 36)).toEqual(20125.781003832304)
  })

  test('obtendo o rendimento de uma entrada de 100, com aportes de 500, juros de 0.5936 e prazo de 120 meses', function () {
    expect(redimentoCompostoFixo(100, 500, 0.5936, 120)).toEqual(87335.08961181375)
  })

})
