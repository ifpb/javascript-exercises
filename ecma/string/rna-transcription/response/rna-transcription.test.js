import { toRna } from './rna-transcription.js';

describe('RNA', function() {
  test('transcribing cytosine to guanine', () => {
    expect(toRna('C')).toEqual('G');
  });

  test('transcribing guanine to cytosine', () => {
    expect(toRna('G')).toEqual('C');
  });

  test('transcribing adenine to uracil', () => {
    expect(toRna('A')).toEqual('U');
  });

  test('transcribing thymine to adenine', () => {
    expect(toRna('T')).toEqual('A');
  });

  test('transcribing all dna nucleotides to their rna complements', () => {
    expect(toRna('ACGTGGTCTTAA')).toEqual('UGCACCAGAAUU');
  });
});
