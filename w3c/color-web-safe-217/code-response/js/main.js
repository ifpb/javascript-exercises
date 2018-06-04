const colorsContainer = document.querySelector('.colors')

for (let colorRed = 0x0; colorRed <= 0xff; colorRed += 0x33) {
  for (let colorGreen = 0x0; colorGreen <= 0xff; colorGreen += 0x33) {
    for (let colorBlue = 0x0; colorBlue <= 0xff; colorBlue += 0x33) {
      const red = colorRed.toString(16).padStart(2, '0')
      const green = colorGreen.toString(16).padStart(2, '0')
      const blue = colorBlue.toString(16).padStart(2, '0')
      const color = `#${red}${green}${blue}`
      const style = `background-color: ${color}`
      const colorView = `<div class="color" style="${style}">${color}</div>`
      colorsContainer.insertAdjacentHTML('beforeend', colorView)
    }
  }
}