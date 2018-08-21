import { createPokemonsCards } from './pokemon-card-view.mjs'
import { createCart } from './pokemon-cart-view.mjs'
import { storePokemons } from './pokemon-storage.mjs'
import { createNavTop } from './nav-to-top.mjs'

loadPokemons()

function loadPokemons() {
  fetch('data/pokeshop.json')
    .then(res => res.json())
    .then(json => {
      storePokemons(json)
      createPokemonsCards()
      createCart()
      createNavTop()
    })
}