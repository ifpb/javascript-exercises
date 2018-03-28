import { triangleText, halfDiamondText, diamondText, boardText  } from './figure-text.mjs'

// Figure Text Tool

// making triangle text with size 1
console.log(triangleText(1))
console.log(
      '#'
)

// making triangle text with size 2
console.log(triangleText(2))
console.log(
      '# \n'+
      '##'
)

// making triangle text with size 3
console.log(triangleText(3))
console.log(
      '#  \n'+
      '## \n'+
      '###'
)

// making half diamond text with size 1
console.log(halfDiamondText(1))
console.log(
      '#'
)

// making half diamond text with size 2
console.log(halfDiamondText(2))
console.log(
      '# \n'+
      '##\n'+
      '# '
)

// making half diamond text with size 3
console.log(halfDiamondText(3))
console.log(
      '#  \n'+
      '## \n'+
      '###\n'+
      '## \n'+
      '#  '
)

// making diamond text with size 1
console.log(diamondText(1))
console.log(
      '#'
)

// making diamond text with size 2
console.log(diamondText(2))
console.log(
      ' # \n'+
      '###\n'+
      ' # '
)

// making diamond text with size 3
console.log(diamondText(3))
console.log(
      '  #  \n'+
      ' ### \n'+
      '#####\n'+
      ' ### \n'+
      '  #  '
)

// making board text with size 1
console.log(boardText(1))
console.log(
      '#'
)

// making board text with size 2
console.log(boardText(2))
console.log(
      '# \n'+
      ' #'
)

// making board text with size 3
console.log(boardText(3))
console.log(
      '# #\n'+
      ' # \n'+
      '# #'
)

// making board text with size 4
console.log(boardText(4))
console.log(
      '# # \n'+
      ' # #\n'+
      '# # \n'+
      ' # #'
)
