const imoveisView = document.querySelector('.imoveis')
const inputs = Array.from(document.querySelectorAll('input'))

exibeImoveis(imoveis)

inputs.map(i => {
  i.addEventListener('keyup', () => {
    filtrandoImoveis(...inputs.map(i => i.value || 0))
  })
})

function filtrandoImoveis(squareMeters, beds, baths, price) {
    const filter = imoveis
      .filter(i => {
        return i.squareMeters >= squareMeters && 
        i.beds >= beds && 
        i.baths >= baths && 
        i.price >= price
      })
    exibeImoveis(filter)
}

function exibeImoveis(imoveis) {
  imoveisView.innerHTML = ''
  imoveis.map(i => imoveisView.insertAdjacentHTML('beforeend', exibeImovel(i)))
}

function exibeImovel(imovel) {
  return `<div class="imovel">
      <div class="resumo">
        <span class="id">ID. ${imovel.id}</span>
        <h2 class="title">${imovel.title}</h2>
        <div class="description">${imovel.description}</div>
      </div>
      <div class="info">
        <div class="infoItem squareMeter">
          <img class="logo" src="img/logo/shape.svg" alt="logo">
          <div class="value">${imovel.squareMeters} M²</div>
        </div>
        <div class="infoItem bath">
          <img class="logo" src="img/logo/toilet.svg" alt="logo">
          <div class="value">${imovel.baths} BANHEIROS</div>
        </div>
        <div class="infoItem bed">
          <img class="logo" src="img/logo/bed.svg" alt="logo">
          <div class="value">${imovel.beds} QUARTOS</div>
        </div>
        <div class="price">R$ ${imovel.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
      </div>
    </div>`
}