# Prova Ecma

## Descrição
---

A gestão financeira é algo extremamente importante para vida das pessoas, e através dela é que conseguimos obter recursos para alcançar algumas metas de nossas vidas, por exemplo, viagens, imóveis, bens de consumo etc.

Pensando em auxiliar a gestão financeira, uma empresa veio recrutar alguns desenvolvedores para criar alguns algoritmos.

Para facilitar o desenvolvimento, foi disponibilizado neste [diretório compactado](code.zip) alguns arquivos já com a organização dos algoritmos. (Também existe a [versão de teste](code-test.zip) com Jest)

A seguir será descrito os algoritmos por meio de questões, e deve ser entregue no mínimo três questões.

### QUESTÕES
---

**QUESTÃO 1** - A [Tabela Price](https://pt.wikipedia.org/wiki/Tabela_Price) é um método de amortização de empréstimo cuja principal finalidade é gerar parcelas com valores iguais. Muitas vezes é comum nos simuladores das instituições financeiras visualizar o período e a parcela do valor a ser obtido, contudo não é tão evidente o valor final pago no empréstimo.

Então, para facilitar a geração do valor final pago, primeiro devemos utilizar essa fórmula do valor da parcela:

![](assets/price.svg)

, onde:

*PV*: Valor Presente (entrada)<br>
*i*: Taxa de juros<br>
*n*: Número de períodos (meses)

Depois multiplicamos pelo número de parcelas para obter o valor total.

Assim sendo, crie um algoritmo para gerar o valor final pago de um empréstimo de R$ 20.000,00 a juros de 1,82% ao mês, nos prazos de 1, 2 e 3 anos.

Detalhe, utilize o arquivo `financiamento-price/financiamento-price.js` para gerar os valores finais:

```js
console.log(financiamentoPrice(20000, 1.82, 36)) //=> 27437.565620289548
console.log(financiamentoPrice(20000, 1.82, 24)) //=> 24863.60444684676
console.log(financiamentoPrice(20000, 1.82, 12)) //=> 22444.174290541192
```

**QUESTÃO 2** - Segundo o Faz a Conta, o [Valor Futuro (VF ou FV)](http://fazaconta.com/valor-futuro-investimentos.htm) é um cálculo na matemática financeira que permite "estimar como os valores irão evoluir levando em consideração uma taxa de juros para a correção do dinheiro no tempo". 

Sua fórmula pode ser expressa por:

![](assets/rf.svg)

, onde:

*PV*: Valor Presente (entrada)<br>
*i*: Taxa de juros<br>
*n*: Número de períodos (meses)<br>
*M*: mensalidade ou aportes

Crie um algoritmo no arquivo `rendimento-composto-fixo/rendimento-composto-fixo.js` para gerar o valor final de um investimento de renda fixa cujo o rendimento mensal fixo seja de 0,5936%, os aportes de R$ 500,00, e a entrada de R$ 100,00, nos períodos de 1, 2, 3 e 10 anos:

```js
console.log(redimentoCompostoFixo(100, 500, 0.5936, 12)) //=> 6307.176654943719
console.log(redimentoCompostoFixo(100, 500, 0.5936, 24)) //=> 12971.227695545636
console.log(redimentoCompostoFixo(100, 500, 0.5936, 36)) //=> 20125.781003832304
console.log(redimentoCompostoFixo(100, 500, 0.5936, 120)) //=> 87335.08961181375
```

**QUESTÃO 3** - Nem sempre os rendimentos dos investimentos possuem juros pré-fixados, algumas modalidades possuem variação na sua taxa de juros.

No contexto brasileiro um exemplo bem conhecido é a [caderneta de poupança](http://www.portalbrasil.net/poupanca_mensal.htm), que conforme a tabela a seguir, exibe a variação dos juros conforme os anos de 2015 até 2018:

| Ano | Jan | Fev | Mar | Abr | Maio | Jun | Jul | Ago | Set | Out | Nov | Dez |
|-|-|-|-|-|-|-|-|-|-|-|-|-|
| 2018 | 0,4273 | 0,3994 | 0,3994 | 0,3855 | | | | | | | | |
| 2017 | 0,6858 | 0,6709 | 0,5304 | 0,6527 | 0,5000 | 0,5768 | 0,5539 | 0,5626 | 0,5512 | 0,5000 | 0,4690 | 0,4273 |
| 2016 | 0,7261 | 0,6327 | 0,5962 | 0,7179 | 0,6311 | 0,6541 | 0,7053 | 0,6629 | 0,7558 | 0,6583 | 0,6609 | 0,6435 |
| 2015 | 0,6058 | 0,5882 | 0,5169 | 0,6302 | 0,6079 | 0,6159 | 0,6822 | 0,7317 | 0,6876 | 0,6930 | 0,6799 | 0,6303 |

Além dos investimentos, alguns outros índices podem utilizar essa ideia, como o cálculo da atualização de um valor segundo a inflação usando a [taxa SELIC](http://www.portalbrasil.net/indices_selic_ano.htm):

| Ano | Jan | Fev | Mar | Abr | Maio | Jun | Jul | Ago | Set | Out | Nov | Dez |
|-|-|-|-|-|-|-|-|-|-|-|-|-|
| 2018 | 0,29 | 0,32 | 0,09 | 0,22 | | | | | | | | |
| 2017 | 0,38 | 0,33 | 0,25 | 0,14 | 0,31 | -0,23 | 0,24 | 0,19 | 0,16 | 0,42 | 0,28 | 0,44 |
| 2016 | 1,27 | 0,9 | 0,43 | 0,61 | 0,78 | 0,35 | 0,52 | 0,44 | 0,08 | 0,26 | 0,18 | 0,3 |
| 2015 | 1,24 | 1,22 | 1,32 | 0,71 | 0,74 | 0,79 | 0,62 | 0,22 | 0,54 | 0,82 | 1,01 | 0,96 |

Portanto, a fórmula para calcular o valor final que possui aportes mensais e sofre influência de juros variáveis e composto é:

![](assets/rv.svg)

, onde:

*v<sub>i</sub>*: Valor do rendimento<br>
*v<sub>i-1</sub>*: Valor do rendimento anterior<br>
*i<sub>i-1</sub>*: Juros anterior<br>
*M*: mensalidade ou aportes

Sendo assim, crie um algoritmo no arquivo `rendimento-composto-variado/rendimento-composto-variado.js` para: 

**a)** Gerar o valor final de um investimento na poupança sem entrada de valor, com aportes de R$ 500,00 mensais, nos intervalos de 01/2015 até 12/2017, e de 01/2015 até 12/2015:

```js
console.log(redimentoCompostoVariado(poupanca, 0, 500, '01/2015', '12/2017')) //=> 20161.722546560424
console.log(redimentoCompostoVariado(poupanca, 0, 500, '01/2015', '12/2015')) //=> 6263.110235582166
```

**b)** Gerar o valor final de um atualização de valor acumulado com aportes de R$ 500,00 mensais, nos intervalos de 01/2015 até 12/2017, e de 01/2015 até 12/2015:

```js
console.log(redimentoCompostoVariado(ipca, 0, 500, '01/2015', '12/2017')) //=> 19334.152800685235
console.log(redimentoCompostoVariado(ipca, 0, 500, '01/2015', '12/2015')) //=> 6312.287539035425
```

**c)** Comparar o rendimento da caderneta de poupança com o IPCA, por exemplo, nos intervalos de 01/2015 até 12/2017, ou de 01/2015 até 12/2015, a poupança repôs a inflação? Em quanto?

**QUESTÃO 4** - Um dúvida muito comum entre os brasileiros consiste no efetivo reajuste que a poupança gera sobre a inflação. Pensando em destacar essa reposição (poupança) versus desvalorização (IPCA) é que foi solicitado a criação de um algoritmo no arquivo `saldo-indices/saldo-indices.js` para fazer essa comparação, conforme a execução a seguir:

```js
console.log(saldoIndices(poupanca, ipca, '01/2015', '12/2017'))
//=>
// { 
//   '01/2015': -0.6342,
//   '02/2015': -0.6318,
//   '03/2015': -0.8031,
//   '04/2015': -0.07979999999999998,
//   '05/2015': -0.1321,
//   '06/2015': -0.17410000000000003,
//   '07/2015': 0.06220000000000003,
//   '08/2015': 0.5117,
//   '09/2015': 0.14759999999999995,
//   '10/2015': -0.127,
//   '11/2015': -0.33010000000000006,
//   '12/2015': -0.3297,
//   '01/2016': -0.5439,
//   '02/2016': -0.2673,
//   '03/2016': 0.16619999999999996,
//   '04/2016': 0.1079,
//   '05/2016': -0.14890000000000003,
//   '06/2016': 0.30410000000000004,
//   '07/2016': 0.18530000000000002,
//   '08/2016': 0.22290000000000004,
//   '09/2016': 0.6758000000000001,
//   '10/2016': 0.3983,
//   '11/2016': 0.48090000000000005,
//   '12/2016': 0.34349999999999997,
//   '01/2017': 0.30579999999999996,
//   '02/2017': 0.34090000000000004,
//   '03/2017': 0.2804,
//   '04/2017': 0.5126999999999999,
//   '05/2017': 0.19,
//   '06/2017': 0.8068,
//   '07/2017': 0.31389999999999996,
//   '08/2017': 0.3726,
//   '09/2017': 0.3912,
//   '10/2017': 0.08000000000000002,
//   '11/2017': 0.18899999999999995,
//   '12/2017': -0.012699999999999989
// }
```

**QUESTÃO 5** - Diante da análise de valores sobre juros variáveis, muitas vezes nos questionamos quais foram os momentos de melhor e pior êxito.

Para auxiliar nessa detecção crie um algoritmo no arquivo `min-max-indice/min-max-indice.js` que determine o mínimo e máximo de uma série de reajustes conforme código a seguir:

```js
console.log(minMaxIndice(poupanca, '01/2015', '12/2017')) //=> [ 0.4273, 0.7558 ]
console.log(minMaxIndice(ipca, '01/2015', '12/2017')) //=> [ -0.23, 1.32 ]
```

<br>
<br>
<br>

> Alternativa de resposta:<br> 
> * [financiamento-price/financiamento-price.js](code-response/financiamento-price/financiamento-price.js)<br>
> * [rendimento-composto-fixo/rendimento-composto-fixo.js](code-response/rendimento-composto-fixo/rendimento-composto-fixo.js)<br>
> * [rendimento-composto-variado/rendimento-composto-variado.js](code-response/rendimento-composto-variado/rendimento-composto-variado.js)<br>
> * [saldo-indices/saldo-indices.js](code-response/saldo-indices/saldo-indices.js)<br>
> * [min-max-indice/min-max-indice.js](code-response/min-max-indice/min-max-indice.js)<br>