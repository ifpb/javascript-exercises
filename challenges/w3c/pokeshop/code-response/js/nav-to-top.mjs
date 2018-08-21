
function createNavTop() {
  document.body.insertAdjacentHTML('beforeend', `<div class="nav-top hidden">
      <i class="icon-chevron-up"></i>
    </div>`)

  clickEvent()
  scrollEvent()
}

function clickEvent() {
  const navTop = document.querySelector('.nav-top')
  navTop.addEventListener('click', () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
      left: 0
    })
  })
}

function scrollEvent() {
  const navTop = document.querySelector('.nav-top')
  document.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight * 1 / 3) {
      navTop.className = 'nav-top'
    } else {
      navTop.className = 'nav-top hidden'
    }
  })
}

export { createNavTop }