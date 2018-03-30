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

  test('buying products with categories', () => {
    let pencil = new Product(1, 'Lápis', 1.5, ['office'])
    let pen  = new Product(2, 'Caneta', 3, ['office'])
    let notebook = new Product(3, 'Caderno', 20, ['office'])
    let flashDrive = new Product(4, 'USB Flash Drive', 40, ['eletronics', 'office'])
    let headPhone = new Product(5, 'Headphone', 40, ['eletronics'])

    let order = new Order()
    order.addProduct(pencil)
    order.addProduct(pencil)
    order.addProduct(pen)
    order.addProduct(notebook)
    order.addProduct(flashDrive)
    order.addProduct(flashDrive)
    order.addProduct(headPhone)

    expect(order.toString()).toBe(
      `1 Lápis      002 UN   1.50   3.00
2 Caneta     001 UN   3.00   3.00
3 Caderno    001 UN  20.00  20.00
4 USB Flash  002 UN  40.00  80.00
5 Headphone  001 UN  40.00  40.00`
    )

    expect(order.total()).toBe(146)
    expect(order.total('eletronics')).toBe(120)
    expect(order.total('office')).toBe(106)
  })

})
