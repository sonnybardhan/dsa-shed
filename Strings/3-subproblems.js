//Recursion

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
  str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  // console.log(str);
  return str;
}

function checkPalindrome(str) {
  return isPalindrome(cleanInput(str));
}

let str;
// str = 'a';
// str = 'racecar';
// str = 'rar';
str = 'raar';
str = 'popeyes';
// str = 'A man, a plan, a canal: Panama';

console.log(checkPalindrome(str));
