import { Movie } from './movie.js'

const searchButton = document.querySelector('#search')
const movieSearch = document.querySelector('.search input')
const moviesSection = document.querySelector('#movies')
const moviesItem = document.querySelector('#movies-item')
let moviesData = []
let seasonData = []

loadMoviesData('072017')
searchButton.addEventListener('click', filterMovies)
movieSearch.addEventListener('keyup', filterMovies)
movieSearch.addEventListener('keyup', cleanSearch)

async function loadMoviesData(season) {
  [moviesData, seasonData] = await Promise.all([
    getJSON('data/filmes.json'),
    getJSON('data/temporada.json')
  ])
  loadSeasonData(season)
  showMovies()
  // loadDatalist()
}

function loadSeasonData(season) {
  const schedule = seasonData[season].programacao
  for (const date in schedule) {
    for (const time in schedule[date]) {
      const idMovie = schedule[date][time]
      if (moviesData[idMovie]) {
        if (moviesData[idMovie].programacao) {
          moviesData[idMovie].programacao.push({ date, time })
          moviesData[idMovie].id = idMovie
        } else
          moviesData[idMovie].programacao = [{ date, time }]
      }
    }
  }
}

function showMovies(event) {
  moviesSection.innerHTML = Object.values(moviesData)
    .map(m => (new Movie(m)).movieView())
    .join('')
}

function filterMovies() {
  const movieViews = Array.from(moviesSection.querySelectorAll('.movie'))
  const inputRegex = new RegExp(`${movieSearch.value}`, 'i')
  movieViews.forEach(m => {
    const movie = moviesData[m.dataset.id]
    m.className = inputRegex.test(movie.nome) ? 'movie' : 'movie hidden'
  })
}

function cleanSearch(event) {
  event.preventDefault()
  if (event.key == "Escape") {
    movieSearch.value = ""
    Array
      .from(moviesSection.querySelectorAll('.movie'))
      .forEach(m => m.className = 'movie')
  }
}

function loadDatalist() {
  let moviesOptions = Object.values(moviesData)
    .map(movie => `<option value="${movie.nome}">`)
    .join('')
  moviesItem.innerHTML = moviesOptions
}

async function getJSON(url) {
  const result = await fetch(url)
  const json = await result.json()
  return json
}
