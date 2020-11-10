// var uniqueInOrder=function(iterable){
//   let uniques = []
//   let last
  
//   for(let i = 0; i< iterable.length; i++){
//     if(iterable[i] !== last){
//       uniques.push(last = iterable[i])
//     }
//   }

//   return uniques
// }

const uniqueInOrder = (iterable) => {
  return [...iterable].filter((ele, i) => iterable[i-1] !== ele)
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')) //== ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'))         //== ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3]))       //== [1,2,3]