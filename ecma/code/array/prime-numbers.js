
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
function primes(begin, end) {
  // TODO
}

export { primes }
