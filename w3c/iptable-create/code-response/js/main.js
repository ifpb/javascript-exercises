class IpTables {

  constructor() {
    this.ipTableContent = document.querySelector('table#iptable tbody')
    this.addressForm = document.querySelector('form#add-ip')
    this.addressInput = Array.from(this.addressForm.querySelectorAll('input'))
    
    this.loadAddAddreessEvent(document.querySelector('button'))
  }

  // View
  genRowContent(address) {
    const row = `<tr data-ip="${address.ip}">
      <td class="ip">${address.ip}</td>
      <td class="mask">${address.mask}</td>
      <td class="version">${address.version}</td>
    </tr>`

    this.ipTableContent.insertAdjacentHTML('afterbegin', row)
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
      this.genRowContent(address)
      addButton.blur()
    })
  }

}

const iptables = new IpTables()
