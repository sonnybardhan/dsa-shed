function minimumParens(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === '(' || char === ')') {
      if (char === '(') {
        stack.push({ [char]: i });
      } else {
        if (stack.length && stack[stack.length - 1]['('] > -1) {
          stack.pop();
        } else {
          stack.push({ [char]: i });
        }
      }
    }
  }

  // for (let i = 0; i < str.length; i++) {
  //   const char = str[i];

  //   if (char === '(') {
  //     stack.push({ [char]: i });
  //   } else if (char === ')') {
  //     if (stack[stack.length - 1] && stack[stack.length - 1]['('] > -1) {
  //       stack.pop();
  //     } else {
  //       stack.push({ [char]: i });
  //     }
  //   }
  // }

  const idxToRemove = [];

  for (let item of stack) {
    idxToRemove.push(Object.values(item)[0]);
  }

  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    if (!idxToRemove.includes(i)) {
      newStr += str[i];
    }
  }
  return newStr;
}

let str = 'a)bc(d)'; //abc(d)
// str = 'a)bc()d)'; //abc()d
// str = ')))((('; //abc()d
str = '())()((('; //abc()d
str = '))(('; //abc()d

console.log(minimumParens(str));
