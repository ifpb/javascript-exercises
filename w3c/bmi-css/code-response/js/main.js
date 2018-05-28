const alturaElm = document.querySelector('input[name=altura]')
const pesoElm = document.querySelector('input[name=peso]')
const imcElm = document.querySelector('#imc')
const imcBtn = document.querySelector('button')

function imc(peso, altura, sexo) {
  const imc = peso / altura ** 2

  if (sexo === 'feminino')
    if (imc < 19.1)
      return 'Abaixo do Peso'
    else if (imc < 25.8)
      return 'Peso Normal'
    else if (imc < 27.3)
      return 'Marginalmente Acima do Peso'
    else if (imc < 32.3)
      return 'Acima do Peso Ideal'
    else
      return 'Obeso'
  else
    if (imc < 20.7)
      return 'Abaixo do Peso'
    else if (imc < 26.4)
      return 'Peso Normal'
    else if (imc < 27.8)
      return 'Marginalmente Acima do Peso'
    else if (imc < 31.1)
      return 'Acima do Peso Ideal'
    else
      return 'Obeso'
}

function calculadoraDeIMC() {
  const altura = alturaElm.value
  const peso = pesoElm.value
  const sexo = document.querySelector('input[name=sexo]:checked').value
  const result = imc(peso, altura, sexo)
  imcElm.value = result
  showBorder(result)
}

function cleanFields() {
  alturaElm.value = ''
  pesoElm.value = ''
  imcElm.value = ''
  alturaElm.focus()
}

// Style
const border = {
  'Abaixo do Peso': 'border border-warning bg-warning text-white',
  'Peso Normal': 'border border-sucess bg-success text-white',
  'Marginalmente Acima do Peso': 'border border-warning bg-warning text-white',
  'Acima do Peso Ideal': 'border border-warning bg-warning text-white',
  'Obeso': 'border border-danger bg-danger text-white'
}

function showBorder(resultado) {
  imcElm.setAttribute('class', `form-control form-control-lg ${border[resultado]}`)
}

function hideBorder() {
  imcElm.setAttribute('class', 'form-control form-control-lg')
}

// Events
imcBtn.addEventListener('click', function() {
  calculadoraDeIMC()
})

document.addEventListener('keyup', function(event) {
  if (event.key == 'Escape') {
    cleanFields()
    hideBorder()
  } else if (event.key == 'Enter') {
    calculadoraDeIMC()
  }
})