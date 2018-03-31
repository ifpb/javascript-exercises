import { firstTeam, showStading } from './brazilian-championship.js'

const standings = [
  {
    team: 'Palmeiras',
    mp: 38,
    w: 24,
    d: 8,
    l: 6,
    gf: 62,
    ga: 32,
    gd: 30,
    pts: 80
  },
  {
    team: 'Santos',
    mp: 38,
    w: 22,
    d: 5,
    l: 11,
    gf: 59,
    ga: 35,
    gd: 24,
    pts: 71
  },
  {
    team: 'Flamengo',
    mp: 38,
    w: 20,
    d: 11,
    l: 7,
    gf: 52,
    ga: 35,
    gd: 17,
    pts: 71
  },
  {
    team: 'Atlético Mineiro',
    mp: 38,
    w: 17,
    d: 11,
    l: 10,
    gf: 61,
    ga: 53,
    gd: 8,
    pts: 62
  },
  {
    team: 'Botafogo',
    mp: 38,
    w: 17,
    d: 8,
    l: 13,
    gf: 43,
    ga: 39,
    gd: 4,
    pts: 59
  },
  {
    team: 'Atlético-PR',
    mp: 38,
    w: 17,
    d: 6,
    l: 15,
    gf: 38,
    ga: 32,
    gd: 6,
    pts: 57
  },
  {
    team: 'Corinthians',
    mp: 38,
    w: 15,
    d: 10,
    l: 13,
    gf: 48,
    ga: 42,
    gd: 6,
    pts: 55
  },
  {
    team: 'Ponte Preta',
    mp: 38,
    w: 15,
    d: 8,
    l: 15,
    gf: 48,
    ga: 52,
    gd: -4,
    pts: 53
  },
  {
    team: 'Grêmio',
    mp: 38,
    w: 14,
    d: 11,
    l: 13,
    gf: 41,
    ga: 44,
    gd: -3,
    pts: 53
  },
  {
    team: 'São Paulo',
    mp: 38,
    w: 14,
    d: 10,
    l: 14,
    gf: 44,
    ga: 36,
    gd: 8,
    pts: 52
  },
  {
    team: 'Chapecoense',
    mp: 38,
    w: 13,
    d: 13,
    l: 12,
    gf: 49,
    ga: 56,
    gd: -7,
    pts: 52
  },
  {
    team: 'Cruzeiro',
    mp: 38,
    w: 14,
    d: 9,
    l: 15,
    gf: 48,
    ga: 49,
    gd: -1,
    pts: 51
  },
  {
    team: 'Fluminense',
    mp: 38,
    w: 13,
    d: 11,
    l: 14,
    gf: 45,
    ga: 45,
    gd: 0,
    pts: 50
  },
  {
    team: 'Sport Recife',
    mp: 38,
    w: 13,
    d: 8,
    l: 17,
    gf: 49,
    ga: 55,
    gd: -6,
    pts: 47
  },
  {
    team: 'Coritiba',
    mp: 38,
    w: 11,
    d: 13,
    l: 14,
    gf: 41,
    ga: 42,
    gd: -1,
    pts: 46
  },
  {
    team: 'Vitória',
    mp: 38,
    w: 12,
    d: 9,
    l: 17,
    gf: 51,
    ga: 53,
    gd: -2,
    pts: 45
  },
  {
    team: 'Internacional',
    mp: 38,
    w: 11,
    d: 10,
    l: 17,
    gf: 35,
    ga: 41,
    gd: -6,
    pts: 43
  },
  {
    team: 'Figueirense',
    mp: 38,
    w: 8,
    d: 13,
    l: 17,
    gf: 30,
    ga: 50,
    gd: -20,
    pts: 37
  },
  {
    team: 'Santa Cruz',
    mp: 38,
    w: 8,
    d: 7,
    l: 23,
    gf: 45,
    ga: 69,
    gd: -24,
    pts: 31
  },
  {
    team: 'América-MG',
    mp: 38,
    w: 7,
    d: 7,
    l: 24,
    gf: 23,
    ga: 58,
    gd: -35,
    pts: 28
  }
]

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
