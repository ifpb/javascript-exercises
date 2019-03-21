import { createTable, createTableHTML } from './table-generator.js';

describe('Table Generator', () => {
  test('making text table', () => {
    let expected = `1.1 1.2 1.3 1.4
2.1 2.2 2.3 2.4
3.1 3.2 3.3 3.4
`;

    expect(createTable(3, 4)).toBe(expected);
  });

  test('making text table', () => {
    let expected = `Item 1.1 Item 1.2 Item 1.3 Item 1.4
Item 2.1 Item 2.2 Item 2.3 Item 2.4
Item 3.1 Item 3.2 Item 3.3 Item 3.4
`;

    expect(createTable(3, 4, 'Item')).toBe(expected);
  });

  test('making HTML table', () => {
    let expected = `<table>
  <tr>
    <td>1.1</td>
    <td>1.2</td>
    <td>1.3</td>
    <td>1.4</td>
  </tr>
  <tr>
    <td>2.1</td>
    <td>2.2</td>
    <td>2.3</td>
    <td>2.4</td>
  </tr>
  <tr>
    <td>3.1</td>
    <td>3.2</td>
    <td>3.3</td>
    <td>3.4</td>
  </tr>
</table>
`;

    expect(createTableHTML(3, 4)).toBe(expected);
  });
});
