import { createPokemonsCards } from './pokemon-card-view.mjs'
import { createCart } from './pokemon-cart-view.mjs'
import { storePokemons, getPokemons } from './pokemon-storage.mjs'
import { createNavTop } from './nav-to-top.mjs'
import { createToolbar } from './toolbar.mjs'

loadPokemons()

function loadPokemons() {
  fetch('data/pokeshop.json')
    .then(res => res.json())
    .then(json => {
      storePokemons(json)
      createPokemonsCards(getPokemons())
      createCart()
      createNavTop()
      createToolbar()
    })
}