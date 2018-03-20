function getInfo(cep) {
  return Object
    .keys(cep)
    .map(key => `${key}: ${cep[key]}`)
    .join(',\n')
}

module.exports = getInfo
