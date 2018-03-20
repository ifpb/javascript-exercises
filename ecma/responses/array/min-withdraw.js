
function withdraw(number) {
  let banknotes = [100, 50, 20, 10, 5, 2, 1]
  let result = []

  for (let banknote of banknotes) {
    let count = parseInt(number/banknote)
    number = number%banknote
    if(count)
      result.push([banknote, count])
  }
  
  return result
}

module.exports = withdraw
