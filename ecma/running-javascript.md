# How to run javascript

## Node.js (terminal)
---
Installing Node by [nvm](https://github.com/creationix/nvm):
```
$ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

Node LTS:
```
$ nvm install lts
$ nvm alias default lts
```

Node Stable:
```
$ nvm install stable
$ nvm alias default stable
```

Node Prompt:
```
$ node
> (ctrl + v file)
```

Running by file:
```
$ cd javascript-exercises/ecma/basic/bmi/code/
$ node bmi-if.mjs
```

Running by file (Modules):
```
$ cd javascript-exercises/ecma/function/sum/code/
$ mv sum.{js,mjs)
$ node --experimental-modules sum.print.mjs
```

## Browser Console
---

```
Control+Shift+J (Google Chrome)
> (ctrl + v file)
```

## Online Interpreter
---

[https://repl.it/](https://repl.it/)
```
Open [https://repl.it/](https://repl.it/)
> Choose language: Javascript
> (ctrl + v file)
> Run button
```

## Visual Studio Code
---

(run, debug, jest, chrome)

## Unit Test (Jest)
---

Installing Jest (package.json):
```
$ cd javascript-exercises/ecma/
$ ls package.json
package.json
$ npm install
```

Rename file extension to `.js`:
```
$ mv function/sum/code/sum.{mjs,js}
```

Running Tests and Viewing Results (test fail):
```
$ npx jest function/sum/code/sum.test.js
 FAIL  function/sum/code/sum.test.js
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

      at Object.<anonymous> (function/sum/code/sum.test.js:6:23)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 skipped, 2 total
Snapshots:   0 total
Time:        2.689s
Ran all test suites matching /code\/function\/sum.test.js/i.
```

Running Tests and Viewing Results (test passed):
```
$ npx jest function/sum/code/sum.test.js
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

Running Tests and Viewing Results (Automatic)
```
$ npx jest --watch function/sum/code/sum.test.js
```

Running Tests and Viewing Results (Coverage)
```
$ npx jest --coverage code/ 
```