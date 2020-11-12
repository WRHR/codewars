// function tickets(line){
//   let till = {
//     100: 0,
//     50: 0,
//     25: 0,
//   }

//   let status = true

//   for(let i = 0; i < line.length; i++){
//     till[line[i]] += 1
//     // console.log(till, "payment")
//     if(line[i]== 50){
//       if(till[25] > 0){
//         till[25] -=1
//       }else {
//         status = false
//       }
//     }

//     if(line[i] == 100){
//       if(till[50] > 0 && till[25] > 0) {
//           till[50] -=1 
//           till [25] -=1 
//       }else if(till[25] >= 3){
//         till[25] -= 3
//       } else {
//           status = false
//       }
//     }
    
//   }
//   return status ? 'YES' : 'NO'
// }
function tickets(line){
  let till = {
    100: 0,
    50: 0,
    25: 0,
  }
  let status = true
  
  for(let i = 0; i < line.length; i++){
    till[line[i]]++
    if(line[i]== 50) till[25] -= 1 
    if(line[i] == 100) {
      till[25] -= 1 
      till[50] > 0 ? till[50] -=1 : till[25] -= 2
    }
    if(till[50]< 0 || till[25]< 0) status = false
  }
  return status ? 'YES' : 'NO'
}


console.log(tickets([25,25,50,100,25,50,25,100,25,25,50,100,25,25,50,100 ])) // yes
