const pokemonsContainer = document.querySelector('#pokemons')
const navTop = document.querySelector('.nav-top')
const cartIcon = document.querySelector('.cart')
const cartCount = document.querySelector('.cart-count')
const cartPopperView = document.querySelector('.cart-popper')
const cartPopperContent = document.querySelector('.cart-popper .content')
const cart = {}
let pokemons = []

loadPokemonsData()
loadNavTop()
loadPopperCart()

function loadPokemonsData() {
  fetch('data/pokeshop.json')
    .then(res => res.json())
    .then(json => loadPokemonsPreview(json))
}

function loadPokemonsPreview(data) {
  pokemons = pokemons.concat(data)
  pokemons.forEach((p, id) => {
    pokemonsContainer.insertAdjacentHTML('beforeend', getPokemonPreview(p))
    pokemonsContainer.lastChild.querySelector('.pokemon-view-shop').onclick = (event) => {
      event.target.blur()
      addCart(id)
    }
  })
}

function getPokemonPreview(pokemon) {
  return `<div class="pokemon-view">
    <img class="pokemon-view-img" src="${pokemon.img}" alt="${pokemon.name}">
    <span class="pokemon-view-name">${pokemon.name}</span>
    <span class="pokemon-view-price">R$ ${pokemon.price.toFixed(2)}</span>
    <button class="pokemon-view-shop">COMPRAR</button>
  </div>`
}

function addCart(id) {
  if (cart[id])
    cart[id] += 1
  else
    cart[id] = 1
  updatePopperCart()
}

function loadNavTop() {
  navTop.addEventListener('click', () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
      left: 0
    })
  })

  document.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight * 1/3) {
      navTop.className = 'nav-top'
    } else {
      navTop.className = 'nav-top hidden'
    }
  })
}

function loadPopperCart() {
  cartPopper = new Popper(cartIcon, cartPopperView, {
    placement: 'bottom'
  })
  cartIcon.addEventListener('click', () => {
    cartPopperView.classList.toggle('hidden')
  })
}

function updatePopperCart() {
  cartPopperContent.innerHTML = Object.keys(cart)
    .map(id => `<div class="item">
      <span class="item-name">${pokemons[id].name}</span>
      <span class="item-qtd">${cart[id]}</span>
      <span class="item-subtotal">R$ ${(pokemons[id].price * cart[id]).toFixed(2)}</span>
    </div>`)
    .join('')
  const count = Object.keys(cart).length
  if (count) {
    cartCount.innerHTML = count
    cartCount.className = 'cart-count'
  } else {
    cartCount.className = 'cart-count hidden'
  }
}