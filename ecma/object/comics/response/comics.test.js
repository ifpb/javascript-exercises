import { namesByComics, topWeightNames, weight } from './comics.js'

const characters = [
  {
    comics: 'Marvel',
    height: 1.78,
    link: [
      'http://marvel.com/characters/54/spider-man', 
      'http://marvel.com/universe/Spider-Man_(Peter_Parker)'
    ],
    name: 'Spider-Man',
    realName: 'Peter Benjamin Parker',
    weight: 76
  },
  {
    comics: 'Marvel',
    height: 2.44,
    link: [
      'http://marvel.com/characters/25/hulk',
      'http://marvel.com/universe/Hulk_(Bruce_Banner)'
    ],
    name: 'Hulk',
    realName: 'Robert Bruce Banner',
    weight: 635
  },
  {
    comics: 'DC',
    height: 1.91,
    link: [
      'http://www.dccomics.com/characters/superman',
      'http://dc.wikia.com/wiki/Superman_(Clark_Kent)'
    ],
    name: 'Superman',
    realName: 'Clark Joseph Kent',
    weight: 107
  },  
  {
    comics: 'DC',
    height: 1.88,
    link: [
      'http://www.dccomics.com/characters/batman',
      'http://dc.wikia.com/wiki/Bruce_Wayne_(New_Earth)'
    ],
    name: 'batman',
    realName: 'Bruce Wayne',
    weight: 95
  }
  // TODO bad guys, villain
]

describe('Comics Tool', () => {

  test('listing names by DC comics', () => {
    expect(namesByComics(characters, 'DC')).toEqual([
      'batman',
      'Superman'
    ])
  })

  test('sorting top weight by Marvel comics', () => {
    expect(topWeightNames(characters, 'Marvel')).toEqual([
      'Hulk',
      'Spider-Man'
    ])
  })

  test('sorting top weight', () => {
    expect(topWeightNames(characters)).toEqual([
      'Hulk',
      "Superman",
      "batman",
      'Spider-Man'
    ])
  })

  test('weighing by DC comics', () => {
    expect(weight(characters, 'DC')).toBe(101)
  })

})
