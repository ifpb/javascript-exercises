import { sockMerchant } from './sockMerchant.js'

describe('Sock Merchant', () => {

  test('number of matching pairs of [1, 2, 1, 2, 1, 3, 2]', () => {
    let arr = [1, 2, 1, 2, 1, 3, 2]
    expect(sockMerchant(arr)).toBe(2)
  })

  test('number of matching pairs of [10, 20, 20, 10, 10, 30, 50, 10, 20]', () => {
    let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20]
    expect(sockMerchant(arr)).toBe(3)
  })

})
