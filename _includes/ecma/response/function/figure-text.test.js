import { triangleText, halfDiamondText, diamondText, boardText  } from './figure-text.js'

describe('Figure Text Tool', () => {

  test('making triangle text with size 1', () => {
    expect(triangleText(1)).toBe(
      '#'
    )
  })

  test('making triangle text with size 2', () => {
    expect(triangleText(2)).toBe(
      '# \n'+
      '##'
    )
  })

  test('making triangle text with size 3', () => {
    expect(triangleText(3)).toBe(
      '#  \n'+
      '## \n'+
      '###'
    )
  })

  test('making half diamond text with size 1', () => {
    expect(halfDiamondText(1)).toBe(
      '#'
    )
  })

  test('making half diamond text with size 2', () => {
    expect(halfDiamondText(2)).toBe(
      '# \n'+
      '##\n'+
      '# '
    )
  })

  test('making half diamond text with size 3', () => {
    expect(halfDiamondText(3)).toBe(
      '#  \n'+
      '## \n'+
      '###\n'+
      '## \n'+
      '#  '
    )
  })

  test('making diamond text with size 1', () => {
    expect(diamondText(1)).toBe(
      '#'
    )
  })

  test('making diamond text with size 2', () => {
    expect(diamondText(2)).toBe(
      ' # \n'+
      '###\n'+
      ' # '
    )
  })

  test('making diamond text with size 3', () => {
    expect(diamondText(3)).toBe(
      '  #  \n'+
      ' ### \n'+
      '#####\n'+
      ' ### \n'+
      '  #  '
    )
  })

  test('making board text with size 1', () => {
    expect(boardText(1)).toBe(
      '#'
    )
  })

  test('making board text with size 2', () => {
    expect(boardText(2)).toBe(
      '# \n'+
      ' #'
    )
  })

  test('making board text with size 3', () => {
    expect(boardText(3)).toBe(
      '# #\n'+
      ' # \n'+
      '# #'
    )
  })

  test('making board text with size 4', () => {
    expect(boardText(4)).toBe(
      '# # \n'+
      ' # #\n'+
      '# # \n'+
      ' # #'
    )
  })

})
