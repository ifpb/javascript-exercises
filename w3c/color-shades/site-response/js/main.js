const colorContainer = document.querySelector('.colors')

fetch('data/shades.json')
  .then(res => res.json())
  .then(shades => {
    for (const shade in shades) {
      const shadeView = `<div class="shade">${shade}</div>`
      colorContainer.insertAdjacentHTML('beforeend', shadeView)
      for(const color of shades[shade]) {
        const colorView = `<div class="color" style="background-color: ${color.color}">
          <div>${color.name}<div>
          <div>${color.color}<div>
        </div>`
        colorContainer.insertAdjacentHTML('beforeend', colorView)
      }
    }
  })