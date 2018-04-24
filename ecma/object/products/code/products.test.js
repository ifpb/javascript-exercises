import { total } from './products.js'

const produtos = [
  {
    nome: 'Bicicleta',
    preco: 1200.0
  },
  {
    nome: 'Capacete',
    preco: 450.0
  }
]

describe('Cart Tool', () => {

  test('counting total cart', () => {
    expect(total(produtos)).toBe(1650.0)
  })

})
