let imoveisElements
let warning

// Filters
function loadFilters() {
  const inputs = Array.from(document.querySelectorAll('input'))
  inputs.map(i => {
    i.addEventListener('keyup', () => {
      filtrandoImoveis(...inputs.map(i => i.value || 0))
    })
  })
}

function filtrandoImoveis(neighborhood, squareMeters, beds, baths, minPrice, maxPrice) {
  warning.classList.remove('hidden')
  imoveisElements.forEach(i => {
    const valido = imovelValido(i,
      neighborhood,
      parseFloat(squareMeters),
      parseFloat(beds),
      parseFloat(baths),
      parseFloat(minPrice),
      parseFloat(maxPrice)
    )
    if (valido) {
      i.style.display = 'grid'
      warning.classList.add('hidden')
    } else {
      i.style.display = 'none'
    }
  })
}

function imovelValido(i, neighborhood, squareMeters, beds, baths, minPrice, maxPrice) {
  const search = new RegExp(neighborhood, 'i')
  const checkNeighborhood = neighborhood ? search.test(i.dataset.neighborhood) : true
  const checkSquaremeters = parseFloat(i.dataset.squaremeters) >= squareMeters
  const checkBeds = parseFloat(i.dataset.beds) >= beds
  const checkBaths = parseFloat(i.dataset.baths) >= baths
  const checkPrice = (minPrice && maxPrice) ? 
    parseFloat(i.dataset.price) >= minPrice &&
    parseFloat(i.dataset.price) <= maxPrice :
    minPrice ? 
    parseFloat(i.dataset.price) >= minPrice : 
    maxPrice ?
    parseFloat(i.dataset.price) <= maxPrice :
    true

  return checkNeighborhood &&
    checkSquaremeters &&
    checkBeds &&
    checkBaths &&
    checkPrice
}

// View
function exibeImoveis(imoveis) {
  const imoveisView = document.querySelector('.imoveis')
  imoveis.map(i => imoveisView.insertAdjacentHTML('beforeend', exibeImovel(i)))
  imoveisElements = Array.from(imoveisView.childNodes);
  imoveisView.insertAdjacentHTML('beforeend', '<div class="warning">Nenhum imóvel foi encontrado.</div>')
  warning = imoveisView.lastChild
  warning.classList.add('hidden')
}

function exibeImovel(imovel) {
  return `<div class="imovel" 
               data-neighborhood="${imovel.neighborhood}" 
               data-squaremeters="${imovel.squareMeters}" 
               data-beds="${imovel.beds}" 
               data-baths="${imovel.baths}" 
               data-price="${imovel.price}">
      <div class="resumo">
        <span class="id">ID. ${imovel.id}</span>
        <h2 class="title">${imovel.title}</h2>
        <div class="description">${imovel.description}</div>
        <h3 class="title">${imovel.neighborhood}</h3>
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

export {
  loadFilters,
  exibeImoveis
}