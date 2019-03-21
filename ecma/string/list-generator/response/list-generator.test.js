import { createList } from './list-generator.js';

describe('List Generator', () => {
  test('making list', () => {
    let expected = `<ul>
  <li>Text 1</li>
  <li>Text 2</li>
  <li>Text 3</li>
</ul>`;

    expect(createList(3)).toBe(expected);
  });

  test('making list', () => {
    let expected = `<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
  <li>Item 5</li>
</ul>`;

    expect(createList(5, 'Item')).toBe(expected);
  });
});
