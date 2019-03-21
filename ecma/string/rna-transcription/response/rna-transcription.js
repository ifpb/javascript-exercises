function toRna(dna) {
  let complement = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
  };

  let valid = nucleotide => Object.keys(complement).includes(nucleotide);

  let complementing = nucleotide => complement[nucleotide];

  let replacing = nucleotide => {
    if (valid(nucleotide)) return complementing(nucleotide);
    else throw new Error('Invalid input');
  };

  return dna
    .split('')
    .map(replacing)
    .join('');
}

export { toRna };
