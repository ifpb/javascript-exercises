const entitiesContainer = document.querySelector('.entities')
const entitiesUrl = 'https://raw.githubusercontent.com/w3c/html/master/entities.json'

fetch(entitiesUrl)
  .then(res => res.json())
  .then(entities => {
    for (const entity in entities) {
      const entityBox = `<div class="entity">
        <div class="character">${entity}</div>
        <div class="named">${entity.replace('&', '&amp;')}</div>
      </div>`
      entitiesContainer.insertAdjacentHTML('beforeend', entityBox) 
    }
  })