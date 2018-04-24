
function str2hex(str) {
  return str
    .split('')
    .map(char => char.charCodeAt().toString(16).padStart(2, '0'))
    .join(' ')
}

function hex2str(hex) {
  return hex
    .split(' ')
    .map(char => String.fromCharCode(parseInt(char, 16)))
    .join('')
}

function str2bin(str) {
  return str
    .split('')
    .map(char => char.charCodeAt().toString(2).padStart(8, '0'))
    .join(' ')
}

function bin2str(bin) {
  return bin
    .split(' ')
    .map(char => String.fromCharCode(parseInt(char, 2)))
    .join('')
}

function str2dec(str) {
  return str
    .split('')
    .map(char => char.charCodeAt().toString(10).padStart(3, '0'))
    .join(' ')
}

function dec2str(dec) {
  return dec
    .split(' ')
    .map(char => String.fromCharCode(parseInt(char, 10)))
    .join('')
}

export { str2hex, hex2str, str2bin, bin2str, str2dec, dec2str }
