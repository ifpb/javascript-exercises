
class Item {
  constructor(product) {
    this.product = product
    this.quantity = 1
  }

  total() {
    return this.product.price * this.quantity
  }
}

export { Item }