function validParentheses(str) {
  const stack = [];
  if (str.length % 2 === 1) return false;

  for (let i = 0; i < str.length; i++) {
    const currParen = str[i];
    const lastParen = stack[stack.length - 1];
    const foundPair = complement[lastParen] === currParen;

    if (foundPair) {
      stack.pop();
    } else {
      stack.push(currParen);
    }
  }

  return stack.length ? false : true;
}

const complement = {
  '{': '}',
  '(': ')',
  '[': ']',
};

let str = '';
// str = '[{()}]'; //valid
// str = '[{(}]'; //invalid
// str = '(([{([[[[{{}}]]]])}]))'; //invalid
// str = '{([)]}';

// str = '{([]';
// str = '{[]()}';

console.log(validParentheses(str));
