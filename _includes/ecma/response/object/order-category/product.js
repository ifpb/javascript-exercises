
class Product {

  constructor(id, name, price, categories) {
    this.id = id
    this.name = name
    this.price = price || 0.0
    this.categories = categories || []
  }

  getNameCompact() {
    return this.name.substr(0, 10).padEnd(10)
  }
}

export { Product }
