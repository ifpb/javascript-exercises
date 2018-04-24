import { scanDate, scanCep } from './pattern-scanner.mjs'

// Scan Patterns

// scanning dateswith message without date
let message = 'Lorem ipsum dolor sit amet.'
let expected = {
  count: 0,
  values: []
}
console.log(scanDate(message))
console.log(expected)

// with message having one date
let message = 'Lorem ipsum dolor sit amet 12/01/2017 aliqua.'
let expected = {
  count: 1,
  values: ['2017-01-12']
}
console.log(scanDate(message))
console.log(expected)

// with message having different date patterns
let message = 'Lorem ipsum dolor sit amet 12/01/2017, consectetur 2015-12-31 adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
let expected = {
  count: 2,
  values: ['2017-01-12', '2015-12-31']
}
console.log(scanDate(message))
console.log(expected)

// with message without cep
let message = 'Lorem ipsum dolor sit amet.'
let expected = {
  count: 0,
  values: []
}
console.log(scanCep(message))
console.log(expected)

// with message with one cep
let message = 'Lorem ipsum dolor sit amet 12345123 aliqua.'
let expected = {
  count: 1,
  values: ['12345123']
}
let received = scanCep(message)
console.log(received.count)
console.log(expected.count)

console.log(received.values)
console.log(expected.values)

// with message with different cep patterns
let message = 'Lorem ipsum dolor sit amet 12345123, consectetur 12345-123 adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
let expected = {
  count: 2,
  values: ['12345123', '12345-123']
}
let result = scanCep(message)
console.log(result.count)
console.log(expected.count)

console.log(result.values)
console.log(expected.values)
