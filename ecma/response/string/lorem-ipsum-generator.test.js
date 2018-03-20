const ipsumGenerator = require('./lorem-ipsum-generator')

describe('Lorem Ipsum', () => {
  test('generating the first 3 words', () => {
    expect(ipsumGenerator.word(3))
      .toBe('lorem ipsum dolor')
  })

  test.skip('generating the first 8 words', () => {
    expect(ipsumGenerator.word(8))
      .toBe('lorem ipsum dolor sit amet, consectetur adipisicing elit.')
  })

  test('generating the first 3 paragraphs', () => {
    let expected = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas, ex non blandit porta, ante lacus sollicitudin neque, eget placerat velit eros in sem. Aenean egestas, est nec faucibus varius, mi augue commodo nisi, quis aliquam turpis neque sit amet tellus. Quisque sed interdum nisi. Praesent pellentesque ipsum neque, nec laoreet augue vulputate vitae. Cras ac leo massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed diam neque, luctus a fermentum id, iaculis eget elit. Quisque ut pellentesque orci, sed consectetur sem. Suspendisse tristique, ligula ut eleifend laoreet, tortor sem consectetur est, in euismod turpis nisi in ex. Nulla auctor lacus sed nisl suscipit, eget accumsan dolor condimentum. Donec nibh ex, bibendum non finibus eu, auctor at mauris. Nullam auctor nibh non turpis dapibus posuere. Quisque at felis luctus, congue diam vitae, feugiat tellus. Donec ac mi nec neque euismod euismod ac nec metus. Suspendisse potenti. Nulla porta ex ante, sed elementum ipsum dapibus in.
Cras volutpat consectetur vulputate. Fusce nec arcu eget arcu vestibulum malesuada at et risus. Donec sodales molestie ipsum eu semper. Nam felis arcu, finibus vitae congue vel, facilisis sit amet tellus. Aenean varius varius quam nec tempor. Donec accumsan nisi justo, eget convallis odio scelerisque at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque non ultrices lacus. Phasellus condimentum lectus ac justo sollicitudin, eu eleifend tellus vulputate. Cras lorem leo, consequat at enim id, pharetra rutrum sapien. Ut nulla velit, fermentum quis volutpat nec, facilisis ut eros.
Aliquam tincidunt nibh ac tortor ullamcorper, at aliquet arcu sodales. Mauris vel maximus arcu. Nam feugiat est id sapien convallis scelerisque. Suspendisse molestie nunc turpis. Duis ut turpis ut nunc aliquet dignissim id eu nunc. Suspendisse lorem tortor, condimentum nec ante eget, commodo pretium felis. Phasellus tincidunt ex vel nibh convallis efficitur. Sed et enim in est egestas elementum.
`
    expect(ipsumGenerator.paragraph(3)).toBe(expected)
  })

  test.skip('generating the first 5 paragraphs', () => {
    let expected = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel erat nec arcu sodales aliquam. Proin eu ante in nisl commodo venenatis. Nam et consectetur felis. Cras tempus odio interdum erat placerat, nec interdum nibh commodo. Sed porttitor rutrum enim, eget convallis nunc egestas vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis tellus dolor, lobortis eu orci a, vulputate hendrerit orci. Duis at odio nulla.
Aliquam in feugiat magna. Nulla convallis tempor auctor. Phasellus eget elementum velit. In ut auctor augue, vitae interdum felis. Morbi aliquam metus eget rhoncus tincidunt. Morbi mattis sapien massa, ut elementum dui consequat malesuada. Etiam eget semper sem. Aenean non purus ac neque bibendum luctus. Vivamus pharetra metus in imperdiet convallis.
Praesent at leo non mauris ornare aliquet in vel justo. Donec sodales sit amet tellus eu pellentesque. Suspendisse quis neque varius, rutrum erat porta, feugiat urna. Vestibulum lobortis volutpat lacus, in dictum ex viverra a. Sed sollicitudin eu magna sit amet consequat. Ut lobortis cursus massa at tincidunt. Ut venenatis venenatis lectus ut finibus. Suspendisse vestibulum elit nisi, a fermentum ex rhoncus in. Quisque tincidunt commodo metus, a lacinia lacus blandit malesuada. Vivamus vitae efficitur lorem, eget consequat magna. Etiam non dignissim sem.
Fusce at consectetur mauris. Suspendisse potenti. Phasellus vitae ullamcorper magna. Suspendisse faucibus lacinia lobortis. Pellentesque euismod odio non libero tempus, id venenatis metus viverra. Quisque quis efficitur massa. Nam tellus est, vestibulum at molestie at, tincidunt ut erat. Sed ut finibus purus. Mauris sed enim vitae velit vestibulum rhoncus. Nullam et tincidunt augue. Nunc vitae enim felis.
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla sit amet leo maximus, tempor neque nec, tristique nunc. Etiam pellentesque fringilla tellus nec imperdiet. Integer quis tempus tellus, a egestas felis. Quisque tempus ipsum in sapien viverra, vitae tempor nunc congue. Mauris et nulla sit amet ipsum vulputate bibendum eget sit amet nisi. Phasellus neque tortor, posuere sit amet quam nec, pellentesque ornare tortor. Aliquam consequat varius sollicitudin.
`
    expect(ipsumGenerator.paragraph(5)).toBe(expected)
  })
})
