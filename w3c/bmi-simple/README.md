# BMI

## Description
---

| Status | IMC Woman | IMC Man |
|-|-|-|
| Abaixo do Peso | < 19,1 | < 20,7 |
| Peso Normal | 19,1 - 25,8 | 20,7 - 26,4 |
| Marginalmente Acima do Peso | 25,8 - 27,3 | 26,4 - 27,8 |
| Acima do Peso Ideal | 27,3 - 32,3 | 27,8 - 31,1 |
| Obeso | > 32,3 | > 31,1 |

## Tips
---

Query element (`<input type="text" name="altura">`):
```js
const alturaElemento = document.querySelector('input[name=altura]')
```

Query input checked:
```js
const sexoElemento = document.querySelector('input:checked')
```

Show input content:
```js
const alturaElemento = document.querySelector('input[name=altura]')
const altura = alturaElemento.value
console.log(altura)
```

Change input content:
```js
const imcElemento = document.querySelector('#imc')
imcElemento.value = 'lorem ipsum'
```

Click event:
```html
 <button onclick="calculadoraDeIMC()">
```

```js
function calculadoraDeIMC() {
  // TODO
}
```

## Interface
---

Code: [code.zip](code.zip)

![](assets/layout.gif)

> [Response alternative](code-response/)