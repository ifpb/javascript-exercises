import { hamming } from './hamming.js';

describe('Hamming distance', () => {
  test('comparing the GGACG to GGTCG', () => {
    let dna1 = 'GGACG';
    let dna2 = 'GGTCG';
    expect(hamming(dna1, dna2)).toBe(1);
  });

  test('comparing the GGACGGATTCTG to AGGACGGATTCT', () => {
    let dna1 = 'GGACGGATTCTG';
    let dna2 = 'AGGACGGATTCT';
    expect(hamming(dna1, dna2)).toBe(9);
  });
});
