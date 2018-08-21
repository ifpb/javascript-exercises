import { getPokemon } from './pokemon-storage.mjs'

const cart = {}

function getCartItems() {
  return cart
}

function getCartItem(id) {
  return cart[id]
}

function addCartItem(id) {
  if (cart[id])
    cart[id] += 1
  else
    cart[id] = 1
}

function incrementCartItem(id) {
  cart[id]++
}

function decrementCartItem(id) {
  cart[id]--
  if (cart[id] === 0)
    removeCartItem(id)
}

function removeCartItem(id) {
  delete cart[id]
}

function countCart() {
  return Object.values(cart)
          .reduce((sum, count) => count + sum, 0)
}

function totalCart() {
  return Object.keys(cart)
          .reduce((sum, id) => sum + getPokemon(id).price * getCartItem(id), 0)
}

export {
  getCartItems,
  getCartItem,
  addCartItem,
  incrementCartItem,
  decrementCartItem,
  removeCartItem,
  countCart,
  totalCart
}