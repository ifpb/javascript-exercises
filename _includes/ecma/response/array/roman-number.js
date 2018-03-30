
function toRoman(number) {
  const romanMatrix = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ]

  let result = []

  for (let romanInfo of romanMatrix) {
    let count = parseInt(number/romanInfo[0])
    number = number%romanInfo[0]
    if(count)
      result.push(romanInfo[1].repeat(count))
  }

  return result.join('')
}

export { toRoman }
