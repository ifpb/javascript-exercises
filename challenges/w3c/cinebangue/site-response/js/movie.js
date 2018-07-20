class Movie {
  constructor(movie) {
    this.movie = movie
  }

  movieView() {
    const img = `data/movies/${this.movie.id}.jpg`
    return `<section class="movie" data-id="${this.movie.id}">
        <a href="${this.movie.trailer}" class="cover" style="background-image:url(${img})"></a>
        <div class="data">
          <h1 class="name">${this.movie.nome}</h1>
          <div class="info">${this.movie.lancamento} | ${this.movie.duracao} | ${this.movie.classificacao}</div>
          <div class="genres">${this.movieGenresView()}</div>
          <div class="schedules">${this.movieSchedulesView()}</div>
        </div>
      </section>`
  }

  movieSchedulesView() {
    return this.movie.programacao.map(schedule => `<div class="schedule">
          <span>${schedule.date}</span>
          <span><b>${this.getWeekDay(schedule.date)}</b></span>
          <span>às ${schedule.time}</span>
        </div>`)
      .join('')
  }

  movieGenresView(genres) {
    return this.movie.genero
      .split(', ')
      .map(genero => `<span class="genre">${genero}</span>`)
      .join('')
  }

  getWeekDay(date) {
    const weekDay = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    date = date.split('/').reverse().join('-')
    return weekDay[(new Date(date)).getDay()]
  }
}

export { Movie }