function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let right =
      arr.slice(i + 1).length > 0
        ? arr.slice(i + 1).reduce((acc, num) => acc + num)
        : 0;
    let left =
      arr.slice(0, i).length > 0
        ? arr.slice(0, i).reduce((acc, num) => acc + num)
        : 0;
    if (left === right) return i;
  }
  return -1;
}
