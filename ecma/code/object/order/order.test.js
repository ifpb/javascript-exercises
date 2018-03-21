import { Order } from './order.js'
import { Product } from './product.js'

describe('Store Tool', () => {

  test('buying products', () => {
    let pencil = new Product(1, 'Lápis', 1.5)
    let pen  = new Product(2, 'Caneta', 3)
    let notebook = new Product(3, 'Caderno', 20)

    let order = new Order()
    order.addProduct(pencil)
    order.addProduct(pencil)
    order.addProduct(pen)
    order.addProduct(notebook)

    expect(order.total()).toBe(26)
  })

})
