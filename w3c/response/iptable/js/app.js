class IpTables {

  constructor() {
    this.addresses = []

    this.ipTableContent = document.querySelector('table#iptable tbody')
    this.warningField = document.querySelector('#warning')
    this.addressForm = document.querySelector('form#add-ip')
    this.addressInput = Array.from(this.addressForm.querySelectorAll('input'))
    
    this.loadAddresses()
    this.loadAddAddreessEvent(document.querySelector('button'))
  }

  // Data
  loadAddresses() {
    // fetch('https://ifpb.github.io/ls/codes/w3c/tasks/iptable/data/addresses.json')
    fetch('data/addresses.json')
      .then(res => res.json())
      .then(addresses => {
        this.addresses = addresses
        this.render()
      })
  }

  addAddress(address) {
    this.addresses.push(address)
  }

  hasAddress(address) {
    return this.addresses.some(addressSelected => addressSelected.ip == address)
  }

  removeAddress(ipAddress) {
    this.addresses = this.addresses.filter(addressSelected => addressSelected.ip != ipAddress)
  }

  // View
  render() {
    this.addresses.forEach(address => this.genRowContent(address))
  }

  addRow(address) {
    if (this.hasAddress(address.ip)) {
      this.showAlert()
    } else {
      this.addAddress(address)
      this.genRowContent(address)
      this.hiddenAlert()
    }
  }

  genRowContent(address) {
    const row = `<tr data-ip="${address.ip}">
      <td class="ip">${address.ip}</td>
      <td class="mask">${address.mask}</td>
      <td class="version">${address.version}</td>
      <td>
        <i class="material-icons clear">clear</i>
        <i class="material-icons edit">mode_edit</i>
      </td>
    </tr>`

    this.ipTableContent.insertAdjacentHTML('afterbegin', row)

    const clearButton = document.querySelector(`tr[data-ip='${address.ip}'] .clear`)
    this.loadRemoveAddressEvent(clearButton)

    const editButton = document.querySelector(`tr[data-ip='${address.ip}'] .edit`)
    this.loadEditAddressEvent(editButton)
  }
  
  showAlert() {
    this.warningField.innerHTML = `<div class="alert alert-warning" role="alert">
      <strong>O endereço já foi adicionado.</strong>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>`
  }

  hiddenAlert() {
    this.warningField.innerHTML = ''
  }
  
  // Events
  loadAddAddreessEvent(addButton) {
    addButton.addEventListener('click', (event) => {
      event.preventDefault()

      const formData = new FormData(this.addressForm)
      const ip = formData.get('ip') || '-'
      const mask = formData.get('mask') || '-'
      const version = formData.get('version') || '-'
      const address = { ip, mask, version }

      this.addressInput.forEach(input => input.value = '')
      this.addRow(address)
      addButton.blur()
    })
  }

  loadRemoveAddressEvent(clearButton) {
    clearButton.addEventListener('click', () => {
      const tr = clearButton.parentNode.parentNode
      this.removeAddress(tr.dataset.ip)
      tr.remove()
    })
  }

  loadEditAddressEvent(editButton) {
    editButton.addEventListener('click', () => {
      const tr = editButton.parentNode.parentNode

      const fieldClasses = ['ip', 'mask', 'version']
      fieldClasses.map((fieldClass) => {
        const field = tr.querySelector(`.${fieldClass}`)
        if (!field.innerHTML.includes('<input')){
          field.innerHTML = fieldClass == 'ip' ? 
            `<input type="text" value="${field.innerHTML}" autofocus>`:
            `<input type="text" value="${field.innerHTML}">`
        }
      })

      this.loadUpadeAddressEvent(tr)
    })
  }

  loadUpadeAddressEvent(tr) {
    tr.addEventListener('keydown', (event) => {
      if (event.key == 'Enter') {
        const fieldClasses = ['ip', 'mask', 'version']
        const tds = fieldClasses.map(fieldClass => tr.querySelector(`.${fieldClass}`))
        const inputs = tds.map(td => td.querySelector('input'))
        const values = inputs.map(input => input.value)
        const ipAddress = values[0]

        if (tr.dataset.ip == ipAddress) {
          tds.forEach((td, index) => td.innerHTML = values[index])
          this.hiddenAlert()
        } else if (tr.dataset.ip != ipAddress && this.hasAddress(ipAddress)) {
          this.showAlert()
        } else {
          this.removeAddress(tr.dataset.ip)
          const address = {
            ip: values[0],
            mask: values[1],
            version: values[2]
          }
          this.addAddress(address)
          tr.dataset.ip = address.ip
          tds.forEach((td, index) => td.innerHTML = values[index])
          this.hiddenAlert()
        }
      }
    })
  }

}

const iptables = new IpTables()
