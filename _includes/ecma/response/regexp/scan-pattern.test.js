import { date, cep } from './scan-pattern.js'

describe('Scan Patterns', () => {

  test('scanning dateswith message without date', () => {
    let message = 'Lorem ipsum dolor sit amet.'
    let expected = {
      count: 0,
      values: []
    }
    expect(date(message)).toEqual(expected)
  })

  test('with message having one date', () => {
    let message = 'Lorem ipsum dolor sit amet 12/01/2017 aliqua.'
    let expected = {
      count: 1,
      values: ['2017-01-12']
    }
    expect(date(message)).toEqual(expected)
  })

  test('with message having different date patterns', () => {
    let message = 'Lorem ipsum dolor sit amet 12/01/2017, consectetur 2015-12-31 adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    let expected = {
      count: 2,
      values: ['2017-01-12', '2015-12-31']
    }
    expect(date(message)).toEqual(expected)
  })

  test('with message without cep', () => {
    let message = 'Lorem ipsum dolor sit amet.'
    let expected = {
      count: 0,
      values: []
    }
    expect(cep(message)).toEqual(expected)
  })

  test('with message with one cep', () => {
    let message = 'Lorem ipsum dolor sit amet 12345123 aliqua.'
    let expected = {
      count: 1,
      values: ['12345123']
    }
    let received = cep(message)
    expect(received.count).toBe(expected.count)
    expect(received.values).toEqual(expected.values)
  })

  test('with message with different cep patterns', () => {
    let message = 'Lorem ipsum dolor sit amet 12345123, consectetur 12345-123 adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    let expected = {
      count: 2,
      values: ['12345123', '12345-123']
    }
    let result = cep(message)
    expect(result.count).toBe(expected.count)
    expect(result.values).toEqual(expected.values)
  })
})
