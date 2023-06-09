function frequencyCounter(word) {
  const frequency = {};

  for (let i = 0; i < word.length; i++) {
    const char = word[i].toLowerCase();

    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }

  return frequency;
}

console.log(frequencyCounter("Hello"));
// Do not edit this line;
module.exports = frequencyCounter;