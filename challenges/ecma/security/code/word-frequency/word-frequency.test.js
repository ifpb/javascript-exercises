import { WordFrequency } from './word-frequency.js'

describe('WordFrequency', function () {

  test('generating word frequency from plain text', function () {
    let text = 'Qual é a árvore preferida de um administrador de redes? Ipê.'
    let expected = {
      '1': ['.', '?', 'f', 'l', 'n', 'q', 't', 'v', 'á', 'é', 'ê' ],
      '2': ['m', 'o', 'p', 's', 'u'],
      '4': ['i'],
      '5': ['a'],
      '6': ['d'],
      '7': ['e', 'r'],
      '10': [' ']
    }
    expect(WordFrequency.frequency(text)).toEqual(expected)
  })

  test.skip('generating word frequency from encripted rot13', function () {
    let text = 'Dhny é n áeiber cersrevqn qr hz nqzvavfgenqbe qr erqrf? Vcê.'
    let expected = {
      '1': ['.', '?', 'a', 'd', 'g', 'i', 's', 'y', 'á', 'é', 'ê'],
      '2': ['b', 'c', 'f', 'h', 'z'],
      '4': ['v'],
      '5': ['n'],
      '6': ['q'],
      '7': ['e', 'r'],
      '10': [' ']
    }
    expect(WordFrequency.frequency(text)).toEqual(expected)
  })

})