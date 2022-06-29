// function longestSubstring(str) {
//   let strMap = {};
//   let left = 0;
//   // let right = 1;
//   let maxLength = 0;
//   let length = 0;

//   while (left < str.length) {
//     // console.log(str[left].charCodeAt(0));
//     const code = str[left].charCodeAt(0);
//     if (!strMap[code]) {
//       strMap[code] = 1;
//       length++;
//       maxLength = Math.max(length, maxLength);
//       left++;
//     } else {
//       // length = Object.keys(strMap).length;
//       strMap = {};
//       length = 0;
//     }
//     // console.log(strMap);
//   }

//   return maxLength;
// }

function longestSubstring(str) {
  let maxLength = 0;
  for (let i = 0; i < str.length; i++) {
    let strMap = {};
    let length = 0;
    for (let j = i; j < str.length; j++) {
      if (!strMap[str[j]]) {
        strMap[str[j]] = 1;
        length++;
      } else {
        break;
      }
    }
    maxLength = Math.max(maxLength, length);
  }
  return maxLength;
}

let str;
str = 'cat';
str = 'abccabb';
str = 'dvdf';
str = 'ccc';

// console.log(longestSubstring('abccabb'));
// console.log(longestSubstring('pwwkew'));
// console.log(longestSubstring('dvdf'));
// console.log(longestSubstring(' '));
console.log(longestSubstring(str));
