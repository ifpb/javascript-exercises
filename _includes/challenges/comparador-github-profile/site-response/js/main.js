// TODO
// - loading
// - TOKEN
// - invalid repository
// - pluralize: commits, contributors...

async function getJSON(url) {
  const header = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'token=TOKEN'
    }
  }
  const result = await fetch(url, header)
  const json = await result.json()
  return json
}

async function getRepository(repository) {
  const [owner, repos] = repository
  const repoInfo = `https://api.github.com/repos/${owner}/${repos}`
  const repoLanguages = `https://api.github.com/repos/${owner}/${repos}/languages`
  const repoContributors = `https://api.github.com/repos/${owner}/${repos}/contributors`
  const repoCommits = `https://api.github.com/repos/${owner}/${repos}/commits`

  const [info, languages, contributors, commits] = await Promise.all([
    getJSON(repoInfo),
    getJSON(repoLanguages),
    getJSON(repoContributors),
    getJSON(repoCommits)
  ])

  return {
    name: repos, 
    owner: owner,
    created_at: info.created_at, 
    updated_at: info.updated_at, 
    forks: info.forks, 
    stargazers: info.stargazers_count,
    commits: commits.length,
    contributors: contributors.length,
    languages: languages
  }
}

async function getReposData(repositories) {
  const getReposData = async repos => await getRepository(repos)
  const reposDatas = await Promise.all(repositories.map(getReposData))
  return reposDatas
}

async function compareRepos(repositories) {
  const reposDatas = await getReposData(repositories)
  reposDatas.forEach(showRepos)
  compareContent.classList.remove('hidden')
}

function showRepos(repos) {
  const createdAt = dateFns.format(new Date(repos.created_at), 'MMM DDDo, YYYY')
  const lifeCycle = dateFns.distanceInWordsToNow(repos.updated_at)

  const project = `<div class="col-4">
    <a class="repos" href="https://github.com/${ repos.owner }/${ repos.name }">${ repos.name }</a>
    <span class="fa fa-user"></span>
    <a class="owner" href="https://github.com/${ repos.owner }">${ repos.owner }</a>
    <br>
    <span class="fa fa-circle-o"></span> ${ createdAt }
    <br>
    <span class="fa fa-refresh"></span>
    <span>${ lifeCycle }</span>
    <br>
  </div>`
  projects.insertAdjacentHTML('beforeend', project)

  const community = `<div class="col-4">
    <div class="stars">
      <span class="fa fa-star"></span>
      <a href="https://github.com/${ repos.owner }/${ repos.name }/stargazers">${ repos.stargazers }</a>
      <span class="fa fa-code-fork"></span>
      <a href="https://github.com/${ repos.owner }/${ repos.name }/network">${ repos.forks }</a>
      <br>
    </div>
    <span class="fa fa-users"></span>
    <a href="https://github.com/${ repos.owner }/${ repos.name }/contributors">${ repos.contributors }</a> contributors
  </div>`
  communities.insertAdjacentHTML('beforeend', community)

  const code = `<div class="col-4">
    <div class="commits">
      <a href="https://github.com/${ repos.owner }/${ repos.name }/commits">${ repos.commits }</a> commits
    </div>
    <span class="fa fa-language"></span>
    ${ showLanguage(repos.languages) }
  </div>`
  codes.insertAdjacentHTML('beforeend', code)
}

function showLanguage(languages) {
  const total = Object.values(languages).reduce((s, v) => s + v)
  return Object.entries(languages)
    .map(([language, value], index) => {
      const percent = ((100 * value) / total).toFixed(2)
      return index ?
        `<span class="language"><strong>${language}</strong>: ${percent }%</span>`:
        `<span class="language">${language}: ${percent }%</span>`
    })
    .join()
}

const compareBtn = document.querySelector('.btn')
const compareForm = document.querySelector('.compare-form')
const compareContent = document.querySelector('.compare-content')
const projects = document.querySelector('.project')
const communities = document.querySelector('.community')
const codes = document.querySelector('.code')

compareContent.classList.add('hidden')

compareBtn.addEventListener('click', (event) => {
  event.preventDefault()

  const formData = new FormData(compareForm)
  const reposNames = formData.getAll('repos_url')
  const repositories = reposNames.map(name => {
    return name.replace('https://github.com/', '').split('/')
  })
  compareRepos(repositories)

  compareBtn.blur()
})