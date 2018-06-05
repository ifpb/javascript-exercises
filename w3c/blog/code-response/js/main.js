const postsURL = 'https://jsonplaceholder.typicode.com/posts'
const postsContainer = document.querySelector('.posts')

fetch(postsURL)
  .then(res => res.json())
  .then(posts => {
    for (const post of posts.slice(0, 8)) {
      const postView = `<div class="post">
        <h2>${post.title}</h2>
        <p>${post.body}<p>
      </div>`
      postsContainer.insertAdjacentHTML('beforeend', postView)
    }
  })