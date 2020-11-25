// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words) {
  let unorderedWords = words.split(" ");
  return unorderedWords
    .sort((a, b) => {
      return findWordOrder(a) - findWordOrder(b);
    })
    .join(" ");
}

function findWordOrder(word) {
  let letters = word.split("");
  let position = parseInt(letters.filter((letter) => parseInt(letter) > 0)[0]);
  console.log(position);
  return position;
}

console.log(order("is2 Thi1s T4est 3a"));
