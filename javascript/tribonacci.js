function tribonacci(signature, n) {
  let sequence = [...signature];
  if (n < 3) {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(signature[i]);
    }
    return arr;
  }
  let i = 0;
  while (sequence.length < n) {
    let next = sequence[i] + sequence[i + 1] + sequence[i + 2];
    sequence.push(next);
    i++;
  }
  return sequence;
}

console.log(tribonacci([1, 1, 1], 10));
