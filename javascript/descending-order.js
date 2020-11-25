// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

function descendingOrder(num) {
  let digits = num.toString().map((num) => parseInt(num));
  return parseInt(digits.sort((a, b) => a - b).join(""));
}
