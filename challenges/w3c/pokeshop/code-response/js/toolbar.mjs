import { getPokemons } from './pokemon-storage.mjs'
import { createPokemonsCards } from './pokemon-card-view.mjs'

let sortSelected
let sortingMethod
let typeFilters = []

function createToolbar() {
  const overlay = document.querySelector('.overlay')
  const sorting = document.querySelector('.sorting')
  const typeFilter = document.querySelector('.type-filter')
  
  sorting.onclick = showSortSelection
  typeFilter.onclick = showTypeFilterSelection
  overlay.addEventListener('click', () => hideDropdown())
}

function showSortSelection() {
  const overlay = document.querySelector('.overlay')
  const sorting = document.querySelector('.sorting')
  const dropdown = document.querySelector('.toolbar-dropdown')
  const typeFilter = document.querySelector('.type-filter')

  sorting.classList.add('selected')
  typeFilter.classList.remove('selected')
  dropdown.classList.remove('hidden')
  loadSortSelection(sortSelected)
  overlay.classList.remove('hidden')
}

function loadSortSelection(sortSelected) {
  const dropdown = document.querySelector('.toolbar-dropdown')

  dropdown.className = 'toolbar-dropdown sorting'
  dropdown.innerHTML = `<div class="toolbar-list" style="right: 1rem;">
      <ul>
        <li class="toolbar-list-pokedex">
          <i class="icon-close"></i>
          <span>Pokedex</span>
        </li>
        <li class="toolbar-list-name">
          <i class="icon-close"></i>
          <span>Nome</span>
        </li>
        <li class="toolbar-list-highest-price">
          <i class="icon-close"></i>
          <span>Menor Preço</span>
        </li>
        <li class="toolbar-list-lowest-price">
          <i class="icon-close"></i>
          <span>Maior Preço</span>
        </li>
      </ul>
    </div>`
  
  if(sortSelected)
    document.querySelector(sortSelected).classList.add('selected')
  
  const pokedexBtn = dropdown.querySelector('.toolbar-list-pokedex')
  pokedexBtn.onclick = () => sortEvent('.toolbar-list-pokedex', 'Pokedex')
  
  const nameBtn = dropdown.querySelector('.toolbar-list-name')
  nameBtn.onclick = () => sortEvent('.toolbar-list-name', 'Nome', 'name')
  
  const highestPriceBtn = dropdown.querySelector('.toolbar-list-highest-price')
  highestPriceBtn.onclick = () => sortEvent('.toolbar-list-highest-price', 'Menor Preço', 'highestPrice')
  
  const lowestPriceBtn = dropdown.querySelector('.toolbar-list-lowest-price')
  lowestPriceBtn.onclick = () => sortEvent('.toolbar-list-lowest-price', 'Maior Preço', 'lowestPrice')
}

function sortEvent(selected, label, sortingMethodValue) {
  const sorting = document.querySelector('.sorting')
  sortingMethod = sortingMethodValue
  
  hideDropdown()
  createPokemonsCards(getPokemons(sortingMethod, typeFilters))
  sortSelected = selected
  setTimeout(() => {
    sorting.querySelector('span').innerHTML = label
  }, 1000)
}

function hideDropdown() {
  const dropdown = document.querySelector('.toolbar-dropdown')
  const overlay = document.querySelector('.overlay')
  const items = ['.sorting', '.type-filter']

  items
    .map(i => document.querySelector(i))
    .forEach(i => i.classList.remove('selected'))
  dropdown.classList.add('hidden')
  overlay.classList.add('hidden')
}

function showTypeFilterSelection() {
  const overlay = document.querySelector('.overlay')
  const sorting = document.querySelector('.sorting')
  const typeFilter = document.querySelector('.type-filter')
  const dropdown = document.querySelector('.toolbar-dropdown')

  sorting.classList.remove('selected')
  typeFilter.classList.add('selected')
  dropdown.classList.remove('hidden')
  loadTypeFilterSelection()
  overlay.classList.remove('hidden')
}

function loadTypeFilterSelection() {
  const isSelected = (t) => typeFilters.includes(t) ? 'selected' : ''
  const types = getPokemons(sortingMethod, [], 'all')
    .reduce((types, pokemon) => types.concat(pokemon.type), [])
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort()
    .map(t => `<li><span class="background-${t} ${isSelected(t)}" data-filter="${t}">${t}</span></li>`)
    .join('')

  const dropdown = document.querySelector('.toolbar-dropdown')
  dropdown.className = 'toolbar-dropdown type-filter'
  dropdown.innerHTML = `<div class="toolbar-list">
      <ul>
        ${types}
      </ul>
    </div>`
  const typeFilterElement = document.querySelector('.toolbar-content .type-filter')
  const toolbarListElement = dropdown.firstChild
  const offset = typeFilterElement.offsetLeft + typeFilterElement.offsetWidth - toolbarListElement.offsetWidth
  const toolbar = document.querySelector('.toolbar-list')
  toolbar.style.left = `${offset}px`

  const filters = Array.from(dropdown.querySelectorAll('[class|=background]'))
  filters.forEach(f => {
    f.onclick = () => {
      if (f.classList.contains('selected')) {
        typeFilters = typeFilters.filter(t => t != f.dataset.filter)
        f.classList.remove('selected')
      } else {
        typeFilters.push(f.dataset.filter)
        f.classList.add('selected')
      }
      createPokemonsCards(getPokemons(sortingMethod, typeFilters))
    }
  })
}

export {
  createToolbar
}