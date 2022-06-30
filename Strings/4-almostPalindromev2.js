function cleanInput(str) {
  str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  return str;
}

function almostPalindrome(str) {
  str = cleanInput(str);
  let left = 0;
  let right = str.length - 1;
  // let count = 0;

  while (left < right) {
    if (str[left] !== str[right]) {
      let newLeftStr = str.substr(0, left) + str.substr(left + 1, str.length);
      let leftResult = isPalindrome(newLeftStr);

      let newRightStr =
        str.substr(0, right) + str.substr(right + 1, str.length);
      let rightResult = isPalindrome(newRightStr);

      if (!leftResult && !rightResult) {
        return false;
      }
      return true;
    }
    left++;
    right--;
  }

  return true;
}

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

let str;
// str = 'ab'; //true
// str = ''; //true
// str = 'a'; //true
// str = 'raceacar'; // true
// str = 'abccdba'; //true
str = 'A man, a plan, a canal: Panama'; //true
// str = 'abcdefdba'; // false

console.log(almostPalindrome(str));
// console.log(almostPalindrome('eedede'));
// console.log(almostPalindrome('abc'));
