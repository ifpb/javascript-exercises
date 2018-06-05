const colorsContainer = document.querySelector('.colors')

for (let saturation of [25, 50, 75, 100]) {
  for (let lightness of [50]) {
    for (let hue = 0; hue < 360; hue += 24) {
      const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`
      const style = `background-color: ${color}`
      const colorView = `<div class="color" style="${style}">${color}</div>`
      colorsContainer.insertAdjacentHTML('beforeend', colorView)
    }
  }
}