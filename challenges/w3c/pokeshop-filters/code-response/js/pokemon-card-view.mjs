import { addCartItem } from './cart-storage.mjs'
import { loadCart } from './pokemon-cart-view.mjs'

function createPokemonsCards(pokemonSet) {
  const pokemonCards = document.querySelector('.pokemon-cards')
  
  pokemonCards.innerHTML = ''
  pokemonSet.forEach((p, id) => {
    pokemonCards.insertAdjacentHTML('beforeend', pokemonCard(p))
    
    const shopBtn = pokemonCards.lastChild.querySelector('.pokemon-card-shop')
    shopBtn.onclick = (event) => {
      event.target.blur()
      addCartItem(id)
      loadCart()
    }
  })
}

function pokemonCard(pokemon) {
  return `<div class="pokemon-card">
    <img class="pokemon-card-img" src="${pokemon.image}" alt="${pokemon.name}">
    <span class="pokemon-card-id">#${pokemon.id}</span>
    <span class="pokemon-card-name">${pokemon.name}</span>
    <span class="pokemon-card-price">R$ ${pokemon.price.toFixed(2)}</span>
    <button class="pokemon-card-shop">COMPRAR</button>
  </div>`
}

export {
  createPokemonsCards
}