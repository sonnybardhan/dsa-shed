function longestSubstring(str) {
  if (str.length <= 1) return str.length;

  let start = 0;
  let hash = new Map();
  let longest = 0;

  for (let end = 0; end < str.length; end++) {
    const char = str[end];
    if (hash.get(char) >= start) {
      start = hash.get(char) + 1;
    }
    hash.set(char, end);
    longest = Math.max(longest, end - start + 1);
  }
  return longest;
}

str = 'abccabb';
str = ' ';
// str = 'ccc';
// str = 'ccccccc';
str = '';
str = 'abcbda';

console.log(longestSubstring(str));
// console.log(longestSubstring('pwwkew'));
/*
Test cases

"abccabb" -> 3
"cccc" 		-> 1
""				-> 0
"abcbda"	-> 4
*/

// console.log(lengthOfLongestSubstring(str));
