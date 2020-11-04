function getSum(a, b){
  let [start, end] = a > b ? [b, a] : [a, b]
  let total = 0

  for( let i = start; i <= end; i++ ){
    total += i
  }
  return total
}

console.log(getSum(1, 0) == 1  ) // 1 + 0 = 1
console.log(getSum(1, 2) == 3  ) // 1 + 2 = 3
console.log(getSum(0, 1) == 1  ) // 0 + 1 = 1
console.log(getSum(1, 1) == 1  ) // 1 Since both are same
console.log(getSum(-1, 0) == -1) // -1 + 0 = -1
console.log(getSum(-1, 2) == 2 ) // -1 + 0 + 1 + 2 = 2