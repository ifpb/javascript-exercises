### [IRRF 2017](code.zip)

**Description**

Base de cálculo mensal em R$ | Alíquota % | Parcela a deduzir do imposto em R$
-----------------------------|------------|-----------------------------------
Até 1.903,98 | – | –
De 1.903,99 até 2.826,65 | 7,5| 142,80
De 2.826,66 até 3.751,05 | 15,0 | 354,80
De 3.751,06 até 4.664,68 | 22,5 | 636,13
Acima de 4.664,68	| 27,5 | 869,36

Fonte: [Tabela IRRF 2017](https://www.tabeladoirrf.com.br/tabela-irrf-2017.html)

```
tax = salary * taxRate - deduction
```
Fonte: [Simulador IRRF](http://www.receita.fazenda.gov.br/aplicacoes/atrjo/simulador/simulador.asp?tipoSimulador=M) e [sitecontabil](https://www.sitecontabil.com.br/noticias/artigo.php?id=2272)
<!-- tax = (salary - dependents - INSS) x taxRate - deduction -->

**Code**

`{{ page.path | replace:'README.md','' }}code/irrf-2017.js`:
```js
{% include_relative code/irrf-2017.js %}
```

> [Response](response/irrf-2017.js)