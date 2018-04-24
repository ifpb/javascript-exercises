
function addingMatrix(a, b) {
  let sum = []
  for (var row = 0; row < a.length; row++) {
    let temp = []
    for (var col = 0; col < a[0].length; col++) {
      temp[col] = a[row][col] + b[row][col]
    }
    sum.push(temp)
  }
  return sum
}

function multiplyingMatrix(a, b) {
  let result = []
  for (var x = 0; x < a.length; x++) {
    let temp = []
    for (var y = 0; y < a.length; y++) {
      let sum = 0
      for (var z = 0; z < b.length; z++) {
        sum += a[x][z] * b[z][y]
      }
      temp.push(sum)
    }
    result.push(temp)
  }
  return result
}

export { addingMatrix, multiplyingMatrix }
