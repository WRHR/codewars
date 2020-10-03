// function arrayDiff(a, b) {
//   return a.filter(val => (!b.includes(val)))
// }

function arrayDiff(a, b) {
  let diffArr = []
  a.forEach(val => {
    if(!b.includes(val)){
      diffArr.push(val)
    }
  })
  return diffArr
}

console.log(arrayDiff([-17,16,15,0,19,15,-17,15,-8,-17,-19],[-17]))