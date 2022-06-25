function twoSum(arr, n) {
  if (n === null || n === undefined) return null;
  if (!arr.length || arr.length === 1) return null;

  const temp = [...arr];
  temp.sort((a, b) => a - b);

  let prev = 0;
  let next = temp.length - 1;
  let prevVal, nextVal;

  while (prev < next) {
    if (prev < 0 || next > temp.length - 1) break;
    prevVal = temp[prev];
    nextVal = temp[next];
    let sum = prevVal + nextVal;
    if (sum < n) {
      prev += 1;
    } else if (sum > n) {
      next -= 1;
    } else if (sum === n) {
      return [arr.indexOf(prevVal), arr.lastIndexOf(nextVal)];
    } else {
      break;
    }
  }
  return null;
}

// const arr = [-1, 3, -4];
const n = 25;
const arr = [1, 3, 7, 9, 2];
// const n = 25;

// console.log(twoSum(arr, 8));
console.log(twoSum([0, 4, 3, 0], 0));

// [0, 4, 3, 0];
// 0;

//Complexity analysis
//n log n

//write test cases
/*
[1, 3, 7, 9, 2], n=11, result=[3,4]
[1, 3, 7, 9, 2], n=25, result=null
[], n=25, result=null
[5], n=5, result=null
[1,6], n=7, result=[0,1]
*/

// Runtime: 99 ms, faster than 68.04% of JavaScript online submissions for Two Sum.
// Memory Usage: 44.4 MB, less than 14.18% of JavaScript online submissions for Two
