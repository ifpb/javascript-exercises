class Modal {
  constructor() {
    this.modal = document.querySelector('.modal')
    this.modalBody = this.modal.querySelector('.modal-body')
    this.backButton = this.modal.querySelector('.back-button')

    this.loadBackButtonEvent()
    this.loadEscapeEvent()
  }

  toggle() {
    this.modal.classList.toggle('actived')
  }
  
  isActived() {
    return this.modal.classList.contains('actived')
  }

  loadBody(content) {
    this.toggle()
    this.modalBody.innerHTML = content
  }

  loadBackButtonEvent() {
      this.backButton.addEventListener('click', () => {
        this.toggle()
      })
    }

  loadEscapeEvent() {
    document.addEventListener('keyup', (event) => {
      if (event.key == 'Escape' && this.isActived()) {
        this.toggle()
      }
    })
  } 
}

export { Modal }
