
function firstTeam(standings){
  return standings.sort(sortTeam)[0].team
}

function showStading(standings){
  return printTeams(standings.sort(sortTeam))
}

function sortTeam(a, b) {
  if (a.pts > b.pts) return -1;
  if (a.pts < b.pts) return 1;
  if (a.w > b.w) return -1;
  if (a.w < b.w) return 1;
  if (a.gd > b.gd) return -1;
  if (a.gd < b.gd) return 1;
  if (a.gf > b.gf) return -1;
  if (a.gf < b.gf) return 1;
  return 0;
}

function printTeams(standings) {
  const maxLength = standings.reduce(
    (max, character) => {
      const teamLength = character.team.length
      max.team = teamLength > max.team ? teamLength : max.team
      const mpLength = character.mp.toString().length
      max.mp = mpLength > max.mp ? mpLength : max.mp
      const wLength = character.w.toString().length
      max.w = wLength > max.w ? wLength : max.w
      const dLength = character.d.toString().length
      max.d = dLength > max.d ? dLength : max.d
      const lLength = character.l.toString().length
      max.l = lLength > max.l ? lLength : max.l
      const gfLength = character.gf.toString().length
      max.gf = gfLength > max.gf ? gfLength : max.gf
      const gaLength = character.ga.toString().length
      max.ga = gaLength > max.ga ? gaLength : max.ga
      const gdLength = character.gd.toString().length
      max.gd = gdLength > max.gd ? gdLength : max.gd
      const ptsLength = character.pts.toString().length
      max.pts = ptsLength > max.pts ? ptsLength : max.pts
      return max
    },
    { team:0, mp:0, w:0, d:0, l:0, gf:0, ga:0, gd:0, pts: 0 }
  )

  return standings
    .map(row => {
      return [
        row.team.padEnd(maxLength.team),
        Number(row.mp).toString().padStart(maxLength.mp),
        Number(row.w).toString().padStart(maxLength.w),
        Number(row.d).toString().padStart(maxLength.d),
        Number(row.l).toString().padStart(maxLength.l),
        Number(row.gf).toString().padStart(maxLength.gf),
        Number(row.ga).toString().padStart(maxLength.ga),
        Number(row.gd).toString().padStart(maxLength.gd),
        Number(row.pts).toString().padStart(maxLength.pts)
      ].join(' | ')
    })
    .join('\n')
}

export { firstTeam, showStading }
