const alturaField = document.querySelector('input[name=altura]')
const pesoField = document.querySelector('input[name=peso]')
const warningField = document.querySelector('#warning')
const imcField = document.querySelector('#imc')

const warningMessage =
  `<div class="alert alert-warning" role="alert">
        <strong>Antes de calcular informe o peso e a altura.</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`

const border = {
  'Abaixo do Peso': 'border border-warning bg-warning text-white',
  'Peso Normal': 'border border-sucess bg-success text-white',
  'Marginalmente Acima do Peso': 'border border-warning bg-warning text-white',
  'Acima do Peso Ideal': 'border border-warning bg-warning text-white',
  'Obeso': 'border border-danger bg-danger text-white'
}

// http://www.calcule.net/imc.calculo.indice.de.massa.corporal.a.php
function calculadoraDeIMC() {
  let altura = alturaField.value
  let peso = pesoField.value
  let sexo = document.querySelector('input[name=sexo]:checked').value
  let imc = peso / altura ** 2
  let resultado

  if (isNaN(altura) || altura == 0 && isNaN(peso) || peso == 0) {
    warningField.innerHTML = warningMessage
  } else {
    warningField.innerHTML = ''
    imcField.className = 'form-control form-control-lg text-black'

    if (sexo === 'feminino')
      if (imc < 19.1)
        resultado = 'Abaixo do Peso'
      else if (imc < 25.8)
        resultado = 'Peso Normal'
      else if (imc < 27.3)
        resultado = 'Marginalmente Acima do Peso'
      else if (imc < 32.3)
        resultado = 'Acima do Peso Ideal'
      else
        resultado = 'Obeso'
    else
      if (imc < 20.7)
        resultado = 'Abaixo do Peso'
      else if (imc < 26.4)
        resultado = 'Peso Normal'
      else if (imc < 27.8)
        resultado = 'Marginalmente Acima do Peso'
      else if (imc < 31.1)
        resultado = 'Acima do Peso Ideal'
      else
        resultado = 'Obeso'
  }

  imcField.value = resultado || ''

  if (resultado)
    setTimeout(function () {
      imcField.className = `form-control form-control-lg ${border[resultado]}`
    }, 400)
}