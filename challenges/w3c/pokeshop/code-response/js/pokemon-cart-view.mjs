import { getPokemon } from './pokemon-storage.mjs'
import { getCartItems, getCartItem, addCartItem, incrementCartItem, decrementCartItem, removeCartItem, countCart, totalCart } from './cart-storage.mjs'

function createCart() {
  const cartIcon = document.querySelector('.cart-button')
  cartIcon.onclick = () => activeCartView()

  document.body.insertAdjacentHTML('beforeend', `<div class="overlay hidden"></div>
  <aside class="cart-view hidden"></aside>`)
  document.querySelector('.overlay').addEventListener('click', () => hideCartView())

  loadCart()
}

function loadCart() {
  const cartCount = document.querySelector('.cart-count')
  const count = countCart()
  if (count) {
    cartCount.innerHTML = count
    cartCount.className = 'cart-count'
  } else {
    cartCount.className = 'cart-count hidden'
    hideCartView()
  }

  loadCartView()

  const cartClose = document.querySelector('.cart-view-title .icon-close')
  cartClose.onclick = () => hideCartView()
}

function loadCartView() {
  const cartView = document.querySelector('.cart-view')
  cartView.innerHTML = `<section class="cart-view-title">
      <i class="icon-close"></i>
      <span class="cart-view-count">SACOLA (${countCart()})</span>
    </section>
    <section class="cart-view-items"></section>
    <section class="cart-view-footer">
      <div class="cart-view-total">
        <span>Total a pagar</span><span>R$ ${totalCart().toFixed(2)}</span>
      </div>
      <button class="btn close-cart">FECHAR PAGAMENTO</button>
    </section>`
  pokemonCartItems()
}

function pokemonCartItems() {
  const cartViewItems = document.querySelector('.cart-view-items')
  Object.keys(getCartItems()).map(id => {
    cartViewItems.insertAdjacentHTML('beforeend', pokemonCartItem(getPokemon(id), getCartItem(id)))

    const itemMinus = cartViewItems.lastChild.querySelector('.item-minus')
    itemMinus.onclick = () => {
      decrementCartItem(id)
      loadCart()
    }

    const itemAdd = cartViewItems.lastChild.querySelector('.item-add')
    itemAdd.onclick = () => {
      incrementCartItem(id)
      loadCart()
    }

    const closeIcon = cartViewItems.lastChild.querySelector('.item-close .icon-close')
    closeIcon.onclick = () => {
      removeCartItem(id)
      loadCart()
    }
  })
}

function pokemonCartItem(pokemon, count) {
  return `<div class="item">
    <img class="item-img" src="${pokemon.image}" alt="${pokemon.name}">
    <span class="item-name">${pokemon.name}</span>
    <span class="item-close">
      <i class="icon-close"></i>
    </span>
    <div class="item-qtd">
      <span class="item-minus">-</span>
      <span class="item-count">${count}</span>
      <span class="item-add">+</span>
    </div>
    <span class="item-subtotal">R$ ${(count * pokemon.price).toFixed(2)}</span>
  </div>`
}

function activeCartView() {
  const cartView = document.querySelector('.cart-view')
  const overlay = document.querySelector('.overlay')

  cartView.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

function hideCartView() {
  const cartView = document.querySelector('.cart-view')
  const overlay = document.querySelector('.overlay')

  cartView.classList.add('hidden')
  overlay.classList.add('hidden')
}

export {
  createCart,
  loadCart,
  loadCartView,
  pokemonCartItems,
  pokemonCartItem,
  activeCartView,
  hideCartView
}