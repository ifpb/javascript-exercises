import { getPokemons } from './pokemon-storage.mjs'
import { addCartItem } from './cart-storage.mjs'
import { loadCart } from './pokemon-cart-view.mjs'

function createPokemonsCards() {
  const pokemons = document.querySelector('#pokemons')
  
  getPokemons().forEach((p, id) => {
    pokemons.insertAdjacentHTML('beforeend', pokemonCard(p))
    
    const shopBtn = pokemons.lastChild.querySelector('.pokemon-view-shop')
    shopBtn.onclick = (event) => {
      event.target.blur()
      addCartItem(id)
      loadCart()
    }
  })
}

function pokemonCard(pokemon) {
  return `<div class="pokemon-view">
    <img class="pokemon-view-img" src="${pokemon.image}" alt="${pokemon.name}">
    <span class="pokemon-view-name">${pokemon.name}</span>
    <span class="pokemon-view-price">R$ ${pokemon.price.toFixed(2)}</span>
    <button class="pokemon-view-shop">COMPRAR</button>
  </div>`
}

export {
  createPokemonsCards
}