const weekdaysComponent = document.querySelector('.weekdays ul')
const daysComponent = document.querySelector('.days ul')
const todayComponent = document.querySelector('.today')
const dayComponent = document.querySelector('.day')

const previousButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')

const today = new Date()
let day = today

function createCalendar(day) {
  const monthName = day.toLocaleString("en-us", { month: "long" })
  const year = day.getFullYear()
  const firstDayOfMonth = new Date(day.getFullYear(), day.getMonth(), 1)
  const lastDayOfMonth = new Date(day.getFullYear(), day.getMonth()+1, 0)

  const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  const days = [...Array(lastDayOfMonth.getDate()).keys()].map(n => ++n)

  const formatItems = item => `<li>${item}</li>`

  const daysItems = days.map(formatItems)

  daysItems[day.getDate()-1] =
          daysItems[day.getDate()-1]
            .replace(/<li>(.+)<\/li>/, '<li><span class="active">$1</span></li>')

  const daysPrepend = '<li></li>'.repeat(firstDayOfMonth.getDay())
  const daysAppend = '<li></li>'.repeat(6 - lastDayOfMonth.getDay())

  dayComponent.innerHTML =
    `<div class="year-value">${year}</div>
     <div class="month-value">${monthName}</div>`
  weekdaysComponent.innerHTML = weekdays.map(formatItems).join('')
  daysComponent.innerHTML = daysPrepend + daysItems.join('') + daysAppend
}

document.addEventListener('DOMContentLoaded', function() {
  daysComponent.className = 'days'
  setTimeout(() => {
    createCalendar(today)
    daysComponent.className = 'days fadeIn animated'
  }, 1)
})

todayComponent.addEventListener('click', function() {
  dayComponent.className = 'day'
  daysComponent.className = 'days'
  setTimeout(() => {
    createCalendar(today)
    dayComponent.className = 'day fadeIn animated'
    daysComponent.className = 'days fadeIn animated'
  }, 1)
})

previousButton.addEventListener('click', function() {
  previousLastDate = new Date(day.getFullYear(), day.getMonth()-1, 0)
  if(day.getDate() > previousLastDate.getDate()) {
    day = new Date(day.getFullYear(), day.getMonth()-1, previousLastDate.getDate())
  } else {
    day = new Date(day.getFullYear(), day.getMonth()-1, day.getDate())
  }

  dayComponent.className = 'day slideOutLeft animated'
  daysComponent.className = 'days'
  setTimeout(() => {
    dayComponent.className = 'day slideInRight animated'
    createCalendar(day)
    daysComponent.className = 'days fadeIn animated'
  }, 600)
})

nextButton.addEventListener('click', function() {
  nextLastDate = new Date(day.getFullYear(), day.getMonth()+2, 0)
  if(day.getDate() > nextLastDate.getDate()) {
    day = new Date(day.getFullYear(), day.getMonth()+1, nextLastDate.getDate())
  } else {
    day = new Date(day.getFullYear(), day.getMonth()+1, day.getDate())
  }

  dayComponent.className = 'day slideOutRight animated'
  daysComponent.className = 'days'
  setTimeout(() => {
    dayComponent.className = 'day slideInLeft animated'
    createCalendar(day)
    daysComponent.className = 'days fadeIn animated'
  }, 590)
})
