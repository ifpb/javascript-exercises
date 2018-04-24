### [Brazilian Championship A Series 2016](code.zip)

**Description**

Team | MP | W | D | L | GF | GA | GD | PTS
---- | -- | - | - | - | -- | -- | -- | ---
Palmeiras | 38 | 24 | 8 | 6 | 62 | 32 | 30 | 80
Santos | 38 | 22 | 5 | 11 | 59 | 35 | 24 | 71
Flamengo | 38 | 20 | 11 | 7 | 52 | 35 | 17 | 71
Atlético Mineiro | 38 | 17 | 11 | 10 | 61 | 53 | 8 | 62
Botafogo | 38 | 17 | 8 | 13 | 43 | 39 | 4 | 59
Atlético-PR | 38 | 17 | 6 | 15 | 38 | 32 | 6 | 57
Corinthians | 38 | 15 | 10 | 13 | 48 | 42 | 6 | 55
Ponte Preta | 38 | 15 | 8 | 15 | 48 | 52 | -4 | 53
Grêmio | 38 | 14 | 11 | 13 | 41 | 44 | -3 | 53
São Paulo | 38 | 14 | 10 | 14 | 44 | 36 | 8 | 52
Chapecoense | 38 | 13 | 13 | 12 | 49 | 56 | -7 | 52
Cruzeiro | 38 | 14 | 9 | 15 | 48 | 49 | -1 | 51
Fluminense | 38 | 13 | 11 | 14 | 45 | 45 | 0 | 50
Sport Recife | 38 | 13 | 8 | 17 | 49 | 55 | -6 | 47
Coritiba | 38 | 11 | 13 | 14 | 41 | 42 | -1 | 46
Vitória | 38 | 12 | 9 | 17 | 51 | 53 | -2 | 45
Internacional | 38 | 11 | 10 | 17 | 35 | 41 | -6 | 43
Figueirense | 38 | 8 | 13 | 17 | 30 | 50 | -20 | 37
Santa Cruz | 38 | 8 | 7 | 23 | 45 | 69 | -24 | 31
América-MG | 38 | 7 | 7 | 24 | 23 | 58 | -35 | 28

Legend: (MP) Matches played, (W) Wins, (D) Draws, (L) Losses, (GF) Goals for, (GA) Goals against, (GD) Goals difference, (PTS) Team points, (RC) Red Cards, (YC) Yellow Cards

Fonte: [League table](https://en.wikipedia.org/wiki/2016_Campeonato_Brasileiro_S%C3%A9rie_A)

Teams are ranked by PTS, W, GD, and GF. If points are equal between two or more clubs, the rules are W, GD, GF, head-to-head record, RC, YC.

**Code**

`{{ page.path | replace:'README.md','' }}code/brazilian-championship.mjs`:
```js
{% include_relative code/brazilian-championship.js %}
```

`{{ page.path | replace:'README.md','' }}code/brazilian-championship.print.mjs`:
```js
{% include_relative code/brazilian-championship.print.mjs %}
```

> [Response](response/brazilian-championship.js)
