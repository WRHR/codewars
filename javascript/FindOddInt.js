function findOdd(A) {
  let counts = {};
  A.map((num) => {
    counts[num] ? counts[num]++ : (counts[num] = 1);
  });

  for (const [key, val] of Object.entries(counts)) {
    if (counts[key] % 2 !== 0) {
      return parseInt(key);
    }
  }
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
