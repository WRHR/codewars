function iqTest(nums) {
  let counts = {
    evens: [],
    odds: [],
  };

  let inputs = nums.split(" ").map((num) => {
    parseInt(num);
    num % 2 ? counts.evens.push(num) : counts.odds.push(num);
    return num;
  });

  return counts.evens.length > counts.odds.length
    ? inputs.indexOf(counts.odds[0]) + 1
    : inputs.indexOf(counts.evens[0]) + 1;
}

console.log(iqTest("1 2 1 1")); // 2
console.log(iqTest("2 4 7 8 10")); // 3
