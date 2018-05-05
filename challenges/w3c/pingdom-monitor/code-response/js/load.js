const uptimesElement = document.querySelector('div.uptime table tbody')
const logsElement = document.querySelector('.logs')
const dashboardHostsElement = document.querySelector('.card.hosts div.row')
const dashboardResponseTimeElement = document.querySelector('.card.response-time div.row')
const dashboardUptimeElement = document.querySelector('.card.uptime div.row')

const statusValue = {
  'danger': 'DOWN',
  'warning': 'UP',
  'success': 'UP'
}

fetch('data/status.json')
  .then(function(res){ return res.json() })
  .then(function(status){
    dashboardHostsElement.innerHTML = `<div class="col">
        <h3 class="counter">${status.hosts.up}</h3>
        <p class="text-muted">Up</p>
      </div >
      <div class="col">
        <h3 class="counter">${status.hosts.down}</h3>
        <p class="text-muted">Down</p>
      </div>`

    dashboardResponseTimeElement.innerHTML = `<div class="col">
        <h3 class="counter">${status.responseTime.min}</h3>
        <p class="text-muted">Min</p>
      </div>
      <div class="col">
        <h3 class="counter">${status.responseTime.avg}</h3>
        <p class="text-muted">Avg</p>
      </div>
      <div class="col">
        <h3 class="counter">${status.responseTime.max}</h3>
        <p class="text-muted">Max</p>
      </div>`
    
    dashboardUptimeElement.innerHTML = `<div class="col">
        <h3 class="counter">${status.uptime.min}</h3>
        <p class="text-muted">Mim</p>
      </div>
      <div class="col">
        <h3 class="counter">${status.uptime.max}</h3>
        <p class="text-muted">Max</p>
      </div>`
  })

fetch('data/logs.json')
  .then(function(res){ return res.json() })
  .then(function(logs){
    let content = ''

    for (let log of logs) {
      const response = log.response == 'fail' ? 'Timeout' : `Response ${log.response}ms`
      const thumbs = log.response == 'fail' ? 'down' : 'up'
      content += `<div class="log d-flex">
        <span class="fa-stack ${thumbs} fa-lg">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-thumbs-${thumbs} fa-stack-1x fa-inverse"></i>
        </span>
        <div>
          <p class="name">${log.service}</p>
          <p class="response">${response} (${log.time.replace('-', ' ')})</p>
        </div>
      </div>`
    }

    logsElement.innerHTML = content
  })

fetch('data/uptime.json')
  .then(function(res){ return res.json() })
  .then(function(uptimes){
    let content = ''

    for(let uptime of uptimes) {
      content += `<tr>
        <td></td>
        <td>${uptime.service}</td>
        <td>${uptime.type}</td>
        <td>
          <span class="badge badge-${uptime.status}">${statusValue[uptime.status]}</span>
        </td>
        <td>${uptime.uptime}</td>
        <td>${uptime.since}</td>
        <td>${uptime.response}</td>
      </tr>`
    }

    uptimesElement.innerHTML = content
  })
