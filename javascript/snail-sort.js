array = [[1,2,3],
         [4,5,6],
         [7,8,9]]

function snail(array) {
  let snailed = []
  while(array.length){
    snailed.push(...array.shift())
    for(let i = 0; i < array.length; i++){
      snailed.push(array[i].pop())
    }
    snailed.push(...(array.pop() || []).reverse())
    for(let i = array.length -1; i >=0; i--){
      snailed.push(array[i].shift())
    }
  }
  return snailed
}

console.log(snail(array))