function reverse(str){
  let string = (typeof str !== 'string') ? str.toString() : str
  let reversed = ''
  for(let i = string.length - 1; i >= 0; i--){
    console.log(string[i])
    reversed += string[i]
  }
  return reversed
}

console.log(reverse('abc'))