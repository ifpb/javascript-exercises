import { financiamentoPrice } from './financiamento-price.js'

describe('FinanciamentoPrice', function () {

  test('financimento de 20000 com juros menis de 1.82 no prazo de 36 meses', function () {
    expect(financiamentoPrice(20000, 1.82, 36)).toEqual(27437.565620289548)
  })

  test('financimento de 20000 com juros menis de 1.82 no prazo de 24 meses', function () {
    expect(financiamentoPrice(20000, 1.82, 24)).toEqual(24863.60444684676)
  })

  test('financimento de 20000 com juros menis de 1.82 no prazo de 36 meses', function () {
    expect(financiamentoPrice(20000, 1.82, 12)).toEqual(22444.174290541192)
  })

})
