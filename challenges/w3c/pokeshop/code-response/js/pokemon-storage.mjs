const pokemons = []

function storePokemons(data) {
  data.forEach(p => {
    p.image = `img/pokemon/${p.name.toLowerCase().replace(/\'/g, '').replace(/\. /g, '-')}.png`
    pokemons.push(p)
  })
}

function getPokemons(sorting, typeFilters, offset = 12) {
  let collection
  if (sorting == 'name') {
    collection = pokemons.sort((a, b) => a.name.localeCompare(b.name))
  } else if (sorting == 'highestPrice') {
    collection = pokemons.sort((a, b) => {
      const diff = a.price - b.price
      return diff === 0 ? a.name.localeCompare(b.name) : diff
    })
  } else if (sorting == 'lowestPrice') {
    collection = pokemons.sort((a, b) => {
      const diff = -1 * (a.price - b.price)
      return diff === 0 ? a.name.localeCompare(b.name) : diff
    })
  } else {
    collection = pokemons.sort((a, b) => a.id - b.id)
  }
  collection = typeFilters && typeFilters.length > 0 ? collection.filter(p => p.type.some(t => typeFilters.includes(t))) : collection
  collection = offset === 'all' ? collection : collection.slice(0, offset)
  return collection
}

function getPokemon(id) {
  return pokemons[id]
}

export {
  storePokemons,
  getPokemons,
  getPokemon
}