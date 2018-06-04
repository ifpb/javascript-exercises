import { Artist } from './artist.js'
import { Modal } from './modal.js'

let artists = []
const modal = new Modal()
const artistsContainer = document.querySelector('.artists')

loadArtists()

function loadArtists() {
  fetch('data/paraibanos.json')
    .then(res => res.json())
    .then(paraibanos => {
      artists = paraibanos
      loadArtistsView()
    })
}

function loadArtistsView() {
  for (const artistData of Object.values(artists)) {
    const artist = new Artist(artistData)
    const artistView = artist.getArtistBox()
    artistsContainer.insertAdjacentHTML('beforeend', artistView)
    artistsContainer.lastChild.onclick = (event) => {
      loadArtistModal(event.target.dataset.id)
    }
  }
}

function loadArtistModal(id) {
  fetch(`https://www.vagalume.com.br/${artists[id].url}/index.js`)
    .then(res => res.json())
    .then(info => {
      const artist = new Artist(info.artist)
      modal.loadBody(artist.getArtistView())
    })
}
