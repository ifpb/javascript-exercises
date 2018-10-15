function longFormat(date) {
  const months = 'janeiro fevereiro março abril maio junho julho agosto setembro outubro novembro dezembro'.split(' ')
  date = date.split('/')
  date[1] = months[date[1] - 1]
  return date.join(' de ')
}

export { longFormat }