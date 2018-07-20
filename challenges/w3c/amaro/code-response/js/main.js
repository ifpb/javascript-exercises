const fallbackImage = 'http://dummyimage.com/470x594/fff/000?text=imagem+indisponível'
const catalogContainer = document.querySelector('.catalog')
const total = document.querySelector('.total')
const off = document.querySelector('#off')
const filters = [off]
let catalog = []

fetch('data/products.json')
  .then(res => res.json())
  .then(json => {
    catalog = json
    loadCatalog()
  })

filters.map(f => f.addEventListener('change', () => loadCatalog()))

function loadFallbackImage() {
  const imgs = Array.from(document.querySelectorAll('img'))
  imgs.forEach(img => {
    img.onerror = (e) => {
      e.target.src = fallbackImage
    }
  })
}

function getProduct(product) {
  return `<li class="product-item">
    <div class="product-box-image">
      ${product.on_sale ? getImageStamp(product.discount_percentage) : ''}
      <img src="${product.image ? product.image : 'http://dummyimage.com/470x594/fff/000?text=imagem+indisponível'}" class="product-image">
    </div>
    <p class="product-name">${product.name}</p>
    <div class="product-price">
      <p class="product-cost">
        <span class="actual-price">${product.actual_price}</span>
        <span class="installments">${product.installments}</span>
      </p>
      ${product.on_sale ? getSale(product) : ''}
    </div>
    <ul class="product-sizes">
      ${product.sizes.filter(s => s.available).map(getSize).join('')}
    </ul>
  </li>`
}

function getSale(product) {
  return `<p class="product-sale">
    <del class="regular-price">${product.regular_price}</del>
    <span class="stamp">(${product.discount_percentage} OFF)</span>
  </p>`
}

function getImageStamp(discount_percentage) {
  return `<span class="stamp">${discount_percentage} OFF</span>`
}

function getSize(size) {
  return `<li><a href="#" class="size ${size.available ? 'available' : ''}">${size.size}</a></li>`
}

function filterProducts() {
  if (off.checked)
    return catalog.products.filter(p => p.on_sale)
  else 
    return catalog.products
}

function loadCatalog() {
  const products = filterProducts()
  total.innerHTML = `${products.length} itens`
  catalogContainer.innerHTML = products.map(getProduct).join('')
  loadFallbackImage()
}
