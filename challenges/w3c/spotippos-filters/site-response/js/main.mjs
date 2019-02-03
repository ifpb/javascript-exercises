import { loadFilters, exibeImoveis } from './lib.mjs'

loadFilters()

fetch('data/imoveis.json')
  .then(res => res.json())
  .then(json => exibeImoveis(json))