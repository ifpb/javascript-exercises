import { citation, compactCitation } from './citation.js';

describe('Citation Name', () => {
  test('formatting case citation', () => {
    let person = 'Luiz Carlos Rodrigues Chaves';
    expect(citation(person)).toBe('CHAVES; Luiz Carlos Rodrigues');
  });

  test('formatting short form case citation', () => {
    let person = 'Luiz Carlos Rodrigues Chaves';
    expect(compactCitation(person)).toBe('CHAVES; L. C. R.');
  });
});
