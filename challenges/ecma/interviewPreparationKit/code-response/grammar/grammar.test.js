import { spelling } from './grammar.js'

describe('Grammar Util', () => {

  test('spelling "programador"', () => {
    expect(spelling('programador')).toBe('P-R-O-G-R-A-M-A-D-O-R')
  })

  test('spelling "o dia está chuvoso"', () => {
    expect(spelling('o dia está chuvoso')).toBe('O-D-I-A-E-S-T-Á-C-H-U-V-O-S-O')
  })

})
