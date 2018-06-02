const ipAddress = document.querySelector('#ip-address')
const ipNumber = document.querySelector('#ip-number')
const converter = document.querySelector('button')

function ip2decimal(ip) {
  const octet = ip.split(".")
  let decimal = 0

  decimal += parseInt(octet[0], 10) << 24
  decimal += parseInt(octet[1], 10) << 16
  decimal += parseInt(octet[2], 10) << 8
  decimal += parseInt(octet[3], 10)

  return decimal >>> 0
}

function decimal2ip(decimal) {
  const octet1 = decimal & 255
  const octet2 = ((decimal >> 8) & 255)
  const octet3 = ((decimal >> 16) & 255)
  const octet4 = ((decimal >>> 24) & 255)

  return `${octet4}.${octet3}.${octet2}.${octet1}`
}

converter.addEventListener('click', function (event) {
  event.preventDefault()
  const ip = ipAddress.value
  ipNumber.value = /(\d{1,3}\.){3}\d{1,3}/.test(ip) ? ip2decimal(ip) : decimal2ip(ip)
  this.blur()
})