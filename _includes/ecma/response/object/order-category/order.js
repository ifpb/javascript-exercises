import { Item } from './item.js'

class Order {
  
  constructor() {
    this.items = {}
  }

  addProduct(product) {
    const id = product.id
    if (this.items[id]) {
      this.items[id].quantity += 1
    } else {
      this.items[id] = new Item(product)
    }
  }

  total(category) {
    let categoryFilter = category => item => item.product.categories.includes(category)
    let collectAllFilter = product => true

    return Object.values(this.items)
      .filter(category ? categoryFilter(category) : collectAllFilter)
      .reduce((sum, item) => sum + item.total(), 0)
  }

  toString() {
    return Object.values(this.items)
      .map((item, index) => {
        let number = index + 1
        let name = item.product.getNameCompact()
        let quantity = `${item.quantity.toString().padStart(3, '0')} UN`
        let price = Number(item.product.price).toFixed(2).toString().padStart(6)
        let total = Number(item.total()).toFixed(2).toString().padStart(6)
        return `${number} ${name} ${quantity} ${price} ${total}`
      })
      .join('\n')
  }
}

export { Order }
