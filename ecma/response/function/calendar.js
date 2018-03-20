
/** calendar
 * beginWeek: 0..6 - 0(DOM), 1(SEG), 2(TER), 3(QUA), 4(QUI), 5(SEX), 6(SAB)
 * endDay: 28..31
 */
function calendar(beginWeek, endDay) {
  let result = 'DOM SEG TER QUA QUI SEX SAB\n'

  for(let times=0; times < beginWeek; times++){
    result += '    '
  }

  for(let day = 1; day <= endDay; day++){
    result += (day < 10) ? ` 0${day}` : ` ${day}`
    if(day == endDay)
      return result
    result += (day+beginWeek) % 7 == 0 ? '\n' : ' '
  }

}

export { calendar }
