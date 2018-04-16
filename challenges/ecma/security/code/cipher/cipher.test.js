import { Cipher } from './cipher.js'

describe('Cipher', function() {
  let cipher

  beforeEach(function() {
    cipher = new Cipher()
  })

  test('decripting text with rot13', function() {
    let message = 'Dhny é n áeiber cersrevqn qr hz nqzvavfgenqbe qr erqrf? Vcê.'

    let expected = {
      rot1: 'Eioz é o áfjcfs dfstsfwro rs ia orawbwghforcf rs fsrsg? Wdê.',
      rot2: 'Fjpa é p ágkdgt egtutgxsp st jb psbxcxhigpsdg st gtsth? Xeê.',
      rot3: 'Gkqb é q áhlehu fhuvuhytq tu kc qtcydyijhqteh tu hutui? Yfê.',
      rot4: 'Hlrc é r áimfiv givwvizur uv ld rudzezjkirufi uv ivuvj? Zgê.',
      rot5: 'Imsd é s ájngjw hjwxwjavs vw me sveafakljsvgj vw jwvwk? Ahê.',
      rot6: 'Jnte é t ákohkx ikxyxkbwt wx nf twfbgblmktwhk wx kxwxl? Biê.',
      rot7: 'Kouf é u álpily jlyzylcxu xy og uxgchcmnluxil xy lyxym? Cjê.',
      rot8: 'Lpvg é v ámqjmz kmzazmdyv yz ph vyhdidnomvyjm yz mzyzn? Dkê.',
      rot9: 'Mqwh é w ánrkna lnabanezw za qi wziejeopnwzkn za nazao? Elê.',
      rot10: 'Nrxi é x áoslob mobcbofax ab rj xajfkfpqoxalo ab obabp? Fmê.',
      rot11: 'Osyj é y áptmpc npcdcpgby bc sk ybkglgqrpybmp bc pcbcq? Gnê.',
      rot12: 'Ptzk é z áqunqd oqdedqhcz cd tl zclhmhrsqzcnq cd qdcdr? Hoê.',
      rot13: 'Qual é a árvore preferida de um administrador de redes? Ipê.',
      rot14: 'Rvbm é b áswpsf qsfgfsjeb ef vn benjojtusbeps ef sfeft? Jqê.',
      rot15: 'Swcn é c átxqtg rtghgtkfc fg wo cfokpkuvtcfqt fg tgfgu? Krê.',
      rot16: 'Txdo é d áuyruh suhihulgd gh xp dgplqlvwudgru gh uhghv? Lsê.',
      rot17: 'Uyep é e ávzsvi tvijivmhe hi yq ehqmrmwxvehsv hi vihiw? Mtê.',
      rot18: 'Vzfq é f áwatwj uwjkjwnif ij zr firnsnxywfitw ij wjijx? Nuê.',
      rot19: 'Wagr é g áxbuxk vxklkxojg jk as gjsotoyzxgjux jk xkjky? Ovê.',
      rot20: 'Xbhs é h áycvyl wylmlypkh kl bt hktpupzayhkvy kl ylklz? Pwê.',
      rot21: 'Ycit é i ázdwzm xzmnmzqli lm cu iluqvqabzilwz lm zmlma? Qxê.',
      rot22: 'Zdju é j áaexan yanonarmj mn dv jmvrwrbcajmxa mn anmnb? Ryê.',
      rot23: 'Aekv é k ábfybo zbopobsnk no ew knwsxscdbknyb no bonoc? Szê.',
      rot24: 'Bflw é l ácgzcp acpqpctol op fx loxtytdeclozc op cpopd? Taê.',
      rot25: 'Cgmx é m ádhadq bdqrqdupm pq gy mpyuzuefdmpad pq dqpqe? Ubê.'
    }

    expect(cipher.allRots(message)).toEqual(expected)
  })

  test.skip('dcripting text with rot7', function() {
    let message = 'Xbhs é v kpav wvwbshy thpz bzhkv wvy bt huhspzah kl ylklz? Jhpb uh ylkl, é wopzopun!'

    let expected = {
      rot1: 'Ycit é w lqbw xwxctiz uiqa cailw xwz cu ivitqabi lm zmlma? Kiqc vi zmlm, é xpqapqvo!',
      rot2: 'Zdju é x mrcx yxyduja vjrb dbjmx yxa dv jwjurbcj mn anmnb? Ljrd wj anmn, é yqrbqrwp!',
      rot3: 'Aekv é y nsdy zyzevkb wksc eckny zyb ew kxkvscdk no bonoc? Mkse xk bono, é zrscrsxq!',
      rot4: 'Bflw é z otez azafwlc xltd fdloz azc fx lylwtdel op cpopd? Nltf yl cpop, é astdstyr!',
      rot5: 'Cgmx é a pufa babgxmd ymue gempa bad gy mzmxuefm pq dqpqe? Omug zm dqpq, é btuetuzs!',
      rot6: 'Dhny é b qvgb cbchyne znvf hfnqb cbe hz nanyvfgn qr erqrf? Pnvh an erqr, é cuvfuvat!',
      rot7: 'Eioz é c rwhc dcdizof aowg igorc dcf ia obozwgho rs fsrsg? Qowi bo fsrs, é dvwgvwbu!',
      rot8: 'Fjpa é d sxid edejapg bpxh jhpsd edg jb pcpaxhip st gtsth? Rpxj cp gtst, é ewxhwxcv!',
      rot9: 'Gkqb é e tyje fefkbqh cqyi kiqte feh kc qdqbyijq tu hutui? Sqyk dq hutu, é fxyixydw!',
      rot10: 'Hlrc é f uzkf gfglcri drzj ljruf gfi ld rerczjkr uv ivuvj? Trzl er ivuv, é gyzjyzex!',
      rot11: 'Imsd é g valg hghmdsj esak mksvg hgj me sfsdakls vw jwvwk? Usam fs jwvw, é hzakzafy!',
      rot12: 'Jnte é h wbmh ihinetk ftbl nltwh ihk nf tgteblmt wx kxwxl? Vtbn gt kxwx, é iablabgz!',
      rot13: 'Kouf é i xcni jijoful gucm omuxi jil og uhufcmnu xy lyxym? Wuco hu lyxy, é jbcmbcha!',
      rot14: 'Lpvg é j ydoj kjkpgvm hvdn pnvyj kjm ph vivgdnov yz mzyzn? Xvdp iv mzyz, é kcdncdib!',
      rot15: 'Mqwh é k zepk lklqhwn iweo qowzk lkn qi wjwheopw za nazao? Yweq jw naza, é ldeodejc!',
      rot16: 'Nrxi é l afql mlmrixo jxfp rpxal mlo rj xkxifpqx ab obabp? Zxfr kx obab, é mefpefkd!',
      rot17: 'Osyj é m bgrm nmnsjyp kygq sqybm nmp sk ylyjgqry bc pcbcq? Aygs ly pcbc, é nfgqfgle!',
      rot18: 'Ptzk é n chsn onotkzq lzhr trzcn onq tl zmzkhrsz cd qdcdr? Bzht mz qdcd, é oghrghmf!',
      rot19: 'Qual é o dito popular mais usado por um analista de redes? Caiu na rede, é phishing!',
      rot20: 'Rvbm é p ejup qpqvmbs nbjt vtbep qps vn bobmjtub ef sfeft? Dbjv ob sfef, é qijtijoh!',
      rot21: 'Swcn é q fkvq rqrwnct ocku wucfq rqt wo cpcnkuvc fg tgfgu? Eckw pc tgfg, é rjkujkpi!',
      rot22: 'Txdo é r glwr srsxodu pdlv xvdgr sru xp dqdolvwd gh uhghv? Fdlx qd uhgh, é sklvklqj!',
      rot23: 'Uyep é s hmxs tstypev qemw ywehs tsv yq erepmwxe hi vihiw? Gemy re vihi, é tlmwlmrk!',
      rot24: 'Vzfq é t inyt utuzqfw rfnx zxfit utw zr fsfqnxyf ij wjijx? Hfnz sf wjij, é umnxmnsl!',
      rot25: 'Wagr é u jozu vuvargx sgoy aygju vux as gtgroyzg jk xkjky? Igoa tg xkjk, é vnoynotm!'
    }

    expect(cipher.allRots(message)).toEqual(expected)
  })

})
