### [Parser (String2Number)](code.zip)

```js
let char = 'A'
let hexa = char.charCodeAt().toString(16)

console.log(hexa) //=> 41

char = '0x41'
hexa = String.fromCharCode(parseInt(char, 16))

console.log(hexa) //=> A
```

`{{ page.path | replace:'README.md','' }}code/parser.mjs`:
```js
{% include_relative code/parser.js %}
```

`{{ page.path | replace:'README.md','' }}code/parser.print.mjs`:
```js
{% include_relative code/parser.print.mjs %}
```

> [Response](response/parser.js)
