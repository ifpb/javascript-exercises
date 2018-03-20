
function halfSquare(size){
  let result = ''
  let block = '#'
  for(let row = 1; row <= size; row++){
    if(row > 1)
      result += '\n'
    for(let col = 1; col <= size; col++){
      result += row >= col ? block : ' '
      result += row <= col ? block : ' '
      result += row + col <= size + 1 ? block : ' '
      result += row + col >= size + 1 ? block : ' '
    }
  }
  return result
}

function triangleText(size) {
  let result = ''
  let block = '#'
  for(let row = 1; row <= size; row++){
    if(row > 1)
      result += '\n'
    for(let col = 1; col <= size; col++){
      result += row >= col ? block : ' '
    }
  }
  return result
}

function halfDiamondText(size) {
  let result = ''
  let block = '#'
  for(let row = 1; row <= 2*size-1; row++){
    if(row > 1)
      result += '\n'
    for(let col = 1; col <= size; col++){
      result += (row >= col) && (row + col <= 2*size) ? block : ' '
    }
  }
  return result
}

function diamondText(size) {
  let result = ''
  let block = '#'
  for(let row = 1; row <= 2*size-1; row++){
    if(row > 1)
      result += '\n'
    for(let col = 1; col <= 2*size-1; col++){
      let isBlock = (row+(size-1) >= col) && (row <= col+(size-1)) &&
                    (row + col <= size+2*size-1) &&
                    (row + col >= size + 1)
      result += isBlock ? block : ' '
    }
  }
  return result
}

function boardText(size) {
  let result = ''
  let block = '#'
  for(let row = 1; row <= size; row++){
    if(row > 1)
      result += '\n'
    for(let col = 1; col <= size; col++){
      result += (col+row)&1 ? ' ' : block
    }
  }
  return result
}

export { triangleText, halfDiamondText, diamondText, boardText }
