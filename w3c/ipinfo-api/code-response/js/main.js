const addressInput = document.querySelector('#address-input')
const ipInfoBtn = document.querySelector('#ip-info-btn')
const ipInfoLoading = document.querySelector('#loading')
const ipInfoLoaded = document.querySelector('#loaded')
const ipInfoTableField = document.querySelector('#ip-info #loaded table tbody')
const ipInfoMapField = document.querySelector('#ip-info #loaded div')

// loading event
ipInfoBtn.addEventListener('click', () => {
  let address = addressInput.value
  let url = `https://ipinfo.io/${address}/json`
  
  ipInfoLoading.style.display = 'flex'
  ipInfoLoaded.style.display = 'none'
  
  // generating ipinfo table and map
  fetch(url)
    .then(res => res.json())
    .then(ipInfo => {
      if(ipInfo.error) {
        // TODO
        console.log('erro')
      } else {
        // creating table
        const createRow = info => `<tr><td>${info[0]}</td><td>${info[1]}</td></tr>`
        let rows = Object.entries(ipInfo).map(createRow).join('')
        ipInfoTableField.innerHTML = rows
  
        // creating image map
        let mapURL = `https://maps.googleapis.com/maps/api/staticmap?center=${ipInfo.loc}&zoom=13&scale=1&size=600x300&maptype=terrain&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0x558B2F%7Clabel:%7C${ipInfo.loc}`
        ipInfoMapField.style.cssText = `background-image: url(${mapURL})`
  
        ipInfoLoading.style.display = 'none' 
        ipInfoLoaded.style.display = 'flex' 
      }
    })
})
