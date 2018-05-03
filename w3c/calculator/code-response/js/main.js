const digits = document.querySelectorAll('.digits button, .operations button, .modifiers button')
const result = document.querySelector('h1')

for(let digit of digits) {
  digit.addEventListener('click', function(event) {
    event.target.blur()
    let target = event.target.innerHTML
    if(target == 'AC')
      result.innerHTML = '0'
    else if(target == '+/-')
      result.innerHTML = eval(`-1*(${result.innerHTML.replace(/x/g, '*')})`)
    else if(target == '%')
      result.innerHTML = eval(`(${result.innerHTML.replace(/x/g, '*')})/100`)
    else if(target == '=')
      result.innerHTML = eval(result.innerHTML.replace(/x/g, '*'))
    else if(result.innerHTML === '0' && target != '.')
      result.innerHTML = target
    else if ("0123456789+-/".includes(target))
      result.innerHTML += target
    else if (target == 'X')
      result.innerHTML += 'x'
  })
}

document.body.addEventListener('keydown', function(event){
  if (event.key == "Escape")
    result.innerHTML = '0'
  else if (event.key == '%')
    result.innerHTML = eval(`(${result.innerHTML.replace(/x/g, '*')})/100`)
  else if (event.key == "Enter" || event.key == "=")
    result.innerHTML = eval(result.innerHTML.replace(/x/g, '*'))
  else if (result.innerHTML === '0' && "123456789".includes(event.key))
    result.innerHTML = event.key
  else if ("0123456789+-/".includes(event.key))
    result.innerHTML += event.key
  else if (event.key == "*")
    result.innerHTML = + 'x'
})
