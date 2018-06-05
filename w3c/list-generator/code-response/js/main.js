const quantityInput = document.querySelector('.quantity')
const list = document.querySelector('.list')
const generateBtn = document.querySelector('button')

generateBtn.addEventListener('click', () => {
  const quantity = quantityInput.value
  const listContent = range(1, quantity)
    .map(i => `<li>Item ${i}</li>`)
    .join('')
  list.innerHTML = listContent
})

function range(start, end) {
  result = []
  for (let flag = start; flag <= end; flag++) {
    result.push(flag)
  }
  return result
}