function reverseString(str) {
  if (str.length === 1) return str;

  // return str.slice(-1) + reverseString(str.slice(0, -1));
  return str[str.length - 1] + reverseString(str.substr(0, str.length - 1));
}

// console.log(reverseString('hello'));
console.log(reverseString('clowns'));

// function reverseString(str) {
//   let result = '';
//   let length = str.length - 1;

//   while (length >= 0) {
//     result += str[length];
//     length -= 1;
//   }
//   console.log(result);
// }
// reverseString('toys');
