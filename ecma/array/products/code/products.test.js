import { total } from './products.js';

describe('Cart Tool', () => {
  const products = [['Bicicleta', 1200.0], ['Capacete', 450.0]];

  test('counting total cart', () => {
    expect(total(products)).toBe(1650.0);
  });
});
