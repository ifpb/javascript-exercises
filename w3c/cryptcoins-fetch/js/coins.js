const coinsContainer = document.querySelector('#coins')
let coins
let coinsTotal = 0
const coinsPage = 60

loadCoins()

window.addEventListener('scroll', function () {
  if ((window.scrollY + window.innerHeight) / document.body.scrollHeight >= 0.99) {
    coinsTotal += coinsPage
    coinsContainer.innerHTML += coinsHTML(coins, coinsTotal)
  }
})

function loadCoins(){
  // https://www.cryptocompare.com/api/
  // https://www.cryptocompare.com/api/data/coinlist/
  // https://min-api.cryptocompare.com/
  // https://min-api.cryptocompare.com/data/all/coinlist
  // https://github.com/lionsharecapital/lionshare-api
  // http://cryptorials.io/top-5-cryptocurrency-apis-for-developers/

  fetch('https://min-api.cryptocompare.com/data/all/coinlist')
    .then(res => res.json())
    .then(json => {
      coins = json.Data
      coinsContainer.innerHTML = coinsHTML(coins, coinsTotal)
    })
}

function coinsHTML(coins, offset = 0, limit = coinsPage){
  const coinsData = Object.values(coins)
    .slice(offset, offset+limit)
    .map(coin => {
      return {
        "name": coin.FullName,
        "img": `https://www.cryptocompare.com${coin.ImageUrl}?width=50`
      }
    })

  return coinsData
    .map(coin => {
      return `<div class="coin">
          <img src="${coin.img}">
          <p>${coin.name}</p>
        </div>`
    })
    .join('')
}

