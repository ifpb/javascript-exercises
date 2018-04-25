const companies = [
  {
    name: 'Amazon',
    founded: 1994,
    industry: 'E-Commerce, Cloud'
  },
  {
    name: 'Alphabet Inc.',
    founded: 2015,
    industry: 'Search, Cloud, Advertising'
  },
  {
    name: 'Facebook',
    founded: 2004,
    industry: 'Social'
  }
]


const companiesFounded = companies
  .map(company => `${company.name.padEnd(15, '.')}${company.founded}`)
  .join('\n')

console.log(companiesFounded)