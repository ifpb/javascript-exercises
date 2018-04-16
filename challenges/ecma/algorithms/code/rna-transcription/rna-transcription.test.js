import { DnaTranscriber } from './rna-transcription.js'

let dnaTranscriber = new DnaTranscriber()

// G -> C
// C -> G
// T -> A
// A -> U

describe('toRna()', function() {

  test('transcribes cytosine to guanine', function() {
    expect(dnaTranscriber.toRna('C')).toEqual('G')
  })

  test.skip('transcribes guanine to cytosine', function() {
    expect(dnaTranscriber.toRna('G')).toEqual('C')
  })

  test.skip('transcribes adenine to uracil', function() {
    expect(dnaTranscriber.toRna('A')).toEqual('U')
  })

  test.skip('transcribes thymine to adenine', function() {
    expect(dnaTranscriber.toRna('T')).toEqual('A')
  })

  test.skip('transcribes all dna nucleotides to their rna complements', function() {
    expect(dnaTranscriber.toRna('ACGTGGTCTTAA'))
        .toEqual('UGCACCAGAAUU')
  })

})
