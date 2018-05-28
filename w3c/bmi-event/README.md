# BMI Event

## Description
---

![](assets/bmi.svg)

| Status | BMI Woman | BMI Man |
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

## Interface
---

Code: [code.zip](code.zip)

![](assets/layout.gif)

> [Response alternative](code-response/)