const numerals = {
  'M': 1000,
  'CM': 900,
  'D': 500,
  'CD': 400,
  'C': 100,
  'XC': 90,
  'L': 50,
  'XL': 40,
  'X': 10,
  'IX': 9,
  'V': 5,
  'IV': 4,
  'I': 1,
}

function toRoman(number) {
  let numeral = ''
  let limit = number
  
  for(const key in numerals){
    while(limit >= numerals[key]){
      numeral += key
      limit -= numerals[key]
    }
  }

  return numeral
}

function fromRoman (numeral){
  let arr = numeral.split('')
  return arr.reduce((acc,num)=> {return acc += numerals[num]},0)
}

console.log(toRoman(2000))
console.log(fromRoman('MMCIII'))

// const numerals = {
//   'M': 1000,
//   'CM': 900,
//   'D': 500,
//   'CD': 400,
//   'C': 100,
//   'XC': 90,
//   'L': 50,
//   'XL': 40,
//   'X': 10,
//   'IX': 9,
//   'V': 5,
//   'IV': 4,
//   'I': 1,
// }

// var RomanNumerals  = {
// toRoman:function (number) {
//   let numeral = ''
//   let limit = number
  
//   for(const key in numerals){
//     while(limit >= numerals[key]){
//       numeral += key
//       limit -= numerals[key]
//     }
//   }

//   return numeral
//   },
    
//   fromRoman:function (numeral){
//     let arr = []
//     let i = 0
//     while(i< numeral.length){
//       if(numeral[i] ==='I' && numeral[i+1] === 'V'){
//         arr.push('IV')
//         i +=2
//       }else if(numeral[i] === 'I' && numeral[i+1]==='X'){
//         arr.push('IX')
//         i+=2
//       }else if(numeral[i] === 'X' && numeral[i+1] === 'L'){
//         arr.push('XL')
//         i+=2
//       }else if(numeral[i]=== 'X' && numeral[i+1] === 'C'){
//         arr.push('XC')
//         i+=2
//       }else if(numeral[i] === 'C' && numeral[i+1] === 'D'){
//         arr.push('CD')
//         i+=2
//       }else if(numeral[i] ==='C' && numeral[i+1] === 'M'){
//         arr.push('CM')
//         i+=2
//       }else {
//         arr.push(numeral[i])
//         i++
//       }
//     }
  
//     return arr.reduce((acc,num)=> {return acc += numerals[num]},0)
//   }

// }

// console.log(RomanNumerals.toRoman(1))
// console.log(RomanNumerals.toRoman(1991))
// console.log(RomanNumerals.toRoman(2006))
// console.log(RomanNumerals.toRoman(2020))