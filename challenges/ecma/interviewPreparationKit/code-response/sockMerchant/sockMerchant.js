
function sockMerchant(socks) {
  const countSocks = {}
  for (const s of socks) {
    countSocks[s] = countSocks[s] ? countSocks[s] + 1 : 1
  }
  return Object.values(countSocks)
    .reduce((t, c) => t + Math.floor(c / 2), 0)
}

export { sockMerchant }