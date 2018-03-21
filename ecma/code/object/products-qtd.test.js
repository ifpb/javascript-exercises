import { gtZero, subTotal, total } from './products-qtd.js'

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
    expect(gtZero(products)).toEqual(
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


  test.skip('calculating subtotal', () => {
    expect(subTotal(products)).toEqual(
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

  test.skip('calculating total', () => {
    expect(total(products)).toBe(60.0)
  })

})
