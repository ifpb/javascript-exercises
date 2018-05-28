# BMI CSS

## Description
---

![](assets/bmi.svg)

| Status | BMI Woman | BMI Man | Classes (input#imc) |
|-|-|-|-|
| Abaixo do Peso | < 19,1 | < 20,7 | border border-warning bg-warning text-white |
| Peso Normal | 19,1 - 25,8 | 20,7 - 26,4 | border border-sucess bg-success text-white |
| Marginalmente Acima do Peso | 25,8 - 27,3 | 26,4 - 27,8 | border border-warning bg-warning text-white |
| Acima do Peso Ideal | 27,3 - 32,3 | 27,8 - 31,1 | border border-warning bg-warning text-white |
| Obeso | > 32,3 | > 31,1 | border border-danger bg-danger text-white |

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

Show input value:
```js
const alturaElemento = document.querySelector('input[name=altura]')
const altura = alturaElemento.value
console.log(altura)
```

Change input value:
```js
const imcElemento = document.querySelector('#imc')
imcElemento.value = 'lorem ipsum'
```

Click event:
```js
const button = document.querySelector('button')

button.addEventListener('click', function() {
  // TODO
})
```

Key event:
```js
document.addEventListener('keyup', function(event) {
  if (event.key == 'Escape') {
    // TODO
  } else if (event.key == 'Enter') {
    // TODO
  }
})
```

[Set attribute](https://ifpb.github.io/javascript-guide/w3c/dom/html-element.html#htmlelementstyle):
```js
const imc = document.querySelector('#imc')
imc.setAttribute('class', 'border border-warning bg-warning text-white')
```

## Interface
---

Code: [code.zip](code.zip)

![](assets/layout.gif)

> [Response alternative](code-response/)