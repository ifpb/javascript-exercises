const coinsContainer = document.querySelector('#coins')

const coinsData = Object.values(coins.Data)
  .slice(0, 24)
  .map(coin => {
    return {
      "name": coin.FullName,
      "img": `https://www.cryptocompare.com${coin.ImageUrl}?width=50`
    }
  })

const coinsHTML = coinsData
  .map(coin => {
    return `<div class="coin">
          <img src="${coin.img}">
          <p>${coin.name}</p>
        </div>`
  })
  .join('')

coinsContainer.innerHTML = coinsHTML