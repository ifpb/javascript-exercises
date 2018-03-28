import { calendar } from './calendar.mjs'

// Calendar

// making month starting on Sunday and ending on the 31st
console.log(calendar(0, 31))
console.log(
`DOM SEG TER QUA QUI SEX SAB
 01  02  03  04  05  06  07
 08  09  10  11  12  13  14
 15  16  17  18  19  20  21
 22  23  24  25  26  27  28
 29  30  31`
)

// making month starting on Monday and ending on the 31st
console.log(calendar(1, 31))
console.log(
`DOM SEG TER QUA QUI SEX SAB
     01  02  03  04  05  06
 07  08  09  10  11  12  13
 14  15  16  17  18  19  20
 21  22  23  24  25  26  27
 28  29  30  31`
)

// making month starting on Tuesday and ending on the 30st
console.log(calendar(2, 30))
console.log(
`DOM SEG TER QUA QUI SEX SAB
         01  02  03  04  05
 06  07  08  09  10  11  12
 13  14  15  16  17  18  19
 20  21  22  23  24  25  26
 27  28  29  30`
)

// making month starting on Wednesday and ending on the 29st
console.log(calendar(3, 29))
console.log(
`DOM SEG TER QUA QUI SEX SAB
             01  02  03  04
 05  06  07  08  09  10  11
 12  13  14  15  16  17  18
 19  20  21  22  23  24  25
 26  27  28  29`
)

// making month starting on Saturday and ending on the 31st
console.log(calendar(6, 31))
console.log(
`DOM SEG TER QUA QUI SEX SAB
                         01
 02  03  04  05  06  07  08
 09  10  11  12  13  14  15
 16  17  18  19  20  21  22
 23  24  25  26  27  28  29
 30  31`
)
