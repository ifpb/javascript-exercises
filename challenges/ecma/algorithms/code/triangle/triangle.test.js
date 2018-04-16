import { Triangle } from './triangle.js'

describe('Triangle', function() {

  test('equilateral triangles have equal sides', function() {
    let triangle = new Triangle(2,2,2)
    expect(triangle.kind()).toEqual('equilateral')
  })

  test.skip('larger equilateral triangles also have equal sides', function() {
    let triangle = new Triangle(10,10,10)
    expect(triangle.kind()).toEqual('equilateral')
  })

  test.skip('isosceles triangles have last two sides equal', function() {
    let triangle = new Triangle(3,4,4)
    expect(triangle.kind()).toEqual('isosceles')
  })

  test.skip('isosceles triangles have first two sides equal', function() {
    let triangle = new Triangle(2,2,3)
    expect(triangle.kind()).toEqual('isosceles')
  })

  test.skip('isosceles trianges have first and last sides equal', function() {
    let triangle = new Triangle(4,3,4)
    expect(triangle.kind()).toEqual('isosceles')
  })

  test.skip('isosceles triangles have two first sides equal', function() {
    let triangle = new Triangle(4,4,3)
    expect(triangle.kind()).toEqual('isosceles')
  })

  test.skip('isosceles triangles have in fact exactly two sides equal', function() {
    let triangle = new Triangle(10,10,2)
    expect(triangle.kind()).toEqual('isosceles')
  })

  test.skip('scalene triangles have no equal sides', function() {
    let triangle = new Triangle(3,4,5)
    expect(triangle.kind()).toEqual('scalene')
  })

  test.skip('scalene triangles have no equal sides at a larger scale too', function() {
    let triangle = new Triangle(10,11,12)
    expect(triangle.kind()).toEqual('scalene')
  })

  test.skip('scalene triangles have no equal sides in descending order either', function() {
    let triangle = new Triangle(5,4,2)
    expect(triangle.kind()).toEqual('scalene')
  })

  test.skip('very small triangles are legal', function() {
    let triangle = new Triangle(0.4,0.6,0.3)
    expect(triangle.kind()).toEqual('scalene')
  })

})
