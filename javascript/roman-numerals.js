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

// function toRoman(number) {
//   let numeral = ''
//   let limit = number
  
//   for(const key in numerals){
//     while(limit >= numerals[key]){
//       numeral += key
//       limit -= numerals[key]
//     }
//   }

//   return numeral
// }

// function fromRoman (numeral){
//   let arr = numeral.split('')
//   return arr.reduce((acc,num)=> {return acc += numerals[num]},0)
// }

// //console.log(toRoman(2000))
// console.log(fromRoman('MMCIII'))

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

class RomanNumerals {
  constructor(num){
    this.num = num
  }
  toRoman() {
    let numeral = ''
    let limit = this
    
    for(const key in numerals){
      while(limit >= numerals[key]){
        numeral += key
        limit -= numerals[key]
      }
    }
    
    return numeral
  }

  fromRoman(){
    let arr = this.split('')
    return arr.reduce((acc,num)=> {return acc += numerals[num]},0)
  }
}





console.log(RomanNumerals.toRoman(1))
console.log(RomanNumerals.toRoman(1991))
console.log(RomanNumerals.toRoman(2006))
console.log(RomanNumerals.toRoman(2020))