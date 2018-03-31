### Parser (String2Number)

```js
let char = 'A'
let hexa = char.charCodeAt().toString(16)

console.log(hexa) //=> 41

char = '0x41'
hexa = String.fromCharCode(parseInt(char, 16))

console.log(hexa) //=> A
```

`ecma/code/string/parser.mjs`:
```js
{% include ecma/code/string/parser.js %}
```

`ecma/code/string/parser.print.mjs`:
```js
{% include ecma/code/string/parser.print.mjs %}
```
