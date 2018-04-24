### [Validing CPF](code.zip)

**Validação do primeiro dígito**

Primeiramente multiplica-se os 9 primeiros dígitos pela sequência decrescente de números de 10 à 2 e soma os resultados. Então cosiderando o **CPF** 123.456.789-09 temos:

| Nove primeiros dígitos antes do traço |	1	| 2	| 3	| 4	| 5	| 6	| 7	| 8	| 9 |
| - | - | - | - | - | - | - | - | - | - |
| Valor de 10 até 2 para multiplicar	  | 10| 9	| 8	| 7	| 6	| 5	| 4	| 3	| 2 |
| Resultado da multiplicação            | 10 | 18 | 24 | 28 | 30 | 30 | 28 | 24 | 18 |

**Total: 210**

O próximo passo da verificação basta multiplicarmos o valor `Total` por 10 e dividirmos por 11:

Resto = (210 * 10) % 11 = 10

Se o `Resto` for igual ao primeiro dígito verificador, a primeira parte da validação está correta. Contudo, se o `Resto` for igual a 10 ou 11, então ele será 0.

**Validação do segundo dígito**

A validação do segundo dígito é semelhante à primeira, porém vamos multiplicar esses 10 números pela sequencia decrescente de 11 a 2:

| Dez primeiros dígitos	| 1	| 2	| 3	| 4	| 5	| 6	| 7	| 8	| 9	| 0 |
| - | - | - | - | - | - | - | - | - | - | - |
| Valor de 11 até 2 para multiplicar	| 11	| 10	| 9	| 8	| 7	| 6	| 5	| 4	| 3	| 2 |
| Resultado da multiplicação	| 11	| 20	| 27	| 32	| 35	| 36	| 35	| 32	| 27	| 0 |

**Total: 255**

O próximo passo da verificação basta multiplicarmos o valor `Total` por 10 e dividirmos por 11:

Resto = (255 * 10) % 11 = 9

Se o `Resto` for igual ao segundo dígito verificador, a segunda parte da validação está correta. Contudo, se o `Resto` for igual a 10 ou 11, então ele será 0.

**Obs:** http://www.dicasdeprogramacao.com.br/algoritmo-para-validar-cpf/

**Code**

`{{ page.path | replace:'README.md','' }}code/validating-cpf.mjs`:
```js
{% include_relative code/validating-cpf.js %}
```

`{{ page.path | replace:'README.md','' }}code/validating-cpf.print.mjs`:
```js
{% include_relative code/validating-cpf.print.mjs %}
```

> [Response](response/validating-cpf.js)
