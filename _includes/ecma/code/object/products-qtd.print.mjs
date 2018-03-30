import { gtZero, subTotal, total } from './products-qtd.mjs'

const products = [
  {
    id: 1,
    preco: 10.0,
    qtd: 2
  },
  {
    id: 2,
    preco: 10.0,
    qtd: 2
  },
  {
    id: 3,
    preco: 10.0,
    qtd: 2
  },
  {
    id: 4,
    preco: 10.0,
    qtd: 0
  }
]

// Cart Tool

// filtering greater than zero
console.log(gtZero(products))
console.log(
  [
    {
      id: 1,
      preco: 10.0,
      qtd: 2
    },
    {
      id: 2,
      preco: 10.0,
      qtd: 2
    },
    {
      id: 3,
      preco: 10.0,
      qtd: 2
    }
  ]
)

// calculating subtotal
console.log(subTotal(products))
console.log(
  [
    {
      id: 1,
      subtotal: 20.0
    },
    {
      id: 2,
      subtotal: 20.0
    },
    {
      id: 3,
      subtotal: 20.0
    },
    {
      id: 4,
      subtotal: 0.0
    }
  ]
)

// calculating total
console.log(total(products))
console.log(60.0)
