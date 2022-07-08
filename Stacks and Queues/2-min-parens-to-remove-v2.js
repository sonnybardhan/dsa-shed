function minimumParens(str) {
  let strArr = str.split('');
  let stack = [];

  for (let i = 0; i < strArr.length; i++) {
    const char = strArr[i];

    if (char === '(') {
      stack.push(i);
    } else if (char === ')' && stack.length) {
      stack.pop();
    } else if (char === ')') {
      strArr[i] = '';
    }
  }

  while (stack.length) {
    strArr[stack.pop()] = '';
  }

  return strArr.join('');
}

// let str = 'a)bc(d)'; //abc(d)
// str = 'a)bc()d)'; //abc()d
// str = ')))((('; //abc()d
// str = '())()((('; //abc()d
str = '))(('; //abc()d

console.log(minimumParens(str));

// Runtime: 91 ms, faster than 93.10% of JavaScript online submissions for Minimum Remove to Make Valid Parentheses.
// Memory Usage: 48.5 MB, less than 85.25% of JavaScript online submissions for Minimum Remove to Make Valid Parentheses.
