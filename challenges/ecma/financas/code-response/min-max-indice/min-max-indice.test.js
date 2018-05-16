import { minMaxIndice } from './min-max-indice.js'

// http://www.portalbrasil.net/ipca.htm
const ipca = {
  '2018': [0.29, 0.32, 0.09, 0.22],
  '2017': [0.38, 0.33, 0.25, 0.14, 0.31, -0.23, 0.24, 0.19, 0.16, 0.42, 0.28, 0.44],
  '2016': [1.27, 0.9, 0.43, 0.61, 0.78, 0.35, 0.52, 0.44, 0.08, 0.26, 0.18, 0.3],
  '2015': [1.24, 1.22, 1.32, 0.71, 0.74, 0.79, 0.62, 0.22, 0.54, 0.82, 1.01, 0.96]
}

// http://www.portalbrasil.net/poupanca_mensal.htm
const poupanca = {
  '2018': [0.4273, 0.3994, 0.3994, 0.3855],
  '2017': [0.6858, 0.6709, 0.5304, 0.6527, 0.5000, 0.5768, 0.5539, 0.5626, 0.5512, 0.5000, 0.4690, 0.4273],
  '2016': [0.7261, 0.6327, 0.5962, 0.7179, 0.6311, 0.6541, 0.7053, 0.6629, 0.7558, 0.6583, 0.6609, 0.6435],
  '2015': [0.6058, 0.5882, 0.5169, 0.6302, 0.6079, 0.6159, 0.6822, 0.7317, 0.6876, 0.6930, 0.6799, 0.6303]
}

describe('MinMaxIndice', function () {

  test('obtendo o valor mínimo e máximo da poupança entre 01/2015 e 12/2017', function () {
    expect(minMaxIndice(poupanca, '01/2015', '12/2017')).toEqual([0.4273, 0.7558])
  })

  test('obtendo o valor mínimo e máximo do IPCA entre 01/2015 e 12/2017', function () {
    expect(minMaxIndice(ipca, '01/2015', '12/2017')).toEqual([-0.23, 1.32])
  })

})
