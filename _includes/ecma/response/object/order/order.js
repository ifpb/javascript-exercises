class Order {
  
  constructor() {
    this.products = []
  }

  addProduct(product) {
    this.products.push(product)
  }

  total() {
    return this.products
      .reduce((sum, product) => sum + product.price, 0)
  }

}

export { Order }
