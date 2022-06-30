// function isPalindrome(str) {
//   if (str.length <= 1) return true;

//   if (str[0] !== str[str.length - 1]) return false;

//   return isPalindrome(str.slice(1, -1));
// }

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;

    left++;
    right--;
  }

  return true;
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
// str = 'a';
// str = 'racecar';
// str = 'rar';
str = 'raar';
// str = 'popeyes';

console.log(checkPalindrome(str));
