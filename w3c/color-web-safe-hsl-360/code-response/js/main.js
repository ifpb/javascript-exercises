const colorsContainer = document.querySelector('.colors')

for (let hue = 0; hue < 360; hue += 1) {
  const color = `hsl(${hue},50%,50%)`
  const style = `background-color: ${color}`
  const colorView = `<div class="color" style="${style}">${hue}</div>`
  colorsContainer.insertAdjacentHTML('beforeend', colorView)
}