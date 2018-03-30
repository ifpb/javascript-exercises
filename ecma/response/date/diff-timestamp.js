
function diffMonth(start, end) {
  start = new Date(start)
  end = new Date(end)
  
  let startYear = start.getFullYear()
  let startMonth = start.getMonth()
  let endYear = end.getFullYear()
  let endMonth = end.getMonth()

  return (endYear - startYear) * 12 + (endMonth - startMonth)
}

export { diffMonth }
