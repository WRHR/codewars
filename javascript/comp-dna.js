function DNAStrand(dna){
    let compDNA = {
        'A':'T',
        'C':'G',
        'T':'A',
        'G':'C'
    }
    return dna.split('').map(pair => compDNA[pair]).join('')
  }