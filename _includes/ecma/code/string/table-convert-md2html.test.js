import { md2html } from './table-convert-md2html.js'

describe('Markdown Util', () => {
  test('converting table to html', () => {
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

    expect(md2html(table)).toBe(expected)
  })
})
