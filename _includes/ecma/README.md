# ECMAScript

* [Basic (Expressions & operators, Statements & declarations)](#basic-expressions--operators-statements--declarations)
  * [Body mass index(BMI)](#body-mass-index-bmi)
  * [IRRF 2017](#irrf-2017)
  * [Numbers series](#numbers-series)
  * [Harmonic series](#harmonic-series)
* [Function](#function)
  * [Sum](#sum)
  * [Area of Circle](#area-of-circle)
  * [Calc](#calc)
  * [Factorial](#factorial)
  * [Fibonacci Number](#fibonacci-number)
  * [Fibonacci Sequence](#fibonacci-sequence)
  * [Triangle Checker](#triangle-checker)
  * [isPrime](#isprime)
  * [Nth Prime](#nth-prime)
  * [Calendar](#calendar)
  * [Figure Text](#figure-text)
* [Array](#array)
  * [Array Util (Min, Max, Range, Zip, Uniq)](#array-util-min-max-range-zip-uniq)
  * [Array Operations](#array-operations)
  * [Fibonacci Sequence Array](#fibonacci-sequence-array)
  * [Prime Numbers](#prime-numbers-array)
  * [Minimum Withdraw](#min-withdraw)
  * [Roman Number](#roman-number)
  * [Prime Factors](#prime-factors)
  * [Products Array](#products-array)
  * [Products Array with Quantity](#products-array-with-quantity)
* [String](#string)
  * [List Generator](#list-generator)
  * [Table Generator](#table-generator)
  * [String Util](#string-util)
  * [Simple substitution](#simple-substitution)
  * [Lorem ipsum generator](#lorem-ipsum-generator)
  * [Hamming](#hamming)
  * [Rna Transcription](#rna-transcription)
  * [Citation](#citation)
  * [Caesar Cipher](#cipher)
  * [Parser (String2Number)](#parser-string2number)
  * [IP](#ip)
  * [Validing CPF](#validing-cpf)
  * [Table Convert .md to .html](#table-convert-md-to-html)
* [Math](#math)
  * [Random](#random)
* [Object](#object)
  * [CEP](#cep)
  * [Products](#products)
  * [Products with Quantity](#products-with-quantity)
  * [Comics](#comics)
  * [Exam](#exam)
  * [Order](#order)
  * [Brazilian Championship A Series 2016](#brazilian-championship-a-series-2016)
* [Date](#date)
  * [Diff Timestamp (ms)](#diff-timestamp-ms)
* [Regexp](#regexp)
  * [Text util](#text-util)
  * [Scanning pattern](#scanning-pattern)
  * [Pattern Validador](#pattern-validator)
  * [Search on Tools](#search-on-tools)
* [Other Exercises](#other-exercises)


## Running Javascript
---

{% include ecma/running-javascript.md %}

## Basic (Expressions & operators, Statements & declarations)
---

{% include ecma/code/basic/bmi.md %}

{% include ecma/code/basic/irrf-2017.md %}

{% include ecma/code/basic/numbers.md %}

{% include ecma/code/basic/harmonic-series.md %}

## Function
---

### Sum

[function/sum.js](code/function/sum.js)<br>
[function/sum.test.js](code/function/sum.test.js)

```js
function sum(operand1, operand2){
  // TODO
}

console.log(sum(1, 2)) //=> 3
console.log(sum(3, 2)) //=> 5
```

## Area of Circle

[function/area-of-circle.js](code/function/area-of-circle-fn.js)<br>
[function/area-of-circle.test.js](code/function/area-of-circle-fn.test.js)

```js
// A = πr²

function areaOfCircle(radius){
  // TODO
}

let radius = 10
console.log(areaOfCircle(radius)) //=> 314.16

radius = 20
console.log(areaOfCircle(radius)) //=> 1256.64
```

### Calc

[function/calc.js](code/function/calc.js)<br>
[function/calc.test.js](code/function/calc.test.js)

```js
/**
 * operator: '+', '-', '*', '/'
 */
function calc(operand1, operand2, operator){
  // TODO
}

console.log(calc(1, 1, '+')) //=> 2
console.log(calc(1, 1, '*')) //=> 1
```

### Factorial

[function/factorial.js](code/function/factorial.js)<br>
[function/factorial.test.js](code/function/factorial.test.js)

```js
console.log(factorial(4)) //=> 24
console.log(factorial(6)) //=> 720
```

### Fibonacci number

[function/fibonacci-number.js](code/function/fibonacci-number.js)<br>
[function/fibonacci-number.test.js](code/function/fibonacci-number.test.js)

```js
console.log(fibonacci(4)) //=> 2
console.log(fibonacci(6)) //=> 5
```

### Fibonacci sequence

[function/fibonacci-sequence.js](code/function/fibonacci-sequence.js)<br>
[function/fibonacci-sequence.test.js](code/function/fibonacci-sequence.test.js)

```js
console.log(fibonacci(4)) //=> 0, 1, 1, 2
console.log(fibonacci(6)) //=> 0, 1, 1, 2, 3, 5
```

### Triangle Checker

[function/triangle-checker.js](code/function/triangle-checker.js)<br>
[function/triangle-checker.test.js](code/function/triangle-checker.test.js)

```js
console.log(triangleChecker(2, 2, 2))    //=> equilateral
console.log(triangleChecker(10, 10, 10)) //=> equilateral

console.log(triangleChecker(3, 4, 4))    //=> isosceles
console.log(triangleChecker(4, 3, 4))    //=> isosceles
console.log(triangleChecker(4, 4, 3))    //=> isosceles
console.log(triangleChecker(10, 10, 2))  //=> isosceles

console.log(triangleChecker(3, 4, 5))    //=> scalene
console.log(triangleChecker(10, 11, 12)) //=> scalene
console.log(triangleChecker(5, 4, 2))    //=> scalene

console.log(triangleChecker(0, 0, 0))    //=> none
console.log(triangleChecker(3, 4, -5))   //=> none
console.log(triangleChecker(1, 1, 3))    //=> none
console.log(triangleChecker(2, 4, 2))    //=> none
```

### isPrime

[function/prime.js](code/function/prime.js)<br>
[function/prime.test.js](code/function/prime.test.js)

```js
console.log(isPrime(2))   //=> true
console.log(isPrime(3))   //=> true
console.log(isPrime(4))   //=> false
console.log(isPrime(5))   //=> true
console.log(isPrime(6))   //=> false
console.log(isPrime(7))   //=> true
```

### Nth Prime

[function/prime-nth.js](code/function/prime-nth.js)<br>
[function/prime-nth.test.js](code/function/prime-nth.test.js)

```js
console.log(prime(4))     //=> 7
console.log(prime(6))     //=> 13
```

### Calendar

[function/calendar.js](code/function/calendar.js)<br>
[function/calendar.test.js](code/function/calendar.test.js)

```js
console.log(calendar('SEG', 31))
//=>
// DOM SEG TER QUA QUI SEX SAB
//      01  02  03  04  05  06
//  07  08  09  10  11  12  13
//  14  15  16  17  18  19  20
//  21  22  23  24  25  26  27
//  28  29  30  31
```

### Figure Text

[function/figure-text.js](code/function/figure-text.js)<br>
[function/figure-text.test.js](code/function/figure-text.test.js)

```js
// Triangle Text
// N=1
// #    1,1          2
//
// N=2
// #    1,1 1,2      2 3
// ##   2,1 2,2      3 4
//
// N=3
// #    1,1 1,2 1,3   02 03 04  
// ##   2,1 2,2 2,3   03 04 05  
// ###  3,1 3,2 3,3   04 05 06

console.log(triangleText(1))
//=>
// #

console.log(triangleText(2))
//=>
// #
// ##

console.log(triangleText(3))
//=>
// #
// ##
// ###
```

```js
// Half Diamond Text
// N=1
// #    1,1          2
//
// N=2
// #    1,1 1,2      2 3
// ##   2,1 2,2      3 4
// #    3,1 3,2      4 5
//
// N=3
// #    1,1 1,2 1,3   02 03 04  
// ##   2,1 2,2 2,3   03 04 05  
// ###  3,1 3,2 3,3   04 05 06
// ##   4,1 4,2 4,3   05 06 07
// #    5,1 5,2 5,3   06 07 08

console.log(halfDiamondText(1))
//=>
// #

console.log(halfDiamondText(2))
//=>
// #
// ##
// #

console.log(halfDiamondText(3))
//=>
// #
// ##
// ###
// ##
// #
```

```js
// Diamond Text
// N=1
// #    1,1          2
//
// N=2
//  #   1,1 1,2 1,3  2 3 4
// ###  2,1 2,2 2,3  3 4 5
//  #   3,1 3,2 3,3  4 5 6
//
// N=3
//   #    1,1 1,2 1,3 1,4 1,5   02 03 04 05 06  
//  ###   2,1 2,2 2,3 2,4 2,5   03 04 05 06 07  
// #####  3,1 3,2 3,3 3,4 3,5   04 05 06 07 08
//  ###   4,1 4,2 4,3 4,4 4,5   05 06 07 08 09
//   #    5,1 5,2 5,3 5,4 5,5   06 07 08 09 10
//
// N=4
//    #     1,1 1,2 1,3 1,4 1,5 1,6 1,7   02 03 04 05 06 07 08  
//   ###    2,1 2,2 2,3 2,4 2,5 2,6 2,7   03 04 05 06 07 08 09
//  #####   3,1 3,2 3,3 3,4 3,5 3,6 3,7   04 05 06 07 08 09 10
// #######  4,1 4,2 4,3 4,4 4,5 4,6 4,7   05 06 07 08 09 10 11
//  #####   5,1 5,2 5,3 5,4 5,5 5,6 5,7   06 07 08 09 10 11 12
//   ###    6,1 6,2 6,3 6,4 6,5 6,6 6,7   07 08 09 10 11 12 13
//    #     7,1 7,2 7,3 7,4 7,5 7,6 7,7   08 09 10 11 12 13 14

console.log(diamondText(1))
//=>
// #

console.log(diamondText(2))
//=>
//  #
// ###
//  #

console.log(diamondText(3))
//=>
//   #
//  ###
// #####
//  ###
//   #
```

```js
// Board Text
// N=1
// #        1,1               2
//
// N=2
// #        1,1 1,2           2 3
//  #       2,1 2,2           3 4
//
// N=3
// # #      1,1 1,2 1,3       02 03 04  
//  #       2,1 2,2 2,3       03 04 05
// # #      3,1 3,2 3,3       04 05 06
//
// N=4
// # #      1,1 1,2 1,3 1,4   02 03 04 05  
//  # #     2,1 2,2 2,3 2,4   03 04 05 06
// # #      3,1 3,2 3,3 3,4   04 05 06 07
//  # #     4,1 4,2 4,3 4,4   05 06 07 08

console.log(boardText(1))
//=>
// #

console.log(boardText(2))
//=>
// #
//  #

console.log(boardText(3))
//=>
// # #
//  #
// # #

console.log(boardText(4))
//=>
// # #
//  # #
// # #
//  # #
```

## Array
---

### Array Util (Min, Max, Range, Zip, Uniq)

[array/array.js](code/array/array.js)<br>
[array/array.test.js](code/array/array.test.js)

```js
// Min
let array = [1, 4, 2, 6, 10, 3]
console.log(min(array))
//=> 1

// Max
let array = [1, 4, 2, 6, 10, 3]
console.log(max(array))
//=> 10

// Range
console.log(range(10))
//=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(range(1, 11))
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(range(0, 30, 5))
//=> [0, 5, 10, 15, 20, 25]

// Zip
console.log(zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]))
//=> [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]

console.log(zip(['moe', 'larry'], [30, 40]))
//=> [["moe", 30], ["larry", 40]]

// Uniq
console.log(uniq([1, 2, 1, 4, 1, 3]))
//=> [1, 2, 4, 3]

console.log(uniq([1, 2, 1, 3, 3]))
//=> [1, 2, 3]
```

### Array Operations

[array/array-operations.js](code/array/array-operations.js)<br>
[array/array-operations.test.js](code/array/array-operations.test.js)

```js
// Sum
let array = [1, 2, 3]
console.log(sum(array))     //=> 6

array = [2, 2, 2]
console.log(sum(array))     //=> 6

array = [1, 2, 3, 4, 5, 6]
console.log(sum(array))     //=> 21

// Product
array = [1, 2, 3]
console.log(product(array)) //=> 6

array = [2, 2, 2]
console.log(product(array)) //=> 8

array = [1, 2, 3, 4, 5, 6]
console.log(product(array)) //=> 720

// Sum Odds
let array = [1, 2, 3]
console.log(sumOdds(array)) //=> 4

array = [2, 2, 2]
console.log(sumOdds(array)) //=> 0

array = [1, 2, 3, 4, 5, 6]
console.log(sumOdds(array)) //=> 9

// https://en.wikipedia.org/wiki/Matrix_(mathematics)#Addition.2C_scalar_multiplication_and_transposition
// Adding a Matrix by Another Matrix
// (A + B)i,j = Ai,j + Bi,j, where 1 ≤ i ≤ m and 1 ≤ j ≤ n.

let a = [[3, 8], [4, 6]]
let b = [[4, 0], [1, -9]]

console.log(sumMatrix(a, b)) //=> [[7, 8], [5, -3]]

// Multiplying a Matrix by Another Matrix
// SUM(r=1..n) Ai,r * Br,j, where 1 ≤ i ≤ m and 1 ≤ j ≤ p.

let a = [[1, 2, 3], [4, 5, 6]]
let b = [[7, 8], [9, 10], [11, 12]]

console.log(productMatrix(a, b)) //=> [[58, 64], [139, 154]]
```

### Fibonacci sequence array

[array/fibonacci-array.js](code/array/fibonacci-array.js)<br>
[array/fibonacci-array.test.js](code/array/fibonacci-array.test.js)

```js
console.log(fibonacci(4))   //=> [0, 1, 1, 2]
console.log(fibonacci(6))   //=> [0, 1, 1, 2, 3, 5]
```

### Prime Numbers Array

[array/prime-numbers.js](code/array/prime-numbers.js)<br>
[array/prime-numbers.test.js](code/array/prime-numbers.test.js)

```js
console.log(prime(4))       //=> [2, 3, 5, 7]
console.log(prime(6))       //=> [2, 3, 5, 7, 11, 13]
console.log(prime(2, 10))   //=> [2, 3, 5, 7]
console.log(prime(2, 20))   //=> [2, 3, 5, 7, 11, 13, 17, 19]
```

### Min withdraw

[array/min-withdraw.js](code/array/min-withdraw.js)<br>
[array/min-withdraw.test.js](code/array/min-withdraw.test.js)

```js
console.log(withdraw(1280)) //=> [[100, 12], [50, 1], [20, 1], [10, 1]]
console.log(withdraw(5705)) //=> [[100, 57], [5, 1]]
console.log(withdraw(892))  //=> [[100, 8], [50, 1], [20, 2], [2, 1]]
```

### Roman number

[array/roman-number.js](code/array/roman-number.js)<br>
[array/roman-number.test.js](code/array/roman-number.test.js)

```js
console.log(toRoman(1))     //=> I
console.log(toRoman(2))     //=> II
console.log(toRoman(3))     //=> III
console.log(toRoman(4))     //=> IV
console.log(toRoman(5))     //=> V
console.log(toRoman(6))     //=> VI
console.log(toRoman(9))     //=> IX
console.log(toRoman(27))    //=> XXVII
console.log(toRoman(48))    //=> XLVIII
console.log(toRoman(59))    //=> LIX
console.log(toRoman(93))    //=> XCIII
console.log(toRoman(141))   //=> CXLI
console.log(toRoman(163))   //=> CLXIII
console.log(toRoman(402))   //=> CDII
console.log(toRoman(575))   //=> DLXXV
console.log(toRoman(911))   //=> CMXI
console.log(toRoman(1024))  //=> MXXIV
console.log(toRoman(3000))  //=> MMM
```

### Prime Factors

[array/prime-factors.js](code/array/prime-factors.js)<br>
[array/prime-factors.test.js](code/array/prime-factors.test.js)

```js
console.log(primeFactors(1)           //=> []
console.log(primeFactors(2)           //=> [2]
console.log(primeFactors(3)           //=> [3]
console.log(primeFactors(4)           //=> [2, 2]
console.log(primeFactors(6)           //=> [2, 3]
console.log(primeFactors(8)           //=> [2, 2, 2]
console.log(primeFactors(9)           //=> [3, 3]
console.log(primeFactors(27)          //=> [3, 3, 3]
console.log(primeFactors(625)         //=> [5, 5, 5, 5]
console.log(primeFactors(901255)      //=> [5, 17, 23, 461]
console.log(primeFactors(93819012551) //=> [11, 9539, 894119]
```

### Products Array

[array/products.js](code/array/products.js)<br>
[array/products.test.js](code/array/products.test.js)

```js
const products = [
  ['Bicicleta', 1200.0],
  ['Capacete', 450.0]
]

console.log(total(products)) //=> 1650.0
```

> Dicas:<br>
> Use `map` ou `reduce`

### Products Array with Quantity

[array/products-qtd.js](code/array/products-qtd.js)<br>
[array/products-qtd.test.js](code/array/products-qtd.test.js)

```js
const products = [
  [1, 10.0, 2],
  [2, 10.0, 2],
  [3, 10.0, 2],
  [4, 10.0, 0]
]

console.log(gtZero(products))
//=>
// [
//   [1, 10.0, 2],
//   [2, 10.0, 2],
//   [3, 10.0, 2]
// ]

console.log(subTotal(products))
//=>
// [
//   [1, 20.0],
//   [2, 20.0],
//   [3, 20.0],
//   [4, 0.0]
// ]

console.log(total(products))
//=> 60.0
```

> Dicas:<br>
> Use `map`, `filter` ou `reduce`

## String
---

### List Generator

[string/list-generator.js](code/string/list-generator.js)<br>
[string/list-generator.test.js](code/string/list-generator.test.js)

```js
console.log(createList(5))
//=>
// <ul>
//   <li>Text 1</li>
//   <li>Text 2</li>
//   <li>Text 3</li>
//   <li>Text 4</li>
//   <li>Text 5</li>
// </ul>

console.log(createList(5, 'Item'))
//=>
// <ul>
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
//   <li>Item 4</li>
//   <li>Item 5</li>
// </ul>
```

### Table Generator

[string/table-generator.js](code/string/table-generator.js)<br>
[string/table-generator.test.js](code/string/table-generator.test.js)

```js
console.log(createTable(3, 4))
//=>
// 1.1 1.2 1.3 1.4
// 2.1 2.2 2.3 2.4
// 3.1 3.2 3.3 3.4


console.log(createTable(3, 4, 'Item'))
//=>
// Item 1.1 Item 1.2 Item 1.3 Item 1.4
// Item 2.1 Item 2.2 Item 2.3 Item 2.4
// Item 3.1 Item 3.2 Item 3.3 Item 3.4

console.log(createTableHTML(3, 4, 'Item'))
//=>
// <table>
//   <tr>
//     <td>Item 1.1</td>
//     <td>Item 1.2</td>
//     <td>Item 1.3</td>
//     <td>Item 1.4</td>
//   </tr>
//   <tr>
//     <td>Item 2.1</td>
//     <td>Item 2.2</td>
//     <td>Item 2.3</td>
//     <td>Item 2.4</td>
//   </tr>
//   <tr>
//     <td>Item 3.1</td>
//     <td>Item 3.2</td>
//     <td>Item 3.3</td>
//     <td>Item 3.4</td>
//   </tr>
// </table>
```

### String Util

[string/string-util.js](code/string/string-util.js)<br>
[string/string-util.test.js](code/string/string-util.test.js)

```js
console.log(formatter('lorem ipsum dolor', 'uppercase'))  //=> LOREM IPSUM DOLOR
console.log(formatter('LOREM IPSUM DOLOR', 'lowercase'))  //=> lorem ipsum dolor
console.log(formatter('LOREM IPSUM DOLOR', 'camelcase'))  //=> Lorem Ipsum Dolor
console.log(formatter('lorem ipsum dolor', 'snakecase'))  //=> lorem_ipsum_dolor
console.log(formatter('lorem ipsum dolor', 'reverse'))    //=> rolod muspi merol
console.log(formatter('lorem\nipsum dolor', 'countchar')) //=> 17
console.log(formatter('lorem\nipsum dolor', 'countword')) //=> 3
console.log(formatter('lorem\nipsum dolor', 'countline')) //=> 2
```

> Dicas:<br>
> String: toUpperCase(), toLowerCase(), split() <br>
> Array: join(), reverse()

### Simple Substitution

[string/simple-substitution.js](code/string/simple-substitution.js)<br>
[string/simple-substitution.test.js](code/string/simple-substitution.test.js)

```js
// https://simple.wikipedia.org/wiki/Leet
console.log(substitution('lorem ipsum', 'aegiost', '4361057'))   //=> l0r3m 1p5um
console.log(substitution('senha secreta', 'aegiost', '!@#$%&*')) //=> &@nh! &@cr@*!
```

> Dicas:<br>
> String: replace()

### Lorem Ipsum Generator

[string/lorem-ipsum-generator.js](code/string/lorem-ipsum-generator.js)<br>
[string/lorem-ipsum-generator.test.js](code/string/lorem-ipsum-generator.test.js)

```js
// https://www.lipsum.com/

// Lorem Ipsum Word Generator
console.log(ipsumWordGenerator(3)) //=> lorem ipsum dolor
console.log(ipsumWordGenerator(8)) //=> lorem ipsum dolor sit amet, consectetur adipisicing elit.

// Lorem Ipsum Paragraph Generator
console.log(ipsumParagraphGenerator(3))
//=>
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas, ex non blandit porta, ante lacus sollicitudin neque, eget placerat velit eros in sem. Aenean egestas, est nec faucibus varius, mi augue commodo nisi, quis aliquam turpis neque sit amet tellus. Quisque sed interdum nisi. Praesent pellentesque ipsum neque, nec laoreet augue vulputate vitae. Cras ac leo massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed diam neque, luctus a fermentum id, iaculis eget elit. Quisque ut pellentesque orci, sed consectetur sem. Suspendisse tristique, ligula ut eleifend laoreet, tortor sem consectetur est, in euismod turpis nisi in ex. Nulla auctor lacus sed nisl suscipit, eget accumsan dolor condimentum. Donec nibh ex, bibendum non finibus eu, auctor at mauris. Nullam auctor nibh non turpis dapibus posuere. Quisque at felis luctus, congue diam vitae, feugiat tellus. Donec ac mi nec neque euismod euismod ac nec metus. Suspendisse potenti. Nulla porta ex ante, sed elementum ipsum dapibus in.
// Cras volutpat consectetur vulputate. Fusce nec arcu eget arcu vestibulum malesuada at et risus. Donec sodales molestie ipsum eu semper. Nam felis arcu, finibus vitae congue vel, facilisis sit amet tellus. Aenean varius varius quam nec tempor. Donec accumsan nisi justo, eget convallis odio scelerisque at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque non ultrices lacus. Phasellus condimentum lectus ac justo sollicitudin, eu eleifend tellus vulputate. Cras lorem leo, consequat at enim id, pharetra rutrum sapien. Ut nulla velit, fermentum quis volutpat nec, facilisis ut eros.
// Aliquam tincidunt nibh ac tortor ullamcorper, at aliquet arcu sodales. Mauris vel maximus arcu. Nam feugiat est id sapien convallis scelerisque. Suspendisse molestie nunc turpis. Duis ut turpis ut nunc aliquet dignissim id eu nunc. Suspendisse lorem tortor, condimentum nec ante eget, commodo pretium felis. Phasellus tincidunt ex vel nibh convallis efficitur. Sed et enim in est egestas elementum.
console.log(ipsumParagraphGenerator(5))
//=>
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel erat nec arcu sodales aliquam. Proin eu ante in nisl commodo venenatis. Nam et consectetur felis. Cras tempus odio interdum erat placerat, nec interdum nibh commodo. Sed porttitor rutrum enim, eget convallis nunc egestas vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis tellus dolor, lobortis eu orci a, vulputate hendrerit orci. Duis at odio nulla.
// Aliquam in feugiat magna. Nulla convallis tempor auctor. Phasellus eget elementum velit. In ut auctor augue, vitae interdum felis. Morbi aliquam metus eget rhoncus tincidunt. Morbi mattis sapien massa, ut elementum dui consequat malesuada. Etiam eget semper sem. Aenean non purus ac neque bibendum luctus. Vivamus pharetra metus in imperdiet convallis.
// Praesent at leo non mauris ornare aliquet in vel justo. Donec sodales sit amet tellus eu pellentesque. Suspendisse quis neque varius, rutrum erat porta, feugiat urna. Vestibulum lobortis volutpat lacus, in dictum ex viverra a. Sed sollicitudin eu magna sit amet consequat. Ut lobortis cursus massa at tincidunt. Ut venenatis venenatis lectus ut finibus. Suspendisse vestibulum elit nisi, a fermentum ex rhoncus in. Quisque tincidunt commodo metus, a lacinia lacus blandit malesuada. Vivamus vitae efficitur lorem, eget consequat magna. Etiam non dignissim sem.
// Fusce at consectetur mauris. Suspendisse potenti. Phasellus vitae ullamcorper magna. Suspendisse faucibus lacinia lobortis. Pellentesque euismod odio non libero tempus, id venenatis metus viverra. Quisque quis efficitur massa. Nam tellus est, vestibulum at molestie at, tincidunt ut erat. Sed ut finibus purus. Mauris sed enim vitae velit vestibulum rhoncus. Nullam et tincidunt augue. Nunc vitae enim felis.
// Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla sit amet leo maximus, tempor neque nec, tristique nunc. Etiam pellentesque fringilla tellus nec imperdiet. Integer quis tempus tellus, a egestas felis. Quisque tempus ipsum in sapien viverra, vitae tempor nunc congue. Mauris et nulla sit amet ipsum vulputate bibendum eget sit amet nisi. Phasellus neque tortor, posuere sit amet quam nec, pellentesque ornare tortor. Aliquam consequat varius sollicitudin.
```

### Hamming

[string/hamming.js](code/string/hamming.js)<br>
[string/hamming.test.js](code/string/hamming.test.js)

```js
let dna1 = 'GGACG'
let dna2 = 'GGTCG'
              ˆ
console.log(hamming(dna1, dna2)) //=> 1

dna1 = 'GGACGGATTCTG'
dna2 = 'AGGACGGATTCT'
        ˆ ˆˆˆ ˆˆ ˆˆˆ
console.log(hamming(dna1, dna2)) //=> 9
```

### Rna Transcription

[string/rna-transcription.js](code/string/rna-transcription.js)<br>
[string/rna-transcription.test.js](code/string/rna-transcription.test.js)

```js
console.log(toRna('C'))             //=> G
console.log(toRna('G'))             //=> C
console.log(toRna('A'))             //=> U
console.log(toRna('T'))             //=> A
console.log(toRna('ACGTGGTCTTAA')) //=> UGCACCAGAAUU
```

### Citation

[string/citation.js](code/string/citation.js)<br>
[string/citation.test.js](code/string/citation.test.js)

```js
let name = 'Luiz Carlos Rodrigues Chaves'

console.log(citation(name))
//=> CHAVES; Luiz Carlos Rodrigues

console.log(compactCitation(name))
//=> CHAVES; L. C. R.
```

### Validing CPF

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

[string/validating-cpf.js](code/string/validating-cpf.js)<br>
[string/validating-cpf.test.js](code/string/validating-cpf.test.js)

```js
console.log(validateCPF('12345678909')) //=> true
```

### Cipher

[string/cipher.js](code/string/cipher.js)<br>
[string/cipher.test.js](code/string/cipher.test.js)

```js
console.log(rot('abc', 2))              //=> cde
console.log(rot('xyz', 2))              //=> zab
```

### IP

[string/ip.js](code/string/ip.js)<br>
[string/ip.test.js](code/string/ip.test.js)

```js
console.log(ip2decimal('192.168.0.1'))  //=> 3232235521
console.log(ip2decimal('192.168.0.2'))  //=> 3232235522

console.log(decimal2ip(3232235521))     //=> 192.168.0.1
console.log(decimal2ip(3232235522))     //=> 192.168.0.2
```

### Parser (String2Number)

[string/parser.js](code/string/parser.js)<br>
[string/parser.test.js](code/string/parser.test.js)

```js
let char = 'A'
let hexa = char.charCodeAt().toString(16)

console.log(hexa) //=> 41

char = '0x41'
hexa = String.fromCharCode(parseInt(char, 16))

console.log(hexa) //=> A

console.log(str2hex('AB'))                         //=> 41 42
console.log(str2hex('ABC'))                        //=> 41 42 43
console.log(hex2str('41 42'))                      //=> AB
console.log(hex2str('41 42 43'))                   //=> ABC

console.log(str2bin('AB'))                         //=> 01000001 01000010
console.log(str2bin('ABC'))                        //=> 01000001 01000010 01000011
console.log(bin2str('01000001 01000010'))          //=> AB
console.log(bin2str('01000001 01000010 01000011')) //=> ABC

console.log(str2dec('AB'))                         //=> 65 66
console.log(str2dec('ABC'))                        //=> 65 66 67
console.log(dec2str('65 66'))                      //=> AB
console.log(dec2str('65 66 67'))                   //=> ABC
```

### Table Convert .md to .html

[string/table-convert-md2html.js](code/string/table-convert-md2html.js)<br>
[string/table-convert-md2html.test.js](code/string/table-convert-md2html.test.js)

```js
const table =
`| Header One     | Header Two     |
| :------------- | :------------- |
| Item One       | Item Two       |`

console.log(tablemd2html(table))
//=>
// <table>
//   <thead>
//     <tr>
//       <th>Header One</th>
//       <th>Header Two</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>Item One</td>
//       <td>Item Two</td>
//     </tr>
//   </tbody>
// </table>
```

## Math
---

### Random

[math/random.js](code/math/random.js)<br>
[math/random.test.js](code/math/random.test.js)

```js
Math.random()
//=> 0.058464593778000395

console.log(random(0, 100))
//=> 42

let people = ['Fulano', 'Beltrano' , 'Sicrano']
console.log(randArray(people))
//=> Beltrano
```

## Object
---

### CEP

[object/cep.js](code/object/cep.js)<br>
[object/cep.test.js](code/object/cep.test.js)

```js
// https://viacep.com.br/ws/01001000/json/

let cep = {
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "complemento": "lado ímpar",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
  "unidade": "",
  "ibge": "3550308",
  "gia": "1004"
}

console.log(getInfo(cep))
//=>
// cep: 01001-000,
// logradouro: Praça da Sé,
// complemento: lado ímpar,
// bairro: Sé,
// localidade: São Paulo,
// uf: SP,
// unidade: ,
// ibge: 3550308,
// gia: 1004
```

### Products

[object/products.js](code/object/products.js)<br>
[object/products.test.js](code/object/products.test.js)

```js
const products = [
  {
    nome: 'Bicicleta',
    preco: 1200.0
  },
  {
    nome: 'Capacete',
    preco: 450.0
  }
]

console.log(total(products)) //=> 1650.0
```

> Dicas:<br>
> Use `map` ou `reduce`

### Products with Quantity

[object/products-qtd.js](code/object/products-qtd.js)<br>
[object/products-qtd.test.js](code/object/products-qtd.test.js)

```js
const products = [
  {
    id: 1,
    preco: 10.0,
    qtd: 2
  },
  {
    id: 2,
    preco: 10.0,
    qtd: 2
  },
  {
    id: 3,
    preco: 10.0,
    qtd: 2
  },
  {
    id: 4,
    preco: 10.0,
    qtd: 0
  }
]

console.log(gtZero(products))
//=>
// [
//   {
//     id: 1,
//     preco: 10.0,
//     qtd: 2
//   },
//   {
//     id: 2,
//     preco: 10.0,
//     qtd: 2
//   },
//   {
//     id: 3,
//     preco: 10.0,
//     qtd: 2
//   }
// ]

console.log(subTotal(products))
//=>
// [
//   {
//     id: 1,
//     subtotal: 20.0
//   },
//   {
//     id: 2,
//     subtotal: 20.0
//   },
//   {
//     id: 3,
//     subtotal: 20.0
//   },
//   {
//     id: 4,
//     subtotal: 0.0
//   }
// ]

console.log(total(products))
//=> 60.0
```

> Dicas:<br>
> Use `map`, `filter` ou `reduce`

### Comics

[object/comics.js](code/object/comics.js)<br>
[object/comics.test.js](code/object/comics.test.js)

```js
const characters = [
  {
    comics: 'Marvel',
    height: 1.78,
    link: [
      'http://marvel.com/characters/54/spider-man', 
      'http://marvel.com/universe/Spider-Man_(Peter_Parker)'
    ],
    name: 'Spider-Man',
    realName: 'Peter Benjamin Parker',
    weight: 76
  },
  {
    comics: 'Marvel',
    height: 2.44,
    link: [
      'http://marvel.com/characters/25/hulk',
      'http://marvel.com/universe/Hulk_(Bruce_Banner)'
    ],
    name: 'Hulk',
    realName: 'Robert Bruce Banner',
    weight: 635
  },
  {
    comics: 'DC',
    height: 1.91,
    link: [
      'http://www.dccomics.com/characters/superman',
      'http://dc.wikia.com/wiki/Superman_(Clark_Kent)'
    ],
    name: 'Superman',
    realName: 'Clark Joseph Kent',
    weight: 107
  },  
  {
    comics: 'DC',
    height: 1.88,
    link: [
      'http://www.dccomics.com/characters/batman',
      'http://dc.wikia.com/wiki/Bruce_Wayne_(New_Earth)'
    ],
    name: 'Batman',
    realName: 'Bruce Wayne',
    weight: 95
  }
]

console.log(names(characters, 'DC'))
//=> [ 'Superman', 'Batman' ]

console.log(weight(characters, 'DC'))
//=> 101
```

> Dicas:<br>
> Use `map`, `filter` ou `reduce`

### Exam

[object/exam/exam.js](code/object/exam/exam.js)<br>
[object/exam/exam.test.js](code/object/exam/exam.test.js)

```js
studend1 = {q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'b'}
studend2 = {q1: 'c', q2: 'b', q3: 'a', q4: 'c', q5: 'd'}
weight =   {q1:  2 , q2:  2 , q3:  2 , q4:  2 , q5:  2 }
answer =   {q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd'}

console.log(grade(studend1, weight, answer)) //=> 4
console.log(grade(studend2, weight, answer)) //=> 8

students = [
  {"student": "Fulano", "grade": 10},
  {"student": "Sicrano", "grade": 5},
  {"student": "Beltrano", "grade": 7},
]

console.log(avg(students))                   //=> 7.333333333333333
console.log(min(students))                   //=> 5
console.log(min(students, 2))                //=> [5, 7]
console.log(max(students))                   //=> 10
console.log(max(students))                   //=> 10
console.log(lt(students, 6))                 //=> [5]
console.log(gt(students, 6))                 //=> [7, 10]
```
**Desafio: Exam OO**

[object/exam-oo/exam-check.js](code/object/exam-oo/exam-check.js)<br>
[object/exam-oo/exam-stats.js](code/object/exam-oo/exam-stats.js)<br>
[object/exam-oo/exam.test.js](code/object/exam-oo/exam.test.js)

Exam Check<br>
<img src="assets/object-exam-check.svg" alt="Exam Check" width="300">

Exam Stats<br>
<img src="assets/object-exam-stats.svg" alt="Exam Stats" width="230">

### Order

<img src="assets/object-order.svg" alt="Order" width="300">

[object/order/product.js](code/object/order/product.js)<br>
[object/order/order.js](code/object/order/order.js)<br>
[object/order/order.test.js](code/object/order/order.test.js)

```js
// Products
let pencil = new Product(1, 'Lápis', 1.5)
let pen = new Product(2, 'Caneta', 3)
let notebook = new Product(3, 'Caderno', 20)

order = new Order()

order.addProduct(pencil)
order.addProduct(pencil)
order.addProduct(pen)
order.addProduct(notebook)

console.log(order.total()) //=> 26
```

### Order Category

<img src="assets/object-order-category.svg" alt="Order Category" width="300">

[object/order-category/product.js](code/object/order-category/product.js)<br>
[object/order-category/item.js](code/object/order-category/item.js)<br>
[object/order-category/order.js](code/object/order-category/order.js)<br>
[object/order-category/order.test.js](code/object/order-category/order.test.js)

```js
// Products
let pencil = new Product(1, 'Lápis', 1.5)
let pen = new Product(2, 'Caneta', 3)
let notebook = new Product(3, 'Caderno', 20)

order = new Order()

order.addProduct(pencil)
order.addProduct(pencil)
order.addProduct(pen)
order.addProduct(notebook)

console.log(order.total()) //=> 26
```

```js
// Products & Categories
let pencil = new Product(1, 'Lápis', 1.5, ['office'])
let pen = new Product(2, 'Caneta', 3, ['office'])
let notebook = new Product(3, 'Caderno', 20, ['office'])
let flashDrive = new Product(4, 'USB Flash Drive', 40, ['eletronics', 'office'])
let headPhone = new Product(5, 'Headphone', 40, ['eletronics'])

order = new Order()

order.addProduct(pencil)
order.addProduct(pencil)
order.addProduct(pen)
order.addProduct(notebook)
order.addProduct(flashDrive)
order.addProduct(flashDrive)
order.addProduct(headPhone)

console.log(order.toString())
//=>
// 1 Lápis      002 UN   1.50   3.00
// 2 Caneta     001 UN   3.00   3.00
// 3 Caderno    001 UN  20.00  20.00
// 4 USB Flash  002 UN  40.00  80.00
// 5 Headphone  001 UN  40.00  40.00

console.log(order.total())             //=> 146
console.log(order.total('eletronics')) //=> 120
console.log(order.total('office'))     //=> 106
```

### Brazilian Championship A Series 2016

Team | MP | W | D | L | GF | GA | GD | PTS
---- | -- | - | - | - | -- | -- | -- | ---
Palmeiras | 38 | 24 | 8 | 6 | 62 | 32 | 30 | 80
Santos | 38 | 22 | 5 | 11 | 59 | 35 | 24 | 71
Flamengo | 38 | 20 | 11 | 7 | 52 | 35 | 17 | 71
Atlético Mineiro | 38 | 17 | 11 | 10 | 61 | 53 | 8 | 62
Botafogo | 38 | 17 | 8 | 13 | 43 | 39 | 4 | 59
Atlético-PR | 38 | 17 | 6 | 15 | 38 | 32 | 6 | 57
Corinthians | 38 | 15 | 10 | 13 | 48 | 42 | 6 | 55
Ponte Preta | 38 | 15 | 8 | 15 | 48 | 52 | -4 | 53
Grêmio | 38 | 14 | 11 | 13 | 41 | 44 | -3 | 53
São Paulo | 38 | 14 | 10 | 14 | 44 | 36 | 8 | 52
Chapecoense | 38 | 13 | 13 | 12 | 49 | 56 | -7 | 52
Cruzeiro | 38 | 14 | 9 | 15 | 48 | 49 | -1 | 51
Fluminense | 38 | 13 | 11 | 14 | 45 | 45 | 0 | 50
Sport Recife | 38 | 13 | 8 | 17 | 49 | 55 | -6 | 47
Coritiba | 38 | 11 | 13 | 14 | 41 | 42 | -1 | 46
Vitória | 38 | 12 | 9 | 17 | 51 | 53 | -2 | 45
Internacional | 38 | 11 | 10 | 17 | 35 | 41 | -6 | 43
Figueirense | 38 | 8 | 13 | 17 | 30 | 50 | -20 | 37
Santa Cruz | 38 | 8 | 7 | 23 | 45 | 69 | -24 | 31
América-MG | 38 | 7 | 7 | 24 | 23 | 58 | -35 | 28

Legend: (MP) Matches played, (W) Wins, (D) Draws, (L) Losses, (GF) Goals for, (GA) Goals against, (GD) Goals difference, (PTS) Team points, (RC) Red Cards, (YC) Yellow Cards

Fonte: [League table](https://en.wikipedia.org/wiki/2016_Campeonato_Brasileiro_S%C3%A9rie_A)

Teams are ranked by PTS, W, GD, and GF. If points are equal between two or more clubs, the rules are W, GD, GF, head-to-head record, RC, YC.

**Code**

[object/brazilian-championship.js](code/object/brazilian-championship.js)<br>
[object/brazilian-championship.test.js](code/object/brazilian-championship.test.js)

```js
cont standings = // TODO

console.log(firstTeam(standings))
//=> Palmeiras

console.log(showStading(standings))
//=>
// Palmeiras        | 38 | 24 |  8 |  6 | 62 | 32 |  30 | 80
// Santos           | 38 | 22 |  5 | 11 | 59 | 35 |  24 | 71
// Flamengo         | 38 | 20 | 11 |  7 | 52 | 35 |  17 | 71
// Atlético Mineiro | 38 | 17 | 11 | 10 | 61 | 53 |   8 | 62
// Botafogo         | 38 | 17 |  8 | 13 | 43 | 39 |   4 | 59
// Atlético-PR      | 38 | 17 |  6 | 15 | 38 | 32 |   6 | 57
// Corinthians      | 38 | 15 | 10 | 13 | 48 | 42 |   6 | 55
// Ponte Preta      | 38 | 15 |  8 | 15 | 48 | 52 |  -4 | 53
// Grêmio           | 38 | 14 | 11 | 13 | 41 | 44 |  -3 | 53
// São Paulo        | 38 | 14 | 10 | 14 | 44 | 36 |   8 | 52
// Chapecoense      | 38 | 13 | 13 | 12 | 49 | 56 |  -7 | 52
// Cruzeiro         | 38 | 14 |  9 | 15 | 48 | 49 |  -1 | 51
// Fluminense       | 38 | 13 | 11 | 14 | 45 | 45 |   0 | 50
// Sport Recife     | 38 | 13 |  8 | 17 | 49 | 55 |  -6 | 47
// Coritiba         | 38 | 11 | 13 | 14 | 41 | 42 |  -1 | 46
// Vitória          | 38 | 12 |  9 | 17 | 51 | 53 |  -2 | 45
// Internacional    | 38 | 11 | 10 | 17 | 35 | 41 |  -6 | 43
// Figueirense      | 38 |  8 | 13 | 17 | 30 | 50 | -20 | 37
// Santa Cruz       | 38 |  8 |  7 | 23 | 45 | 69 | -24 | 31
// América-MG       | 38 |  7 |  7 | 24 | 23 | 58 | -35 | 28
```

## Date
---

### Diff Timestamp (ms)

[date/diff-timestamp.js](code/date/diff-timestamp.js)<br>
[date/diff-timestamp.test.js](code/date/diff-timestamp.test.js)

```js
let last = 1483239600000 // (new Date(2017, 0, 1)).getTime()
let now  = 1496762425846 // Date.now()

console.log(diffMonth(last, now)) //=> 5
```

## Regexp
---

### Text util

[regexp/text-util.js](code/regexp/text-util.js)<br>
[regexp/text-util.test.js](code/regexp/text-util.test.js)

```js
// Camel case
let message = 'lorem ipsum\ndolor'

console.log(message.toCamelCase())
//=> Lorem Ipsum\nDolor

// Apply bold
let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'

console.log(text.applyBold(, 'ipsum'))
//=> Lorem <b>ipsum</b> dolor sit amet, consectetur adipisicing elit
```

### Scanning Pattern

[regexp/scan-pattern.js](code/regexp/scan-pattern.js)<br>
[regexp/scan-pattern.test.js](code/regexp/scan-pattern.test.js)

```js
// CEP
let message = `Lorem ipsum 12345-123 dolor sit amet, 12345123 consectetur.`

console.log(cep(message)) //=> {count: 2, values: ['12345-123', '12345123']}

// Date
let message = `Lorem ipsum 01/01/2017 dolor sit amet, 2017-01-02 consectetur.`

console.log(date(message)) //=> {count: 2, values: ['01/01/2017', '02/01/2017']}
```

### Pattern Validator

[regexp/validator-pattern.js](code/regexp/validator-pattern.js)<br>
[regexp/validator-pattern.test.js](code/regexp/validator-pattern.test.js)

```js
// Valide o CPF primeiro usando o regex e depois o cálculo do dígito verificador
// http://ghiorzi.org/DVnew.htm

console.log(cpf('12345678909')) //=> true
```

### Search on Tools

```js
// Coloque esse texto no atom e veja se é possível procurar datas com RegExp
// http://matt.might.net/articles/sculpting-text/ (grep, awk, sed, vim, emacs)

let message = `Lorem ipsum 01/01/2017 dolor sit amet, 2017-01-02 consectetur.`
```

## Other Exercises

* [Exercism](http://exercism.io/languages/ecmascript/exercises)
* [Javscript Koan](https://github.com/mrdavidlaing/javascript-koans)
* [URI Online Judge](https://www.urionlinejudge.com.br/judge/en/categories)

<!-- 
  TODO
  https://rosettacode.org/wiki/Category:Programming_Tasks 
-->