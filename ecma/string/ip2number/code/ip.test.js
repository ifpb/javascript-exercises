import { ip2decimal, decimal2ip } from './ip.js'

describe('IP Util', () => {
  test('converting ip 192.168.0.1 to number', () => {
    expect(ip2decimal('192.168.0.1')).toBe(3232235521)
  })

  test('converting ip 192.168.0.2 to number', () => {
    expect(ip2decimal('192.168.0.2')).toBe(3232235522)
  })

  test('converting number 3232235521 to ip', () => {
    expect(decimal2ip(3232235521)).toBe('192.168.0.1')
  })

  test('converting number 3232235522 to ip', () => {
    expect(decimal2ip(3232235522)).toBe('192.168.0.2')
  })
})
