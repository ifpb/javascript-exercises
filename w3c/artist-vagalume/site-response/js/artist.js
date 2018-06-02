
class Artist {
  constructor(artist) {
    this.id = artist.id
    this.name = artist.desc || artist.name
    this.url = artist.url.replace(/\//g, '')
    this.toplyrics = artist.toplyrics
    this.albums = artist.albums
    this.related = artist.related
  }

  getImage() {
    return `https://s2.vagalume.com/${this.url}/images/${this.url}.jpg`
  }

  getArtistBox() {
    const bgImg = `background: url(${this.getImage()})`
    return `<div class="artist" data-id="${this.id}" style="${bgImg}">
        <div class="name">${this.name}</div>
      </div>`
  }
  
  getArtistView() {
    return `<div class="artist-info">
        <div class="artist-image">
          <img src="${this.getImage()}" alt="${this.name}">
        </div>
        <div class="description">
          <h1>${this.name}</h1>
          ${this.getTopLyricsView()}
          ${this.getAlbumsView()}
          ${this.getRelatedView()}
        </div>
      <div>`
  }

  getTopLyricsView() {
    if (this.toplyrics) {
      const toplyrics = this.toplyrics.item
                          .map(l => `<li>${l.desc}</li>`)
                          .join('')
      return `<h2>Músicas</h2>
        <div class="toplyrics">
          <ul>${toplyrics}</ul>
        </div>`
    } else {
      return ''
    }
  }

  getAlbumsView() {
    if (this.albums) {
      const albums = this.albums.item
                      .map(a => `<li>${a.desc} ${a.year ? '-'+a.year : ''}</li>`)
                      .join('')
      return `<h2>Discografia</h2>
        <div class="albums">
          <ul>${albums}</ul>
        </div>`
    } else {
      return ''
    }
  }

  getRelatedView() {
    if (this.related) {
      const related = this.related
                            .map(r => (new Artist(r)).getArtistBox())
                            .join('')
      return `<h2>Artistas Relacionados</h2>
        <div class="related">${related}</div>`
    } else {
      return ''
    }
  }
}

export { Artist }