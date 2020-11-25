// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

function bitCounter(n) {
  return eval(n.toString(2).split("").join("+"));
}

console.log(bitCounter(0));
console.log(bitCounter(4));
console.log(bitCounter(7));
console.log(bitCounter(9));
console.log(bitCounter(10));
