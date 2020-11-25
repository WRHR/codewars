decodeMorse = function (morseCode) {
  let words = morseCode.trim().split("  ");
  return words
    .map((word) =>
      word
        .split(" ")
        .map((code) => morseDecoder[code])
        .join("")
    )
    .join(" ");
};

const morseDecoder = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "-.-.--": "!",
  ".-.-.-": ".",
  "--..--": ",",
  "...---...": "SOS",
};

console.log(decodeMorse("-.-. -.-. -.-."));
