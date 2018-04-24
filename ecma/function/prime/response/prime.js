
function isPrime(number) {
  // for(let i = 2; i < number; i++)
  for(let i = 2, s = Math.sqrt(number); i <= s; i++)
    if(number % i === 0) return false;
  return number !== 1;
}

export { isPrime }
