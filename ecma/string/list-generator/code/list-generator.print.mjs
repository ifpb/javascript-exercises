import { createList } from './list-generator.mjs'

// List Generator

// making list
let expected = `<ul>
<li>Text 1</li>
<li>Text 2</li>
<li>Text 3</li>
</ul>
`

console.log(createList(3))
console.log(expected)

// making list
expected = `<ul>
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
<li>Item 4</li>
<li>Item 5</li>
</ul>
`

console.log(createList(5, 'Item'))
console.log(expected)

