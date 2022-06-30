function almostPalindrome(str) {
  str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return (
        isPalindrome(str, left + 1, right) || isPalindrome(str, left, right - 1)
      );
    }
    left++;
    right--;
  }

  return true;
}

function isPalindrome(str, left, right) {
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
// str = 'A man, a plan, a canal: Panama'; //true
str = 'abcdefdba'; // false

console.log(almostPalindrome(str));
// console.log(almostPalindrome('eedede'));
// console.log(almostPalindrome('abc'));
