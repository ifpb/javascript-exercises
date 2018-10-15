import { longFormat } from './formatDate.js'

describe('Format Date', () => {

  test('long format of 22/04/1983', () => {
    expect(longFormat("22/04/1983")).toBe("22 de abril de 1983")
  })

})