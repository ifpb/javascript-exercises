const cardsElement = document.querySelector('.cards')
const sharedNetworksElement = document.querySelector('.shared-networks tbody')
const subnetsElement = document.querySelector('.subnets tbody')

fetch('data/cards.json')
  .then(res => res.json())
  .then(json => loadCards(json))

fetch('data/shared-networks.json')
  .then(res => res.json())
  .then(json => loadSharedNetworks(json))

fetch('data/subnets.json')
  .then(res => res.json())
  .then(json => loadSubnets(json))

function loadCards(cards) {
  const view = cards
    .map(c => {
      return `<div class="col">
        <div class="card d-flex flex-row shadow-sm">
          <div class="prepend-icon ${c.bg} text-white p-3 d-flex align-items-center">
            <span data-feather="${c.icon}"></span>
          </div>
          <div class="p-2">
            <p class="m-0">${c.name}</p>
            <h4 class="m-0">${c.value}</h2>
          </div>
        </div>
      </div>` 
    })
    .join('')
    cardsElement.innerHTML = view
    feather.replace()
}

function loadSharedNetworks(networks) {
  const view = networks
    .map(n => {
      return `<tr>
        <td>${n.location}</td>
        <td>${n.used}</td>
        <td>${n.size}</td>
        <td>${n.free}</td>
        <td class="align-middle">
          <div class="progress" style="height: .6rem;">
            <div class="progress-bar bg-success" role="progressbar" style="width: ${n.utilization}%" aria-valuenow="${n.utilization}" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </td>
      </tr>`
    })
    .join('')
    sharedNetworksElement.innerHTML = view
}

function loadSubnets(subnets) {
  const view = subnets
    .map(s => {
      return `<tr>
        <td>${s.subnet}</td>
        <td>${s.range}</td>
        <td>${s.used}</td>
        <td>${s.size}</td>
        <td>${s.free}</td>
        <td class="align-middle">
          <div class="progress" style="height: .6rem;">
            <div class="progress-bar bg-success" role="progressbar" style="width: ${s.utilization}%" aria-valuenow="${s.utilization}" aria-valuemin="0"
              aria-valuemax="100"></div>
          </div>
        </td>
      </tr>`
    })
    .join('')
    subnetsElement.innerHTML = view
}
