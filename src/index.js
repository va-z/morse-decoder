const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
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
};

function decode(expr) {
  const DECODER = { "00": "", 10: ".", 11: "-" };

  let result = "";
  for (let i = 0; i < expr.length; i += 10) {
    const code = expr.slice(i, i + 10);

    let char = "";
    if (code === "**********") char += " ";
    else {
      for (let j = 0; j < 10; j += 2) char += DECODER[code.slice(j, j + 2)];
    }

    result += MORSE_TABLE[char] || char;
  }

  return result;
}

module.exports = {
  decode,
};
