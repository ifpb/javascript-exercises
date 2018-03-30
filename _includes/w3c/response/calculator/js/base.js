const digits = document.querySelectorAll('.digits button, .operations button, .modifiers button')
const result = document.querySelector('h1')

for(let digit of digits) {
  digit.addEventListener('click', function(event) {
    event.target.blur()
    let target = event.target.innerHTML
    if(target == 'AC')
      result.innerHTML = '0'
    else if(target == '+/-')
      result.innerHTML = eval((`-1*(${result.innerHTML.replace(/x/g, '*')})`))
    else if(target == '%')
      result.innerHTML = eval((`(${result.innerHTML.replace(/x/g, '*')})/100`))
    else if(target == '=')
      result.innerHTML = eval(result.innerHTML.replace(/x/g, '*'))
    else if(result.innerHTML === '0' && target != '.')
      result.innerHTML = target
    else if (target == 'X')
      result.innerHTML += 'x'
    else if(/[\d\.+-\/]/.test(target))
      result.innerHTML += target
  })
}

document.body.addEventListener('keydown', function(event){
  if (event.keyCode == 13){
    let resultEval = eval(result.innerHTML.replace(/x/g, '*'))
    result.innerHTML = resultEval
  } else if(event.keyCode == 27){
    result.innerHTML = '0'
  }
})
