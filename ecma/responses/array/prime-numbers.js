
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
  let result = []

  if(end < begin)
    return result

  if(end) {
    for (let i = begin; i <= end; i++)
      if(isPrime(i))
        result.push(i)
  } else {
    for (let i = 2; result.length < begin; i++)
      if(isPrime(i))
        result.push(i)
  }

  return result
}

module.exports = primes
