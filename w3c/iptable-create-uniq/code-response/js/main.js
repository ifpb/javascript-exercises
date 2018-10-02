class IpTables {

  constructor() {
    this.addresses = []

    this.ipTableContent = document.querySelector('table#iptable tbody')
    this.warningField = document.querySelector('#warning')
    this.addressForm = document.querySelector('form#add-ip')
    this.addressInput = Array.from(this.addressForm.querySelectorAll('input'))

    this.loadAddAddreessEvent(document.querySelector('button'))
  }

  addAddress(address) {
    this.addresses.push(address)
  }

  hasAddress(address) {
    return this.addresses.some(addressSelected => addressSelected.ip == address)
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
    </tr>`

    this.ipTableContent.insertAdjacentHTML('afterbegin', row)
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

}

const iptables = new IpTables()
