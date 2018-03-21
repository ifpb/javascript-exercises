import { toRna } from './rna-transcription.js'

describe('RNA', function () {
  test('transcribing cytosine to guanine', function () {
    expect(toRna('C')).toEqual('G')
  })

  test.skip('transcribing guanine to cytosine', function () {
    expect(toRna('G')).toEqual('C')
  })

  test.skip('transcribing adenine to uracil', function () {
    expect(toRna('A')).toEqual('U')
  })

  test.skip('transcribing thymine to adenine', function () {
    expect(toRna('T')).toEqual('A')
  })

  test.skip('transcribing all dna nucleotides to their rna complements', function () {
    expect(toRna('ACGTGGTCTTAA'))
      .toEqual('UGCACCAGAAUU')
  })
})
