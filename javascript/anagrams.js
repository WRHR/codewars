function anagrams(word, words) {
  return words.filter(w => {
      if(w.length === word.length 
        && w.split('').sort().join('').toLowerCase().includes(word.split('').sort().join('').toLowerCase())){
          return w
      }
  })
}

console.log(anagrams('aabb', ['aabb', 'abcd', 'bbaa', 'dada']))