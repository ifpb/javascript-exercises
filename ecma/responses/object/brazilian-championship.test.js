const chmapion = require('./brazilian-championship')

cont standings = // TODO

describe('Brazilian Championship', () => {

  test('Finding first team', () => {
    expect(firstTeam(standings)).toBe('Palmeiras')
  })

  test('Displaying stading', () => {
    expect(showStading(standings)).toBe(
      `Palmeiras        | 38 | 24 |  8 |  6 | 62 | 32 |  30 | 80
      Santos           | 38 | 22 |  5 | 11 | 59 | 35 |  24 | 71
      Flamengo         | 38 | 20 | 11 |  7 | 52 | 35 |  17 | 71
      Atlético Mineiro | 38 | 17 | 11 | 10 | 61 | 53 |   8 | 62
      Botafogo         | 38 | 17 |  8 | 13 | 43 | 39 |   4 | 59
      Atlético-PR      | 38 | 17 |  6 | 15 | 38 | 32 |   6 | 57
      Corinthians      | 38 | 15 | 10 | 13 | 48 | 42 |   6 | 55
      Ponte Preta      | 38 | 15 |  8 | 15 | 48 | 52 |  -4 | 53
      Grêmio           | 38 | 14 | 11 | 13 | 41 | 44 |  -3 | 53
      São Paulo        | 38 | 14 | 10 | 14 | 44 | 36 |   8 | 52
      Chapecoense      | 38 | 13 | 13 | 12 | 49 | 56 |  -7 | 52
      Cruzeiro         | 38 | 14 |  9 | 15 | 48 | 49 |  -1 | 51
      Fluminense       | 38 | 13 | 11 | 14 | 45 | 45 |   0 | 50
      Sport Recife     | 38 | 13 |  8 | 17 | 49 | 55 |  -6 | 47
      Coritiba         | 38 | 11 | 13 | 14 | 41 | 42 |  -1 | 46
      Vitória          | 38 | 12 |  9 | 17 | 51 | 53 |  -2 | 45
      Internacional    | 38 | 11 | 10 | 17 | 35 | 41 |  -6 | 43
      Figueirense      | 38 |  8 | 13 | 17 | 30 | 50 | -20 | 37
      Santa Cruz       | 38 |  8 |  7 | 23 | 45 | 69 | -24 | 31
      América-MG       | 38 |  7 |  7 | 24 | 23 | 58 | -35 | 28`
    )
  })
  
})
