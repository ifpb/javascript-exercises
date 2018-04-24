import { String } from './text-util.mjs'

// Text Util
// Converting a string into camel case with one word
console.log("fulano".toCamelCase())
console.log("Fulano")

// Converting a string into camel case with many word
let message = 'lorem ipsum\ndolor'
console.log(message.toCamelCase())
console.log('Lorem Ipsum\nDolor')

// Applying bold
let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
console.log(text.applyBold('ipsum'))
console.log('Lorem <b>ipsum</b> dolor sit amet, consectetur adipisicing elit')
