const imoveisView = document.querySelector('.imoveis')
const inputs = Array.from(document.querySelectorAll('input'))
let imoveisElements

exibeImoveis(imoveis)

inputs.map(i => {
  i.addEventListener('keyup', () => {
    filtrandoImoveis(...inputs.map(i => i.value || 0))
  })
})

function imovelValido(i, squareMeters, beds, baths, price) {
  return parseFloat(i.dataset.squaremeters) >= parseFloat(squareMeters) &&
    parseFloat(i.dataset.beds) >= parseFloat(beds) &&
    parseFloat(i.dataset.baths) >= parseFloat(baths) &&
    parseFloat(i.dataset.price) >= parseFloat(price)
}

function filtrandoImoveis(squareMeters, beds, baths, price) {
  imoveisElements.forEach(i => {
    if (imovelValido(i, squareMeters, beds, baths, price))
      i.style.display = 'grid'
    else
      i.style.display = 'none'
  })
}

function exibeImoveis(imoveis) {
  imoveisView.innerHTML = ''
  imoveis.map(i => imoveisView.insertAdjacentHTML('beforeend', exibeImovel(i)))
  imoveisElements = Array.from(imoveisView.childNodes);
  // imoveisView.insertAdjacentHTML('beforeend', '<div class="warning">Nenhum imóvel foi encontrado</div>')
}

function exibeImovel(imovel) {
  return `<div class="imovel" 
               data-squaremeters="${imovel.squareMeters}" 
               data-beds="${imovel.beds}" 
               data-baths="${imovel.baths}" 
               data-price="${imovel.price}">
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