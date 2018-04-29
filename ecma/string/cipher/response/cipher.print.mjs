import { rot } from './cipher.mjs'

// Caesar Cipher
// encoding rot2
console.log(rot('abc', 2))
console.log('cde')
console.log(rot('xyz', 2))
console.log('zab')

// encoding rot13
console.log(rot('abc', 13))
console.log('nop')
console.log(rot('xyz', 13))
console.log('klm')
