const widgetSummariesContentField = document.querySelector('#app-versions .x_content') 

const widgetSummaries = [{
    version: '0.1.5.2',
    progress: 60,
    size: '123k'
  },
  {
    version: '0.1.5.3',
    progress: 45,
    size: '53k'
  },
  {
    version: '0.1.5.4',
    progress: 25,
    size: '23k'
  },
  {
    version: '0.1.5.5',
    progress: 5,
    size: '3k'
  },
  {
    version: '0.1.5.6',
    progress: 2,
    size: '1k'
  }
]

let widgetSummariesContent = '<h4>App Usage across versions</h4>'
for (let widgetSummary of widgetSummaries) {
  widgetSummariesContent += 
  `<div class="widget_summary">
    <div class="w_left w_25">
      <span>${widgetSummary.version}</span>
    </div>
    <div class="w_center w_55">
      <div class="progress">
        <div class="progress-bar bg-green" role="progressbar" aria-valuenow="${widgetSummary.progress}" aria-valuemin="0" aria-valuemax="100" style="width: ${widgetSummary.progress}%;">
          <span class="sr-only">${widgetSummary.progress}% Complete</span>
        </div>
      </div>
    </div>
    <div class="w_right w_20">
      <span>${widgetSummary.size}</span>
    </div>
    <div class="clearfix"></div>
  </div>`
}
widgetSummariesContentField.innerHTML = widgetSummariesContent