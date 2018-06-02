const colorsContainer = document.querySelector('.colors')
const reds = [0x33, 0x66, 0xff]
const greens = [0x00, 0x33, 0x66, 0x99, 0xcc, 0xff]
const blues = [0x00, 0x33, 0x66, 0x99, 0xcc, 0xff]

for (let colorRed of reds) {
  for (let colorGreen of greens) {
    for (let colorBlue of blues) {
      const red = colorRed.toString(16).padStart(2, '0')
      const green = colorGreen.toString(16).padStart(2, '0')
      const blue = colorBlue.toString(16).padStart(2, '0')
      const color = `#${red}${green}${blue}`
      const style = `background-color: ${color}`
      const colorView = `<div class="color" style="${style}">${color}</div>`
      colorsContainer.insertAdjacentHTML('beforeend', colorView)
    }
  }
  greens.reverse()
}