
const string = document.querySelector('#string')
const number = document.querySelector('#number')
const strhex = document.querySelector('#str-hex')
const strdec = document.querySelector('#str-dec')
const stroct = document.querySelector('#str-oct')
const strbin = document.querySelector('#str-bin')

function str2number(str, base) {
  const padding = {
    16: 2,
    10: 3,
    8: 3,
    2: 8
  }

  return str
    .split('')
    .map(char => char.charCodeAt().toString(base).padStart(padding[base], '0'))
    .join(' ')
}

function number2str(number, base) {
  return number
    .split(' ')
    .map(char => String.fromCharCode(parseInt(char, base)))
    .join('')
}

strhex.addEventListener('click', function(event) {
  event.preventDefault()
  number.value = str2number(string.value, 16)
  this.blur()
})

strdec.addEventListener('click', function (event) {
  event.preventDefault()
  number.value = str2number(string.value, 10)
  this.blur()
})

stroct.addEventListener('click', function(event) {
  event.preventDefault()
  number.value = str2number(string.value, 8)
  this.blur()
})

strbin.addEventListener('click', function(event) {
  event.preventDefault()
  number.value = str2number(string.value, 2)
  this.blur()
})
