import { formatter } from './string-util.mjs'

// String Util

// changing case for text to uppercase
console.log(formatter('lorem ipsum dolor', 'uppercase'))
console.log('LOREM IPSUM DOLOR')

// change case for text to lowercase
console.log(formatter('LOREM IPSUM DOLOR', 'lowercase'))
console.log('lorem ipsum dolor')

// change case for text to camelcase
console.log(formatter('LOREM IPSUM DOLOR', 'camelcase'))
console.log('Lorem Ipsum Dolor')

// change case for text to snakecase
console.log(formatter('lorem ipsum dolor', 'snakecase'))
console.log('lorem_ipsum_dolor')

// reversing text
console.log(formatter('lorem ipsum dolor', 'reverse'))
console.log('rolod muspi merol')

// counting chars
console.log(formatter('lorem\nipsum dolor', 'countchar'))
console.log(17)

// counting words
console.log(formatter('lorem\nipsum dolor', 'countword'))
console.log(3)

// counting lines
console.log(formatter('lorem\nipsum dolor', 'countline'))
console.log(2)
