
// Filters
const collectAllFilter = character => true
const collectByComicsFilter = comics => character => character.comics === comics
const funFilter = comics => comics ? collectByComicsFilter(comics) : collectAllFilter

// Reduces
const sumWeight = (sum, character) => sum + character.weight

// Maps
const extractName = character => character.name

// Sorts
const sortDesWeight = (a, b) => b.weight - a.weight
const sortAscLowerText = (a, b) => {
  if (a.toLowerCase() > b.toLowerCase())
    return 1
  else if (a.toLowerCase() < b.toLowerCase())
    return -1
  else
    return 0
}
// Actions
function namesByComics(characters, comics) {
  return characters
    .filter(funFilter(comics))
    .map(extractName)
    .sort(sortAscLowerText)
}

function topWeightNames(characters, comics) {
  return characters
    .filter(funFilter(comics))
    .sort(sortDesWeight)
    .map(extractName)
}

function weight(characters, comics) {
  const charactersFilted = characters.filter(funFilter(comics))
  const weightTotal = charactersFilted.reduce(sumWeight, 0)
  return weightTotal / charactersFilted.length
}

// Export
export { namesByComics, topWeightNames, weight }