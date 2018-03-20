
function isPrime(number) {
  // for(let i = 2; i < number; i++)
  for(let i = 2, s = Math.sqrt(number); i <= s; i++)
    if(number % i === 0) return false;
  return number !== 1;
}

/**
 * begin: 1..n
 * end: 1..n, end > begin
 */
function nthPrime(nth) {
  let result = 2

  for (let number = 3, count = 1; count < nth; number++) {
    if(isPrime(number)) {
      result = number
      count++
    }
  }

  return result
}

export { nthPrime }
