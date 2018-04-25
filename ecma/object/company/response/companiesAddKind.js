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

// for (const index in companies) {
//   companies[index].kind = 'Internet company'
// }
// console.log(companies)

const companiesWithKind = companies.map(company => {
  company.kind = 'Internet company'
  return company
})
console.log(companies)
console.log(companiesWithKind)
