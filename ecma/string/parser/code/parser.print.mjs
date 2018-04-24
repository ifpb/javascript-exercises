import { str2hex, hex2str, str2bin, bin2str, str2dec, dec2str } from './parser.js'

// Number Util
// converting string to hexa
console.log(str2hex('AB'))
console.log('41 42')

// converting string to hexa
console.log(str2hex('ABC'))
console.log('41 42 43')

// converting hexa to string
console.log(hex2str('41 42'))
console.log('AB')

// converting hexa to string
console.log(hex2str('41 42 43'))
console.log('ABC')

// converting string to binary
console.log(str2bin('AB'))
console.log('01000001 01000010')

// converting string to binary
console.log(str2bin('ABC'))
console.log('01000001 01000010 01000011')

// converting binary to string
console.log(bin2str('01000001 01000010'))
console.log('AB')

// converting binary to string
console.log(bin2str('01000001 01000010 01000011'))
console.log('ABC')

// converting string to decimal
console.log(str2dec('AB'))
console.log('065 066')

// converting string to decimal
console.log(str2dec('ABC'))
console.log('065 066 067')

// converting decimal to string
console.log(dec2str('065 066'))
console.log('AB')

// converting decimal to string
console.log(dec2str('065 066 067'))
console.log('ABC')
