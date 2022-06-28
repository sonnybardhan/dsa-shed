function typedOut(s, t) {
  return buildString(s) === buildString(t);
}

function buildString(str) {
  let temp = [];

  for (let char of str) {
    if (char !== '#') {
      temp.push(char);
    } else {
      temp.pop();
    }
  }
  // return temp;
  return temp.join('');
}

/**
 * s: "ab#z"		t: "az#z" 	true
 * s: "abc#d"		t: "acc#c" 	false
 * s: "x#y#z#"	t: "a#" 		true
 * s: "a###b"		t: "b" 			true
 * s: "ab#z"		t: "Az#z" 	false
 *
 */
console.log(typedOut('ab#z', '##az#z'));
console.log(typedOut('a#z', 'az#z'));
