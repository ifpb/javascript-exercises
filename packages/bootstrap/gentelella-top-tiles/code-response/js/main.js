const tileCount = document.querySelector('.tile_count')

const topTiles = [
  {
    count_top: '<i class="fa fa-user"></i> Total Users',
    count: 2500,
    count_bottom: '4% From last Week'
  },
  {
    count_top: '<i class="fa fa-clock-o"></i> Average Time',
    count: 123.50,
    count_bottom: '<i class="green"><i class="fa fa-sort-asc"></i>3% </i> From last Week'
  },
  {
    count_top: '<i class="fa fa-user"></i> Total Males',
    count: 2500,
    count_color: ' green',
    count_bottom: '<i class="green"><i class="fa fa-sort-asc"></i>34% </i>From last Week'
  },
  {
    count_top: '<i class="fa fa-user"></i> Total Females',
    count: 4567,
    count_bottom: '<i class="red"><i class="fa fa-sort-desc"></i>12% </i>From last Week'
  },
  {
    count_top: '<i class="fa fa-user"></i> Total Collections',
    count: 2315,
    count_bottom: '<i class="green"><i class="fa fa-sort-asc"></i>34% </i>From last Week'
  },
  {
    count_top: '<i class="fa fa-user"></i> Total Connections',
    count: 7325,
    count_bottom: '<i class="green"><i class="fa fa-sort-asc"></i>34% </i>From last Week'
  }
]

let tileCountContent = ''
for (let topTile of topTiles) {
  tileCountContent += `<div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
          <span class="count_top">${topTile.count_top}</span>
          <div class="count${topTile.count_color || ''}">${topTile.count}</div>
          <span class="count_bottom">${topTile.count_bottom}</span>
        </div>`
}
tileCount.innerHTML = tileCountContent