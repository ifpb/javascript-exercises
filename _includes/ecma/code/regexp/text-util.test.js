import { String } from './text-util.js'

describe('Text Util', () => {
  test('Converting a string into camel case with one word', () => {
    expect("fulano".toCamelCase()).toBe("Fulano")
  })

  test('Converting a string into camel case with many word', () => {
    let message = 'lorem ipsum\ndolor'
    expect(message.toCamelCase()).toBe('Lorem Ipsum\nDolor')
  })

  test('Applying bold', () => {
    let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
    expect(text.applyBold('ipsum'))
    .toBe('Lorem <b>ipsum</b> dolor sit amet, consectetur adipisicing elit')
  })
})
