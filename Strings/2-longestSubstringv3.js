function longestSubstring(str) {
  if (str.length <= 1) return str.length;

  let p = 0;
  let maxLength = 0;
  // let boundary = -1;
  let hash = {};
  let length = 0;

  while (p < str.length) {
    const char = str[p];
    if (hash[char] > -1) {
      p = hash[char];
      hash = {};
      length = 0;
    } else {
      hash[char] = p;
      length++;
      maxLength = Math.max(maxLength, length);
    }
    p++;
  }
  return maxLength;
}

let str;

// str = 'abccabb';
// str = ' ';
// str = 'ccc';
// str = 'ccccccc';
// str = '';
str = 'abcbda';

console.log(longestSubstring(str));
/*
Test cases

"abccabb" -> 3
"cccc" 		-> 1
""				-> 0
"abcbda"	-> 4
*/
