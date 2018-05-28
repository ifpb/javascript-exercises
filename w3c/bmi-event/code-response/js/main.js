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
  let altura = alturaElm.value
  let peso = pesoElm.value
  let sexo = document.querySelector('input[name=sexo]:checked').value
  imcElm.value = imc(peso, altura, sexo)
}

// Events
imcBtn.addEventListener('click', function() {
  calculadoraDeIMC()
})

document.addEventListener('keyup', function(event) {
  if (event.key == 'Escape') {
    alturaElm.value = ''
    pesoElm.value = ''
    imcElm.value = ''
    alturaElm.focus()
  } else if (event.key == 'Enter') {
    calculadoraDeIMC()
  }
})