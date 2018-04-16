# DESAFIO

## DESAFIOS DIVERSOS
---

O desafio é composta por quarto questões localizados em arquivos [deste diretório compactado](code.zip). Cada arquivo possui uma Suite de Testes que apresenta a sua respectiva validação por meio de testes.

Contudo, para executar cada cenários de validação da Suite de Teste será necessário instalar a ferramenta [Jest](https://facebook.github.io/jest/) usando o `npm` e o `package.json` por meio do comando:

```
$ cd nome-aluno-matricula
$ npm install
```

Também se certifique se a versão do `node` está atualizado:

```
$ node -v
```

Após a instalação do `Jest`, é preciso verificar se tudo ocorreu perfeitamente. Então, por uma questão de verificação, digite o seguinte comando para executar da Suite de Testes da *Questão 1*:

```
$ npm run test triangle/triangle.test.js
```

Se a resolução do problema ainda não foi inicializada e o `Jest` funcionou corretamente, então esse comando deverá exibir algo como:

```
$ npm run test triangle/triangle.test.js

> desafio-ecma@1.0.0 test /Users/.../simulado-ecma
> ./node_modules/jest/bin/jest.js "triangle/triangle.test.js"

 FAIL  code/triangle/triangle.test.js
  ● Triangle › equilateral triangles have equal sides

    TypeError: triangle.kind is not a function

      at Object.<anonymous> (code/triangle/triangle.test.js:7:21)
          at Promise (<anonymous>)
      at Promise.resolve.then.el (node_modules/p-map/index.js:46:16)
          at <anonymous>

  Triangle
    ✕ equilateral triangles have equal sides (3ms)
    ○ skipped 10 tests

Test Suites: 1 failed, 1 total
Tests:       1 failed, 10 skipped, 11 total
Snapshots:   0 total
Time:        1.291s
Ran all test suites matching "triangle/triangle.test.js".
```

Ou seja, no total de 11 testes foi executado apenas 1, que mesmo assim não está se comportanto conforme esperado. 

Contudo, ao concluir a implementação corretamente o mesmo comando deverá exibir:

```
$ npm run test triangle/triangle.test.js

> desafio-ecma@1.0.0 test /Users/.../simulado-ecma
> ./node_modules/jest/bin/jest.js "triangle/triangle.test.js"

 PASS  code-response/triangle/triangle.test.js
  Triangle
    ✓ equilateral triangles have equal sides (4ms)
    ✓ larger equilateral triangles also have equal sides (1ms)
    ✓ isosceles triangles have last two sides equal
    ✓ isosceles triangles have first two sides equal (1ms)
    ✓ isosceles trianges have first and last sides equal
    ✓ isosceles triangles have two first sides equal
    ✓ isosceles triangles have in fact exactly two sides equal
    ✓ scalene triangles have no equal sides
    ✓ scalene triangles have no equal sides at a larger scale too (1ms)
    ✓ scalene triangles have no equal sides in descending order either
    ✓ very small triangles are legal

Test Suites: 1 passed, 1 total
Tests:       11 passed, 11 total
Snapshots:   0 total
Time:        1.203s
Ran all test suites matching "triangle/triangle.test.js".
```

O que significa que todos os cenários listados funcionam conforme descrito na Suite de Teste.

> **Observação**: É importante destacar que os arquivos de teste fazem parte de um estratégia de otimização e automatização da validação das entradas e saídas de cada problema. Mas, nada impede que esse processo seja realizado manualmente.

Por fim, é importante destacar que cada questão irá detalhar um teste específico, por exemplo, na *QUESTÃO 1* alguns cenários de testes são descritos no arquivo `code/triangle/triangle.test.js` do problema que deve ser codificado no arquivo `code/triangle/triangle.js`.

### QUESTÕES
---

**QUESTÃO 1 (33%)** - O conjunto de três restas podem formar um triângulo que pode ser classificado em função da quantidade de retas de tamanho igual. Se o triângulo possui todas, duas ou nenhuma reta igual será classificado respectivamente como sendo `equilateral`, `isosceles` e `scalene`.

Para facilitar essa identificação, crie um objeto `Triangle` no arquivo [`code/triangle/triangle.js`](code/triangle/triangle.js) que recebe em sua construção os tamanhos das três retas, e ao chamar o método `kind()` deve-se retornar o seu tipo por meio de uma `string`:

![Triangle](assets/triangle.svg)

conforme ilustra o código a seguir:

```js
let triangle = new Triangle(2,2,2)
console.log(triangle.kind()) //=> equilateral
```

Detalhe, algumas outras condições de retorno estão previstas na Suite de Teste [`code/triangle/triangle.test.js`](code/triangle/triangle.test.js).
<br><br>

**QUESTÃO 2 (33%)** - O Sistema de controle acadêmico de uma instituição educacional possui um problema para geração das médias de suas turmas, o que acarreta em um esforço sobrenatural dos professores para gerar essa métrica, pois depende do fornecimento de nota a nota de cada aluno para o cálculo final da média.

Por meio de vários contatos, os professores souberam que os alunos do IFPB poderiam resolver esse problema de modo super fácil, então, inevitavelmente a instituição foi em busca de tais profissionais.

A princícpio uma equipe planejou a criação de um Sistema Web para tal problema, que deveria possuir um objeto chamado `School` no arquivo [code/grade-school/grade-school.js](code/grade-school/grade-school.js). O objeto possuirá duas ações, a `roster()` e `grade()`, que respectivamente devem gerar: a lista de notas por lista nomes ordenado dos alunos, e a lista dos nomes dos alunos de uma nota específica:

![School](assets/school.svg)

Com a ajuda da instituição foi possível esboçar em `[code/grade-school/grade-school.test.js](code/grade-school/grade-school.test.js)` alguns casos de teste para validar os possíveis comporatamente do objeto. Como os exibidos a seguir para a ação `roster()`:

```js
let school = new School()

console.log(school.roster()) //=> {}
```

```js
let school = new School()

school.add('Aimee', 2)

console.log(school.roster()) //=> { 2 : [ 'Aimee' ] }
```

```js
let school = new School()

school.add('Blair',2)
school.add('James',2)
school.add('Paul',2)

console.log(school.roster()) //=> { 2 : [ 'Blair', 'James', 'Paul' ] }
```

também para a ação `grade()`:

```js
let school = new School()

school.add('Franklin',5)
school.add('Bradley',5)
school.add('Jeff',1)

console.log(school.grade(5)) //=> [ 'Bradley', 'Franklin' ]
```

```js
let school = new School()

console.log(school.grade(1) //=> []
```
<br><br>

**QUESTÃO 3 (33%)** - A [Criptografia](https://en.wikipedia.org/wiki/Cryptography) é considerada uma importante área da computação, mesmo possuindo muitas novidades recentes, é possível encontrar vários fatos que demonstram que sua origem é antiga.

Um exemplo disso seria a própria [Cifra de César](https://www.youtube.com/watch?v=jhXCTbFnK8o), considerada uma técnica de criptografia de substituição, com origem no Império Romano, e que recebeu este nome devido a uma homenagem à Júlio César devido ao seu uso em correspondências militares.

"A ação de uma Cifra de César é mover cada letra do alfabeto um número de vezes fixo abaixo no alfabeto. Este exemplo está com uma troca de três, então o B no texto normal se torna E no texto cifrado." [Wikipedia, 2017](https://pt.wikipedia.org/wiki/Cifra_de_César)

[![Rot 3](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/320px-Caesar3.svg.png)](https://pt.wikipedia.org/wiki/Cifra_de_César)<br>
*Fonte: [Wikipedia, 2017](https://pt.wikipedia.org/wiki/Cifra_de_César)*

O número de deslocamentos também pode definir uma segunda nomenclatura para essa criptografia, por exemplo, a cifra anterior também é conhecida por ROT3, por se tratar de um rotacionamento de 3 letras do alfabeto, então, por consequência, o ROT13 iria rotacionar 13 letras, fazendo que a letra A seja substituída por N.

Pensando nisso, o professor da disciplina de LS resolveu usar esta cifra com um propósito mais pacífico, e resolveu divulgar o seguinte texto no Slack da disciplina com ROT13:

```
Dhny é n áeiber cersrevqn qr hz nqzvavfgenqbe qr erqrf? Vcê.
Dhny é b qvgb cbchyne znvf hfnqb cbe hz nanyvfgn qr erqrf? Pnvh an erqr, é cuvfuvat!
```

no intuito de ver a reação da turma ao ler a mensagem descriptografada.

Para ajudar nesse processo foi fornecido o arquivo 
[`code/cipher/cipher.js`](code/cipher/cipher.js) que a função `rot`, e o [`code/cipher/cipher.test.js`](code/cipher/cipher.test.js) que define alguns casos de teste de `rot`:

![Cipher](assets/cipher.svg)
<br><br>

**QUESTÃO 4 (33%)** - Segundo o [Só Biologia](http://www.sobiologia.com.br/conteudos/Citologia2/AcNucleico5.php) a "Síntese de RNA (mensageiro, por exemplo) se inicia com a separação das duas fitas de DNA. Apenas uma das fitas do DNA serve de molde para a produção da molécula de RNAm. A outra fita não é transcrita. Essa é uma das diferenças entre a duplicação do DNA e a produção do RNA.".

![Síntese do RNA](http://www.sobiologia.com.br/conteudos/figuras/Citologia2/RNA.jpg)<br>
*Fonte: [Só Biologia](http://www.sobiologia.com.br/conteudos/Citologia2/AcNucleico5.php)*

Essa síntese estava sendo analisada em um centro de genética, através de equipamento que geraram a cadeia de DNA e RNA gerada de modo textual. 

Pensando em automatizar funturos mapeamentos de mutação, foi solicitado a criação de um programa que pudesse gerar de modo mais rápido a sequência de RNA a partir de um DNA.

Imaginando um segmento hipotético de um filamento de DNA com a seqüência de bases:

> DNA- ATGCCGAAATTTGCG

O segmento de RNAm formado na transcrição terá a seqüência de bases:

> RNA- UACGGCUUUAAACGC 

Ou seja, o processo consiste basicamente na conversão:

|DNA|RNA|
| - | - |
| G | C |
| C | G |
| T | A |
| A | U |

Então, tente criar um script [code/rna-transcription/rna-transcription.js](code/rna-transcription/rna-transcription.js) que gere essa conversão, e para efeitos de validação use a Suite de Teste [code/rna-transcription/rna-transcription.test.js](code/rna-transcription/rna-transcription.test.js):

![DNA Transcriber](assets/dna-transcriber.svg)

<!-- 
https://pt.wikipedia.org/wiki/Transcrição_(genética)
http://www.sobiologia.com.br/conteudos/Citologia2/AcNucleico5.php
https://pt.khanacademy.org/science/biology/gene-expression-central-dogma/transcription-of-dna-into-rna/a/stages-of-transcription
http://exercism.io/exercises/php/rna-transcription/readme
 -->

