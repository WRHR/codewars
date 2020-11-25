// function reverse(str){
//   let string = (typeof str !== 'string') ? str.toString() : str
//   let reversed = ''
//   for(let i = string.length - 1; i >= 0; i--){
//     console.log(string[i])
//     reversed += string[i]
//   }
//   return reversed
//}

// function reverse(str){
//   let string = (typeof str !== 'string') ? str.toString() : str
//   let reversed = []
//   for(let i = string.length - 1; i >= 0; i--){
//     reversed.push(string[i])
//   }
//   return reversed.join('')
// }

function reverse(str) {
  let string = typeof str !== "string" ? str.toString() : str;
  return string.split("").reverse().join("");
}

String.prototype.reverse = function () {
  return reverse(this);
};

console.log(reverse("abc"));
console.log("abc".reverse());
