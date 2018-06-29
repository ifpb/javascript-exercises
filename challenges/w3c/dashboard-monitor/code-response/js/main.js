const topStats = document.querySelector('.top-stats')
const developmentActivities = document.querySelector('.development-activities tbody')
const sideStats = document.querySelector('.side-stats')
const bottomStats = document.querySelector('.bottom-stats')

fetch('data/top-stats.json')
  .then(res => res.json())
  .then(json => loadTopStats(json))

fetch('data/development-activity.json')
  .then(res => res.json())
  .then(json => loadDevelopmentActivities(json))

fetch('data/side-stats.json')
  .then(res => res.json())
  .then(json => loadSideStats(json))

fetch('data/bottom-stats.json')
  .then(res => res.json())
  .then(json => loadBottomStats(json))

function loadTopStats(stats) {
  for (const data of stats) {
    const percent = data.percent
    const arrow = data.arrow
    const size = data.size
    const info = data.info
    const color = arrow === 'up' ? 'green' : 'red'
    const view = `<div class="col-6 col-sm-4 col-lg-2">
      <div class="card">
        <div class="card-body p-3 text-center">
          <div class="text-right text-${color}">
            ${percent}%
            <i class="fa fa-chevron-${arrow}"></i>
          </div>
          <div class="h1 m-0">${size}</div>
          <div class="text-muted mb-4">${info}</div>
        </div>
      </div>
    </div>`
    topStats.insertAdjacentHTML('beforeend', view)
  }
}

function loadDevelopmentActivities(activities) {
  for (const activity of activities) {
    const avatar = activity.avatar
    const user = activity.user
    const commit = activity.commit
    const date = activity.date
    const view = `<tr>
      <td class="w-1">
        <span class="avatar" style="background-image: url(${avatar})"></span>
      </td>
      <td>${user}</td>
      <td>${commit}</td>
      <td class="text-nowrap">${date}</td>
      <td class="w-1">
        <a href="#" class="icon">
          <i class="fa fa-trash"></i>
        </a>
      </td>
    </tr>`
    developmentActivities.insertAdjacentHTML('beforeend', view)
    developmentActivities.lastChild.querySelector('.icon').addEventListener('click', function() {
      this.parentNode.parentNode.remove()
    })
  }
}

function loadSideStats(stats) {
  for (const data of stats) {
    const info = data.info
    const size = data.size
    const percent = data.percent
    const color = data.color
    const view = `<div class="col-sm-6">
      <div class="card">
        <div class="card-body text-center">
          <div class="h5">${info}</div>
          <div class="display-4 font-weight-bold mb-4">${size}</div>
          <div class="progress progress-sm">
            <div class="progress-bar bg-${color}" style="width: ${percent}%"></div>
          </div>
        </div>
      </div>
    </div>`
    sideStats.insertAdjacentHTML('beforeend', view)
  }
}

function loadBottomStats(stats) {
  for (const data of stats) {
    const logo = data.logo
    const info = data.info
    const subinfo = data.subinfo
    const color = data.color
    const view = `<div class="col-sm-6 col-lg-3">
      <div class="card p-3">
        <div class="d-flex align-items-center">
          <span class="stamp stamp-md bg-${color} mr-3">
            <i class="fa fa-${logo}"></i>
          </span>
          <div>
            <h4 class="m-0">
              <a href="#">${info}
              </a>
            </h4>
            <small class="text-muted">${subinfo}</small>
          </div>
        </div>
      </div>
    </div>`
    bottomStats.insertAdjacentHTML('beforeend', view)
  }
}