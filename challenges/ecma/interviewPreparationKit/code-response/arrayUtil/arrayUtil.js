
function rotLeft(a, d) {
  return a.slice(d).concat(a.slice(0, d))
}

function stats(arr) {
  const stat = [0, 0, 0]
  arr.forEach((e) => {
    if (e > 0)
      stat[0] += 1
    else if (e < 0)
      stat[1] += 1
    else
      stat[2] += 1
  })

  return stat.map(e => Number(e / arr.length).toFixed(6))
}

function miniMaxSum(arr) {
  arr.sort()
  const sum = (x, y) => x + y
  const result = [arr.slice(0, -1).reduce(sum), arr.slice(1).reduce(sum)]
  return result
}

function highestFrequency(types) {
  const count = []
  let highestFrequency = 1
  for (const type of types) {
    if (count[type])
      count[type] += 1
    else
      count[type] = 1
  }
  for (const type in count) {
    if (count[type] > count[highestFrequency]) {
      highestFrequency = +type
    }
  }
  return highestFrequency
}

export {
  rotLeft,
  stats,
  miniMaxSum,
  highestFrequency
}