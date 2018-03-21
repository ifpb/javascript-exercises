let DnaTranscriber = require('./rna-transcription')
let dnaTranscriber = new DnaTranscriber()

// G -> C
// C -> G
// T -> A
// A -> U

describe('toRna()', function() {

  test('transcribes cytosine to guanine', function() {
    expect(dnaTranscriber.toRna('C')).toEqual('G')
  })

  test('transcribes guanine to cytosine', function() {
    expect(dnaTranscriber.toRna('G')).toEqual('C')
  })

  test('transcribes adenine to uracil', function() {
    expect(dnaTranscriber.toRna('A')).toEqual('U')
  })

  test('transcribes thymine to adenine', function() {
    expect(dnaTranscriber.toRna('T')).toEqual('A')
  })

  test('transcribes all dna nucleotides to their rna complements', function() {
    expect(dnaTranscriber.toRna('ACGTGGTCTTAA'))
        .toEqual('UGCACCAGAAUU')
  })

})
