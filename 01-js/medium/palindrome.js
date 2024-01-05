/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let originalString = str.toLowerCase();
  let cleanString = "";
  for (let i = 0; i < originalString.length; i++) {
    if (originalString[i] >= "a" && originalString[i] <= "z") {
      cleanString += originalString[i];
    }
  }
  reversedString = cleanString.split("").reverse().join("");

  return reversedString === cleanString;
}
console.log(isPalindrome("race car"));

module.exports = isPalindrome;
