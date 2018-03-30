// Até 1.903,98             | –          | –
// De 1.903,99 até 2.826,65 | 7,5        | 142,80
// De 2.826,66 até 3.751,05 | 15,0       | 354,80
// De 3.751,06 até 4.664,68 | 22,5       | 636,13
// Acima de 4.664,68	      | 27,5       | 869,36
// deduction by dependent   | R$ 189, 59 |

// http://www.receita.fazenda.gov.br/aplicacoes/atrjo/simulador/simulador.asp?tipoSimulador=M
// https://www.sitecontabil.com.br/noticias/artigo.php?id=2272
// (salary - dependents - INSS) x tax - deduction

let salary = 3500.5
let tax

switch (true) {
  case salary < 1903.99:
    tax = 0
    break
  case salary < 2826.66:
    tax = 7.5
    break
  case salary < 3751.06:
    tax = 15
    break
  case salary < 4664.68:
    tax = 22.5
    break
  default:
    tax = 27.5
}

console.log(`IRRF: ${salary*tax/100}`)
