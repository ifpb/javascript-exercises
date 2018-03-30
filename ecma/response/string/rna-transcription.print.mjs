import { toRna } from './rna-transcription.mjs'

// RNA

// transcribing cytosine to guanine
console.log(toRna('C'))
console.log('G')

// transcribing guanine to cytosine
console.log(toRna('G'))
console.log('C')

// transcribing adenine to uracil
console.log(toRna('A'))
console.log('U')

// transcribing thymine to adenine
console.log(toRna('T'))
console.log('A')

// transcribing all dna nucleotides to their rna complements
console.log(toRna('ACGTGGTCTTAA'))
console.log('UGCACCAGAAUU')
