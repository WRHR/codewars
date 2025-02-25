// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

let arr1 = [2, 4, 0, 100, 4, 11, 2602, 36];
// Should return: 11 (the only odd number)

let arr2 = [160, 3, 1719, 19, 11, 13, -21];
// Should return: 160 (the only even number)

// function partyOutlier (arr){
//   let evens = arr.filter(num => Math.abs(num)%2 === 0)
//   let odds = arr.filter(num => Math.abs(num)%2 === 1)
//   return evens.length > odds.length ? odds[0] : evens[0]
// }

function partyOutlier(arr) {
  let evens = [];
  let odds = [];
  arr.forEach((num) =>
    Math.abs(num) % 2 === 0 ? evens.push(num) : odds.push(num)
  );
  return evens.length > odds.length ? odds[0] : evens[0];
}

console.log(partyOutlier(arr1));
console.log(partyOutlier(arr2));
