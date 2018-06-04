const hexadecimal = document.querySelector('#hexadecimal')
const decimal = document.querySelector('#decimal')
const octal = document.querySelector('#octal')
const binary = document.querySelector('#binary')
const converterHexBtn = document.querySelector('#converterHex')
const converterDecBtn = document.querySelector('#converterDec')
const converterOctBtn = document.querySelector('#converterOct')
const converterBinBtn = document.querySelector('#converterBin')

converterHexBtn.addEventListener('click', function(event) {
  event.preventDefault()
  decimal.value = converterNumber(hexadecimal.value, 16, 10)
  octal.value = converterNumber(hexadecimal.value, 16, 8)
  binary.value = converterNumber(hexadecimal.value, 16, 2)
  this.blur()
})

converterDecBtn.addEventListener('click', function(event) {
  event.preventDefault()
  hexadecimal.value = converterNumber(decimal.value, 10, 16)
  octal.value = converterNumber(decimal.value, 10, 8)
  binary.value = converterNumber(decimal.value, 10, 2)
  this.blur()
})

converterOctBtn.addEventListener('click', function(event) {
  event.preventDefault()
  hexadecimal.value = converterNumber(octal.value, 8, 16)
  decimal.value = converterNumber(octal.value, 8, 10)
  binary.value = converterNumber(octal.value, 8, 2)
  this.blur()
})

converterBinBtn.addEventListener('click', function(event) {
  event.preventDefault()
  hexadecimal.value = converterNumber(binary.value, 2, 16)
  decimal.value = converterNumber(binary.value, 2, 10)
  octal.value = converterNumber(binary.value, 2, 8)
  this.blur()
})

function converterNumber(value, from, to) {
  return parseInt(value, from).toString(to)
}