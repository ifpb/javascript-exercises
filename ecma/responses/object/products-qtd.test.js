const cart = require('./products-qtd')

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

describe('Cart Tool', () => {
  
  test('filtering greater than zero', () => {
    expect(cart.gtZero(products)).toEqual(
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
  })


  test('calculating subtotal', () => {
    expect(cart.subTotal(products)).toEqual(
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
  })

  test('calculating total', () => {
    expect(cart.total(products)).toBe(60.0)
  })

})
