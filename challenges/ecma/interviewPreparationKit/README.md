# Prova Ecma

## Descrição
---

Cada vez mais os processos seletivos estão utilizando resolução de problemas para analisar o nível de compreensão dos conceitos de programação. Para simultar esse processo será exigido a entrega de no **mínimo três** dos algoritmos descritos a seguir.

Detalhe, as questões já estão disponíveis no arquivo [code.zip](code.zip), por exemplo, a **QUESTÃO 1** está relacionado ao arquivo `formatDate/formatDate.js` que pode ser executado via Jest pelo comando:

```
$ npm install
$ npx formatDate/formatDate.test.js
```

Ou usando node pelo comando:

```
$ cd formatDate
$ mv formatDate.js formatDate.mjs
$ node --experimental-modules formatDate.print.mjs
```

### QUESTÕES
---

**QUESTÃO 1** - No arquivo `formatDate/formatDate.js`, desenvolva a função `formatDate` que recebe uma data no formato "dd/mm/aaaa" e escreva a data por extenso. O separador é a barra (/) da data. Exemplo: Para a entrada "22/04/1983" deve ser escrito "22 de abril de 1983".

```js
console.log(formatDate("22/04/1983")) //=> "22 de abril de 1983"
```

**QUESTÃO 2** - No arquivo `grammar/grammar.js`, quando escrever qualquer string, chamar o função `spelling`. A string deverá aparecer com suas letras separadas por hífen (-) e em maiúsculas.

*Exemplo 1:*

```js
console.log(spelling('programador')) //=> 'P-R-O-G-R-A-M-A-D-O-R'
```

*Exemplo 2:*

```js
console.log(spelling('o dia está chuvoso')) //=> 'O-D-I-A-E-S-T-Á-C-H-U-V-O-S-O'
```

**QUESTÃO 3** - No arquivo `sockMerchant/sockMerchant.js`, crie a função `sockMerchant` que recebe um conjunto de meias identificadas por números e deve retornar quantos pares do mesmo tipo é possível montar (Fonte: [Sock merchant - Hackerrank](https://www.hackerrank.com/challenges/sock-merchant/problem)).

*Exemplo 1:*

```js
console.log(sockMerchant([1, 2, 1, 2, 1, 3, 2])) //=> 2
```

ou seja, existem 3 tipos de meias {1, 2, 3} que ao se agrupar em pares é possível formar 1 par do tipo de meia 1, e 1 do 2, o que totaliza 2 pares. Conforme é possível ver nos elementos destacados {**1**, **2**, **1**, **2**, 1, 3, 2}.

*Exemplo 2:*

```js
console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20])) //=> 3
```

ou seja, existem 4 tipos de meias {10, 20, 30, 50} que ao se agrupar em pares é possível formar 2 par do tipo de meia 10, e 1 do 20, o que totaliza 3 pares. Conforme é possível ver nos elementos destacados {**10**, **20**, **20**, **10**, **10**, 30, 50, **10**, 20}.

**QUESTÃO 4** - No arquivo `arrayUtil/arrayUtil.js`, resolva os seguintes problemas:

**a)** - Crie a função `rotLeft(a, d)` que rotaciona os elementos de um array `a` em `d` saltos. (Fonte: [Arrays: Left Rotation - Hackerrank](https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem)).

*Exemplo 1:*

```js
let arr = [1, 2, 3, 4, 5]
console.log(rotLeft(arr, 4)) //=> [ 5, 1, 2, 3, 4 ]
```

ou seja, é realizado 4 rotacionamentos:

```
[1, 2, 3, 4, 5]  
[2, 3, 4, 5, 1] (1º salto: o elemento 1 foi para o final do array) 
[3, 4, 5, 1, 2] (2º salto: o elemento 2 foi para o final do array) 
[4, 5, 1, 2, 3] (3º salto: o elemento 3 foi para o final do array) 
[5, 1, 2, 3, 4] (4º salto: o elemento 4 foi para o final do array)
```

*Exemplo 2:*

```js
let arr = [41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51]
console.log(rotLeft(arr, 10))
//=> [ 77, 97, 58, 1, 86, 58, 26, 10, 86, 51, 41, 73, 89, 7, 10, 1, 59, 58, 84, 77 ]
```

**b)** - Crie a função `stats(arr)` que recebe um array `arr` e retorna a proporção de elementos maior, igual e menor que zero. Uma vez obtido o valor `number` da proporção use `number.toFixed(6)` para retornar uma precisão de 6 casas decimais. (Fonte: [Plus Minus - Hackerrank](https://www.hackerrank.com/challenges/plus-minus/problem)).

*Exemplo 1:*

```js
console.log(stats([-4, 3, -9, 0, 4, 1])) //=> ['0.500000', '0.333333', '0.166667']
```

ou seja, os elementos maior, igual e menor que zero são respectivamente {3, 4, 1}, {0} e {-4, -9}. Na proporção representam os valores 3/6, 1/6 e 2/6 que resultam, na precisão de 6, em 0.500000, 0.333333, 0.166667.

**c)** - Crie a função `miniMaxSum(arr)` que sempre recebe um array `arr` de tamanho 5 e retorna o valor mínimo e máximo da soma de 4 elementos de `arr`. (Fonte: [Mini-Max Sum - Hackerrank](https://www.hackerrank.com/challenges/mini-max-sum/problem)).

*Exemplo 1:*

```js
console.log(miniMaxSum([1, 2, 3, 4, 5])) //=> [ 10, 14 ]
```

ou seja, os 4 menores elementos de `arr` são [1, 2, 3, 4] e os 4 maiores são [2, 3, 4, 5], logo suas respectivas somas serão 10 e 14

**d)** - Crie a função `highestFrequency(arr)` para detectar o elemento de maior frequência de `arr`. (Fonte: [Migratory Birds - Hackerrank](https://www.hackerrank.com/challenges/migratory-birds/problem)).

*Exemplo 1:*

```js
console.log(highestFrequency([1, 4, 4, 4, 5, 3])) //=> 4
```

ou seja, o array possui os elementos {1, 3, 4, 5} com as frequências de {1, 1, 3, 1}, logo percebe-se que o elemento 4 possui a maior frequência.

**QUESTÃO 5** - No arquivo `stringUtil/stringUtil.js`, resolva os seguintes problemas:

**a)** - Crie a função `repeatedString(s, n)` que recebe a string `s` e tenta repeti-la várias vezes até ficar com um tamanho de `n`, e seu retorno deve trazer a quantidade de vezes que aparece a letra `a`. (Fonte: [Repeated String - Hackerrank](https://www.hackerrank.com/challenges/repeated-string/problem)).

*Exemplo 1:*

```js
console.log(repeatedString('aba', 10)) //=> 7
```

ou seja, se a string `aba` for repetida 4 vezes ela ficará `abaabaabaaba`, mas para ficar com um tamanho de 10 será necessário remover algumas letras no final, gerando a string `abaabaabaa`. Ao contabilizar a ocorrência da letra `a` o resultado será 7.

*Exemplo 2:*

```js
console.log(repeatedString('a', 1000000000000)) //=> 1000000000000
```

**b)** - Crie a função `mirrorSequence(a, b)` que retorna a sequencia linear de `a` até `b`, e em seguida, a sequência será espelhada. (Fonte: [Mirror Sequence - URI Online Judge](https://www.urionlinejudge.com.br/judge/en/problems/view/2157)).

*Exemplo 1:*

```js
console.log(mirrorSequence(1, 5)) //=> '1234554321'
```

ou seja, a sequência de 1 até 5 é `12345`, e seu reflexo é `54321`, juntando os dois valores obtem-se o valor `1234554321`.

*Exemplo 2:*

```js
console.log(mirrorSequence(10, 13)) //=> '1011121331211101'
```

**c)** - Crie a função `zeroMeansZero(a, b)` que retonra a soma dos valores `a` e `b` sem o digito `0` caso exista. (Fonte: [Led - URI Online Judge](https://www.urionlinejudge.com.br/judge/en/problems/view/1168)).

*Exemplo 1:*

```js
console.log(zeroMeansZero(7, 8)) //=> 15
```

ou seja, a soma de 7 mais 8 é igual a 15, logo o retorno será 15 pois não existe o digito `0`.

*Exemplo 2:*

```js
console.log(zeroMeansZero(15, 5)) //=> 2
```

ou seja, a soma de 15 mais 5 é igual a 20, logo o retorno será 2 pois será removido o digito `0`.

**d)** - Crie a função `numberOfLeds(number)` que recebe um número e retorno o total de LEDs necessário para exibi-lo. Lembrando que conforme a *Figura 1* exibe, cada número exige uma quantidade de LEDs específica, por exemplo, o digito `1` precisa de 2 LEDs, o `2` de 4, e assim sucessivamente. (Fonte: [Zero means Zero - URI Online Judge](https://www.urionlinejudge.com.br/judge/en/problems/view/1871)).

*Figura 1 - Representação dos números em LED*<br>
![Representação dos números em LED](https://urionlinejudge.r.worldssl.net/gallery/images/problems/UOJ_1168.png)<br>
(Fonte: [Zero means Zero - URI Online Judge](https://www.urionlinejudge.com.br/judge/en/problems/view/1871))

*Exemplo 1:*

```js
console.log(numberOfLeds('115380')) //=> 27
```

ou seja, o número `115380` é formado pelos digitos {`1`, `1`, `5`, `3`, `8`, `0`} e exige respectivamente a seguinte quantia de LEDs {2, 2, 5, 5, 7, 6}, que resulta em um total de 27 LEDs.

*Exemplo 2:*

```js
console.log(numberOfLeds('2819311')) //=> 29
```