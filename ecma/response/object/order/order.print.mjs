import { Order } from './order.mjs'
import { Product } from './product.mjs'

// Store Tool

// buying products
let pencil = new Product(1, 'Lápis', 1.5)
let pen  = new Product(2, 'Caneta', 3)
let notebook = new Product(3, 'Caderno', 20)

let order = new Order()
order.addProduct(pencil)
order.addProduct(pencil)
order.addProduct(pen)
order.addProduct(notebook)

console.log(order.total())
console.log(26)
