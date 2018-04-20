
const panelsLoading = document.querySelector("body>header .material-icons")

const systemInfo = document.querySelector("#system-info")
const systemInfoTbody = systemInfo.querySelector("tbody")
const systemInfoLoading = systemInfo.querySelector(".material-icons")

const networkInfo = document.querySelector("#network-info")
const networkInfoTable = networkInfo.querySelector("table")
const networkInfoLoading = networkInfo.querySelector(".material-icons")

const memoryInfo = document.querySelector("#memory-info")
const memoryInfoTbody = memoryInfo.querySelector("tbody")
const memoryInfoLoading = memoryInfo.querySelector(".material-icons")

const serviceInfo = document.querySelector("#service-info")
const serviceInfoTbody = serviceInfo.querySelector("tbody")
const serviceInfoLoading = serviceInfo.querySelector(".material-icons")

const diskInfo = document.querySelector("#disk-info")
const diskInfoTable = diskInfo.querySelector("table")
const diskInfoLoading = diskInfo.querySelector(".material-icons")

const systemHeader = {
  "hostname": "Hostname",
  "os": "OS",
  "osVersion": "OS Version",
  "kernelVersion": "Kernel Version",
  "uptime": "Uptime",
  "lastBoot": "Last boot"
}

const memoryHeader = {
  "usedPercent": "Used%",
  "used": "Used",
  "free": "Free",
  "total": "Total"
}

const createFieldedRow = (header, data) => `<tr><td>${header[data[0]]}</td><td>${data[1]}</td></tr>`
const createHeaderRow = data => `<tr><th>${data.join('</th><th>')}</th></tr>`
const createDataRow = data => `<tr><td>${data.join('</td><td>')}</td></tr>`

const statusCheck = value => (value === 'down') ? 'offline' : 'online'

const clearTable = table => {
    Array.from(table.querySelectorAll('td, th')).forEach(td => {
      td.innerHTML = ' '
    })
}

const loadSystemInfo = () => {
  clearTable(systemInfoTbody)
  fetch('data/system.json')
    .then(res => res.json())
    .then(systemInfo => {
      systemInfoTbody.innerHTML = Object.entries(systemInfo)
      .map(row => createFieldedRow(systemHeader, row))
      .join('')
    })
}

const loadNetworkInfo = () => {
  clearTable(networkInfoTable)
  fetch('data/network.json')
    .then(res => res.json())
    .then(networkInfo => {
      const header = Object.keys(networkInfo[0])
      const datas = networkInfo.map(info => Object.values(info))

      networkInfoTable.innerHTML = [
        createHeaderRow(header),
        ...datas.map(createDataRow)
      ].join('')
    })
}

const loadMemoryInfo = () => {
  clearTable(memoryInfoTbody)
  fetch('data/memory.json')
    .then(res => res.json())
    .then(memoryInfo => {
      const datas = Object.entries(memoryInfo).map(info => Object.values(info))

      datas[0][1] = `<div class="memory-status">
        <div class="memory-used" data-used="${datas[0][1]}">${datas[0][1]}%</div>
      </div>`

      memoryInfoTbody.innerHTML = datas
        .map(row => createFieldedRow(memoryHeader, row))
        .join('')
    })
}

const loadServiceInfo = () => {
  clearTable(serviceInfoTbody)
  fetch('data/service.json')
    .then(res => res.json())
    .then(serviceInfo => {
      const datas = serviceInfo.map(Object.values)
      datas.forEach(value => {
          let status = statusCheck(value[0])
          value[0] = `<span class="${status}">${status.toUpperCase()}</span>`
        })

      serviceInfoTbody.innerHTML = datas
          .map(createDataRow)
          .join('')
    })
}

const loadDiskInfo = () => {
  clearTable(diskInfoTable)
  fetch('data/disk.json')
    .then(res => res.json())
    .then(diskInfo => {
      const header = Object.keys(diskInfo[0])
      const datas = diskInfo.map(info => Object.values(info))
      datas.forEach(value => {
          value[2] = `<div class="disk-status">
            <div class="disk-used" data-used="${value[2]}">${value[2]}%</div>
          </div>`
        })

      diskInfoTable.innerHTML = [
        createHeaderRow(header),
        ...datas.map(createDataRow)
      ].join('')
    })
}

const infoLoads = [loadSystemInfo, loadNetworkInfo, loadMemoryInfo, loadServiceInfo, loadDiskInfo]
const buttonLoads = [systemInfoLoading, networkInfoLoading, memoryInfoLoading, serviceInfoLoading, diskInfoLoading]

const loadAll = () => infoLoads.map(loading => loading())

infoLoads.forEach((loading, index) => {
  loading()
  buttonLoads[index].addEventListener('click', loading)
})

panelsLoading.addEventListener('click', loadAll)
