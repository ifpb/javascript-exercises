const colorsContainer = document.querySelector('.colors tbody')

fetch('data/css-color-names.json')
  .then(res => res.json())
  .then(colors => {
    for (const colorName in colors) {
      const colorView = `<tr>
        <td>${colorName}</td>
        <td>${colors[colorName]}</td>
        <td style="background: ${colorName}"></td>
      </tr>`
      colorsContainer.insertAdjacentHTML('beforeend', colorView)
    }
  })