function isPalindrome(word) {
  // Remove whitespace and convert to lowercase for case-insensitive comparison
  const formattedWord = word.toLowerCase().replace(/\s/g, '');

  const reversedWord = formattedWord.split('').reverse().join('');

  return formattedWord === reversedWord;
}

// Example usage
const word1 = "level";
console.log(`${word1} is a palindrome: ${isPalindrome(word1)}`);

const word2 = "Hello";
console.log(`${word2} is a palindrome: ${isPalindrome(word2)}`);
// Do not edit this line;
module.exports = isPalindrome;