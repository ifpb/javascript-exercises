import { ip2decimal, decimal2ip } from './ip.mjs'

// IP Util

// converting ip 192.168.0.1 to number
console.log(ip2decimal('192.168.0.1'))
console.log(3232235521)

// skip('converting ip 192.168.0.2 to number
console.log(ip2decimal('192.168.0.2'))
console.log(3232235522)

// skip('converting number 3232235521 to ip
console.log(decimal2ip(3232235521))
console.log('192.168.0.1')

// skip('converting number 3232235522 to ip
console.log(decimal2ip(3232235522))
console.log('192.168.0.2')
