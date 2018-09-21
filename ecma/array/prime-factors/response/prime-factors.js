
function primeFactors(number) {
  let factors = []
  for (let i = 2; i <= number; i++) {
    while ((number % i) === 0) {
        factors.push(i)
        number /= i
    }
  }
  return factors
}

export { primeFactors }
