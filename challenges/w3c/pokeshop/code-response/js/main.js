const pokemonsContainer = document.querySelector('#pokemons')
const cartCount = document.querySelector('.cart-count')
const cartView = document.querySelector('.cart-view')
const cartViewCount = document.querySelector('.cart-view-count')
const cartViewItems = document.querySelector('.cart-view-items')
const cartViewTotal = document.querySelector('.cart-view-total')
const overlay = document.querySelector('.overlay')
const cart = {}
let pokemons = []

loadPokemons()
loadCartAction()

function loadPokemons() {
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
  updateCart()
}

function loadCartAction() {
  const cartIcon = document.querySelector('.cart')
  const cartClose = document.querySelector('.cart-view-title .close')
  
  overlay.addEventListener('click', () => hideCardView())
  cartIcon.addEventListener('click', () => activeCardView())
  cartClose.addEventListener('click', () => hideCardView())
}

function activeCardView() {
  cartView.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

function hideCardView() {
  cartView.classList.add('hidden')
  overlay.classList.add('hidden')
}

function updateCart() {
  cartViewItems.innerHTML = ''

  const count = Object.values(cart).reduce((sum, count) => count + sum, 0)
  if (count) {
    cartCount.innerHTML = count
    cartViewCount.innerHTML = `SACOLA (${count})`
    cartCount.className = 'cart-count'
  } else {
    cartCount.className = 'cart-count hidden'
    hideCardView()
  }

  Object.keys(cart).map(id => {
    if (cart[id] > 0) {
      cartViewItems.insertAdjacentHTML('beforeend', getPokemonItem(pokemons[id], cart[id]))
      const itemMinus = cartViewItems.lastChild.querySelector('.item-minus')
      itemMinus.onclick = () => {
        cart[id]--
        updateCart()
      }
      const itemAdd = cartViewItems.lastChild.querySelector('.item-add')
      itemAdd.onclick = () => {
        cart[id]++
        updateCart()
      }
      const closeIcon = cartViewItems.lastChild.querySelector('.item-close .close')
      closeIcon.onclick = () => {
        cart[id] = 0
        updateCart()
      }
    }
  })

  const total = Object.keys(cart).reduce((sum, id) => sum + pokemons[id].price * cart[id], 0)
  cartViewTotal.innerHTML = `<span>Total a pagar</span><span>R$ ${total.toFixed(2)}</span>`
}

function getPokemonItem(pokemon, count) {
  return `<div class="item">
    <img class="item-img" src="${pokemon.img}" alt="${pokemon.name}">
    <span class="item-name">${pokemon.name}</span>
    <span class="item-close">
      <i class="icon close"></i>
    </span>
    <div class="item-qtd">
      <span class="item-minus">-</span>
      <span class="item-count">${count}</span>
      <span class="item-add">+</span>
    </div>
    <span class="item-subtotal">R$ ${(count * pokemon.price).toFixed(2)}</span>
  </div>`
}

// Nav to top
loadNavTop()

function loadNavTop() {
  const navTop = document.querySelector('.nav-top')
  navTop.addEventListener('click', () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
      left: 0
    })
  })

  document.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight * 1 / 3) {
      navTop.className = 'nav-top'
    } else {
      navTop.className = 'nav-top hidden'
    }
  })
}