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

// Cart Tool

// counting total cart
console.log(total(produtos))
console.log(1650.0)
