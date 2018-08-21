const pokemons = []

function storePokemons(data) {
  data.forEach(p => {
    p.image = `img/pokemon/${p.name.toLowerCase().replace(/\'/g, '')}.png`
    pokemons.push(p)
  })
}

function getPokemons() {
  return pokemons
}

function getPokemon(id) {
  return pokemons[id]
}

export {
  storePokemons,
  getPokemons,
  getPokemon
}