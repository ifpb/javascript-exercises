# Color Names

## Description
---

* [MDN - Colors](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

## Trips
---

Color Names Data ([data/css-color-names.json](code/data/css-color-names.json)):
```js
const colors = {
  "aliceblue": "#f0f8ff",
  "antiquewhite": "#faebd7",
  "aqua": "#00ffff",
  "aquamarine": "#7fffd4",
  ...
}
```

Insert color:
```js
const colorsContainer = document.querySelector('.colors')

const colorView = `<tr>
  <td>colorName</td>
  <td>colors[colorName]</td>
  <td style="background: colorName"></td>
</tr>`
colorsContainer.insertAdjacentHTML('beforeend', colorView)
```

## Interface
---

[code.zip](code.zip)

![](assets/layout.png)

> [Response alternative](code-response/)