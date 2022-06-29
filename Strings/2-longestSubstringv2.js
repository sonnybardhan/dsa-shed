//brute force

function longestSubstring(str) {
  let maxLength = 0;

  for (let i = 0; i < str.length - 1; i++) {
    let hash = {};
    let length = 0;
    for (let j = i + 1; j < str.length; j++) {
      if (!hash[str[j]]) {
        hash[str[j]] = 1;
        length++;
        maxLength = Math.max(length, maxLength);
      } else {
        break;
      }
    }
    // maxLength = Math.max(length, maxLength);
  }
  return maxLength;
}

let str;

str = 'abccabb';
// str = 'ccc';
// str = '';
// str = 'abcbda';

console.log(longestSubstring(str));
/*
Test cases

"abccabb" -> 3
"cccc" 		-> 1
""				-> 0
"abcbda"	-> 4
*/
