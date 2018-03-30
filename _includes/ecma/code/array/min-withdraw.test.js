import { withdraw } from './min-withdraw.js'

describe('Minimum withdraw', () => {

  test('minimum of 1280', () => {
    expect(withdraw(1280)).toEqual([[100, 12], [50, 1], [20, 1], [10, 1]])
  })

  test.skip('minimum of 5705', () => {
    expect(withdraw(5705)).toEqual([[100, 57], [5, 1]])
  })

  test.skip('minimum of 892', () => {
    expect(withdraw(892)).toEqual([[100, 8], [50, 1], [20, 2], [2, 1]])
  })

})
