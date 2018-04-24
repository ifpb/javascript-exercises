### Node.js (terminal)

```
$ cd javascript-exercises/_includes/ecma/code/basic/
$ node bmi-if.mjs
```

```
$ cd javascript-exercises/_includes/ecma
$ node
> (ctrl + v)
```

### Browser Console

```
Control+Shift+J (Google Chrome)
> (ctrl + v)
```

### Online Interpreter

[https://repl.it/](https://repl.it/) (ctrl + v)

### vscode 

(run, debug, jest, chrome)

### Node.js (Node Carbon)

```
$ cd javascript-exercises/_includes/ecma/code/function/
$ mv sum.{js,mjs)
$ node --experimental-modules sum.print.mjs
```

### Unit Test (Jest)

```
$ cd javascript-exercises/_includes/ecma
$ npm install
```

```
$ mv code/function/sum.{mjs,js}
```

```
$ npx jest code/function/sum.test.js
 FAIL  code/function/sum.test.js
  Number Tools
    ✕ adding 1 + 2 (12ms)
    ○ skipped 1 test

  ● Number Tools › adding 1 + 2

    expect(received).toBe(expected) // Object.is equality

    Expected value to be:
      3
    Received:
      undefined

    Difference:

      Comparing two different types of values. Expected number but received undefined.

      4 |
      5 |   test('adding 1 + 2', () => {
    > 6 |     expect(sum(1, 2)).toBe(3)
      7 |   })
      8 |
      9 |   test.skip('adding 3 + 2', () => {

      at Object.<anonymous> (code/function/sum.test.js:6:23)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 skipped, 2 total
Snapshots:   0 total
Time:        2.689s
Ran all test suites matching /code\/function\/sum.test.js/i.
```

```
$ npx jest code/function/sum.test.js
 PASS  response/function/sum.test.js
  Number Tools
    ✓ adding 1 + 2 (5ms)
    ✓ adding 3 + 2

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.594s
Ran all test suites matching /response\/function\/sum.test.js/i.
```

```
$ npx jest --watch code/function/sum.test.js
```

```
$ npx jest --coverage code/ 
```