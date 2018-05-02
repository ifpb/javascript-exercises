// http://www.calcule.net/imc.calculo.indice.de.massa.corporal.a.php
function calculadoraDeIMC() {
  let altura = document.querySelector('input[name=altura]').value
  let peso = document.querySelector('input[name=peso]').value
  let sexo = document.querySelector('input[name=sexo]:checked').value
  let imc = peso / altura ** 2
  let resultado

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

  document.querySelector('#imc').value = resultado
}