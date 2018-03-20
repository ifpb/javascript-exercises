const cepField = document.querySelector('#cep')
const cepErrorField = document.querySelector('#cepError')
const streetField = document.querySelector('#street')
const numberField = document.querySelector('#number')
const neighborhoodField = document.querySelector('#neighborhood')
const cityField = document.querySelector('#city')
const stateField = document.querySelector('#state')

cepField.focus()

cepField.addEventListener('focus', () => {
  cleanCepError()
})

cepField.addEventListener('blur', () => {
  let cep = cepField.value

  if (/\d{5}-?\d{3}/.test(cep)) {
    loadCepInfo(cep)
  } else {
    showCepError()
  }
})

function loadCepInfo(cep) {
  let url = `https://viacep.com.br/ws/${cep}/json/`
  fetch(url)
    .then(res => res.json())
    .then(cepInfo => {
      if(cepInfo.erro) {
        cleanAddressFields()
      } else {
        streetField.value = cepInfo.logradouro
        neighborhoodField.value = cepInfo.bairro
        cityField.value = cepInfo.localidade
        stateField.value = cepInfo.uf
  
        numberField.focus()
        cleanCepError()
      }
    })
    .catch(error => {
      showCepError()
    })
}

function cleanCepError() {
  cepField.classList.remove('input-cep-error')
  cepErrorField.classList.add('hidden')

  // cepField.style.cssText = 'border: 1px solid #C7C7CD; background: #fff;'
  // cepErrorField.style.cssText = 'display: none;'

  // cepField.style.border = '1px solid #C7C7CD'
  // cepField.style.backgroundColor = '#fff'
  // cepErrorField.style.display = 'none'
}

function showCepError() {
  cepField.classList.add('input-cep-error')
  cepErrorField.classList.remove('hidden')

  // cepField.style.cssText = 'border: 1px solid #f00; background: rgba(255, 0, 0, .1);'
  // cepErrorField.style.cssText = 'display: block;'

  // cepField.style.border = '1px solid #f00'
  // cepField.style.backgroundColor = 'rgba(255, 0, 0, .1)'
  // cepErrorField.style.display = 'block'

  // cepField.focus()
  cleanAddressFields()
}

function cleanAddressFields() {
  streetField.value = ''
  numberField.value = ''
  neighborhoodField.value = ''
  cityField.value = ''
  stateField.value = ''
}