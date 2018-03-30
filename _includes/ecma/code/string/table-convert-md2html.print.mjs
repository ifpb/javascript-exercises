import { md2html } from './table-convert-md2html.mjs'

// Markdown Util

// converting table to html

const table =
  `| Header One     | Header Two     |
| :------------- | :------------- |
| Item One       | Item Two       |`

const expected =
`<table>
<thead>
<tr>
<th>Header One</th>
<th>Header Two</th>
</tr>
</thead>
<tbody>
<tr>
<td>Item One</td>
<td>Item Two</td>
</tr>
</tbody>
</table>`

console.log(md2html(table))
console.log(expected)
