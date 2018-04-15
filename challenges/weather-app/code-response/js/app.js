// TODO
// firebase openweatherapi
// change continuos (multiples json; refresh 1min)
// geolocation
// fallback grid
// transform translateY
// test
// Specify width in characters

const units = Array.from(document.querySelectorAll('input[name="unit"]'))
const forecastWeekday = Array.from(document.querySelectorAll('.forecast .weekday'))
const forecastIcon = Array.from(document.querySelectorAll('.forecast i'))
const forecastCelsius = Array.from(document.querySelectorAll('.forecast .weather-value .celsius'))
const forecastFahrenheit = Array.from(document.querySelectorAll('.forecast .weather-value .fahrenheit'))
const todayCelsius = document.querySelector('.today .weather .weather-value .celsius')
const todayFahrenheit = document.querySelector('.today .weather .weather-value .fahrenheit')
const cityName = document.querySelector('.city-name')
const todayWeatherName = document.querySelector('.today .weather-name')
const todayWeatherIcon = document.querySelector('.today .icon i')
const todayHumidity = document.querySelector('.today .humidity .value')
const todayPrecip = document.querySelector('.today .precip .value')
const todayWind = document.querySelector('.today .wind .value')
const todaySun = document.querySelector('.today .sun .value')

function loadData(json) {
  cityName.innerHTML = json.city

  const today = json.forecasts[0]
  todayWeatherName.innerHTML = today.weather.name
  todayWeatherIcon.className = `wi ${today.weather.wi}`
  todayCelsius.innerHTML = today.weather.celsius
  todayFahrenheit.innerHTML = toFahrenheit(today.weather.celsius)
  todayHumidity.innerHTML = `${today.weather.humidity.min}%<br>${today.weather.humidity.max}%`
  todayPrecip.innerHTML = `${today.weather.precip.mm}mm<br>${today.weather.precip.percent}%`
  todayWind.innerHTML = `${today.weather.wind.speed}km/h<br>${today.weather.wind.direction}`
  todaySun.innerHTML = `${today.weather.sun.sunrise}<br>${today.weather.sun.sunset}`

  const forecasts = json.forecasts.slice(1)
  forecasts.forEach((forecast, index) => {
    forecastWeekday[index].innerHTML = forecast.weekday
    forecastIcon[index].className = `wi ${forecast.weather.wi}`
    forecastCelsius[index].innerHTML = 
      `<div class="max">${forecast.weather.celsius.min}°</div>
       <div class="min">${forecast.weather.celsius.max}°</div>`
    forecastFahrenheit[index].innerHTML = 
      `<div class="max">${toFahrenheit(forecast.weather.celsius.min)}°</div>
       <div class="min">${toFahrenheit(forecast.weather.celsius.max)}°</div>`

     
  })
}

function toFahrenheit(celsius) {
  const fahrenheit = celsius * 1.8 + 32
  return fahrenheit.toFixed(0)
}

// animation transition converter
units.forEach(unit => {
  unit.addEventListener('change', () => {
    todayCelsius.classList.toggle('active')
    todayFahrenheit.classList.toggle('active')

    forecastCelsius.forEach((celsius, index) => {
      celsius.classList.toggle('active')
      forecastFahrenheit[index].classList.toggle('active')
    })
  })
})

fetch('data/weather-forecast.json')
  .then(res => res.json())
  .then(json => {
    loadData(json)
  })
