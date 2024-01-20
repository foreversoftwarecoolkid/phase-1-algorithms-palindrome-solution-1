function isPalindrome(word) {
  // Write your algorithm here
  const cleanedWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase(); // Remove non-alphabetic characters and convert to lowercase
  const reversedWord = cleanedWord.split('').reverse().join(''); // Reverse the cleaned word

  return cleanedWord === reversedWord; // Check if the cleaned word is the same as its reverse
}

/* 
  Pseudocode:
  1. Remove non-alphabetic characters from the input word and convert it to lowercase.
  2. Reverse the cleaned word.
  3. Check if the cleaned word is the same as its reverse.
  4. Return true if they are the same, otherwise return false.

*/

/*
  Explanation:
  The function takes an input word and first removes any non-alphabetic characters and converts it to lowercase.
  Then, it reverses the cleaned word and compares it with the original cleaned word to check if it is a palindrome.
  If the cleaned word is the same as its reverse, the function returns true, indicating that the input is a palindrome.
  Otherwise, it returns false, indicating that the input is not a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Add your own custom tests here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
