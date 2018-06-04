const send = document.querySelector('button')
const task = document.querySelector('#task')
const tasks = document.querySelector('#tasks')
const topTask = document.querySelector('#top-task')
const topTasks = document.querySelector('#top-tasks')
const topTasksActived = document.querySelector('.top-task input')
const status = document.querySelector('.status span')
const maxLength = 40

send.addEventListener('click', function() {
  addTask()
})

document.addEventListener('keyup', function(event) {
  if (event.key == 'Enter')
    addTask()
})

task.addEventListener('keyup', function() {
  const length = maxLength - task.value.length
  status.innerHTML = length
  if (length < 0)
    status.parentNode.className = 'status red'
  else if (length < 5)
    status.parentNode.className = 'status yellow'
  else 
    status.parentNode.className = 'status'
})

function addTask() {
  const taskView = `<li><span class="task">${task.value}</span><span class="close">&times;</span></li>`
  const taskActived = topTasksActived.checked ? topTasks : tasks
  taskActived.insertAdjacentHTML('afterbegin', taskView)
  taskActived.firstChild.onclick = function () {
    this.classList.toggle('checked')
  }
  taskActived.firstChild.lastChild.onclick = function () {
    this.parentNode.remove()
  }
  task.value = ''
  status.parentNode.className = 'status'
  status.innerHTML = maxLength
  topTasksActived.checked = false
}