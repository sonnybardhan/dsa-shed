function typedOut(s, t) {
  let p1 = s.length - 1;
  let p2 = t.length - 1;

  while (p1 > -1 || p2 > -1) {
    if (s[p1] === '#' || t[p2] === '#') {
      if (s[p1] === '#') {
        let backCount = 2;
        while (backCount > 0) {
          backCount--;
          p1--;
          if (s[p1] === '#') {
            backCount += 2;
          }
        }
      }

      if (t[p2] === '#') {
        let backCount = 2;
        while (backCount > 0) {
          p2--;
          backCount--;
          if (t[p2] === '#') {
            backCount += 2;
          }
        }
      }
    }

    if (s[p1] !== t[p2]) {
      return false;
    }
    p1--;
    p2--;
  }

  return true;
}
/**
 * s: "ab#z"		t: "az#z" 	true
 * s: "abc#d"		t: "acc#c" 	false
 * s: "x#y#z#"	t: "a#" 		true
 * s: "a###b"		t: "b" 			true
 * s: "ab#z"		t: "Az#z" 	false
 *
 */
// console.log(typedOut('ab#z', 'ab#z'));
// console.log(typedOut('abc##z', 'ab#z'));
console.log(typedOut('a#z', '###z#z'));
