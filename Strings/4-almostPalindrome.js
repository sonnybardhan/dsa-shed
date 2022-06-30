function cleanInput(str) {
  str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  return str;
}

function almostPalindrome(str, count = 0) {
  str = cleanInput(str);
  let left = 0;
  let right = str.length - 1;
  // let count = 0;

  while (left < right) {
    if (str[left] !== str[right]) {
      let newLeftStr = str.substr(0, left) + str.substr(left + 1, str.length);
      let leftResult = almostPalindrome(newLeftStr, count + 1);

      let newRightStr =
        str.substr(0, right) + str.substr(right + 1, str.length);
      let rightResult = almostPalindrome(newRightStr, count + 1);

      if (!leftResult && !rightResult) {
        return false;
      }
    }
    left++;
    right--;
  }

  return count < 2;
}

let str;
// str = 'ab'; //true
// str = ''; //true
// str = 'a'; //true
// str = 'raceacar'; // true
str = 'abccdba'; //true
// str = 'A man, a plan, a canal: Panama'; //true
// str = 'abcdefdba'; // false

console.log(almostPalindrome(str));
