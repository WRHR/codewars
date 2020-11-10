var uniqueInOrder=function(iterable){
  let uniques = []
  
  for(let i = 0; i< iterable.length; i++){
    if(iterable[i] != uniques[i-1]){
      uniques.push(iterable[i])
    }
  }

  return uniques
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')) //== ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'))         //== ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3]))       //== [1,2,3]