import { gtZero, subTotal, total } from './products-qtd.js';

describe('Cart Tool', () => {
  const products = [[1, 10.0, 2], [2, 10.0, 2], [3, 10.0, 2], [4, 10.0, 0]];

  test('filtering greater than zero', () => {
    expect(gtZero(products)).toEqual([[1, 10.0, 2], [2, 10.0, 2], [3, 10.0, 2]]);
  });

  test.skip('calculating subtotal', () => {
    expect(subTotal(products)).toEqual([[1, 20.0], [2, 20.0], [3, 20.0], [4, 0.0]]);
  });

  test.skip('calculating total', () => {
    expect(total(products)).toBe(60.0);
  });
});
