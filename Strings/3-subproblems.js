function isPalindrome(str) {
  if (str.length <= 1) return true;

  if (str[0] !== str[str.length - 1]) return false;

  return isPalindrome(str.slice(1, -1));
}

function cleanInput(str) {
  str = str.toLowerCase();
  let cleanString = '';
  let lowerLimit = 'a'.charCodeAt(0);
  let upperLimit = 'z'.charCodeAt(0);
  for (let char of str) {
    let charCode = char.charCodeAt(0);
    if (charCode >= lowerLimit && charCode <= upperLimit) {
      cleanString += char;
    }
  }
  return cleanString;
}

function checkPalindrome(str) {
  return isPalindrome(cleanInput(str));
}

let str;
str = 'a';
str = 'racecar';
// str = 'popeye';

console.log(checkPalindrome(str));
