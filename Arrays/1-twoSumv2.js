function twoSum(arr, n) {
  if (arr.length === 0 || arr.length === 1) return null;

  let p1 = 0;
  while (p1 < arr.length - 1) {
    let p2 = p1 + 1;
    const target = n - arr[p1];
    while (p2 < arr.length) {
      if (arr[p2] === target) {
        return [p1, p2];
      }
      p2 += 1;
    }
    p1 += 1;
  }
  return null;
}

// const arr = [-1, 3, -4];
const target = 25;
const arr = [1, 3, 7, 9, 2];
// const target = 25;

//console.log(twoSum(arr, 8));
// console.log(twoSum(arr, 25));
console.log(twoSum(arr, 11));
console.log(twoSum([25], 25));
console.log(twoSum([1, 6], 7));

//Complexity analysis
//n log n

//write test cases
/*
[1, 3, 7, 9, 2], target=11, result=[3,4]
[1, 3, 7, 9, 2], target=25, result=null
[], target=25, result=null
[5], target=5, result=null
[1,6], target=7, result=[0,1]
*/

// Runtime: 101 ms, faster than 66.17% of JavaScript online submissions for Two Sum.
// Memory Usage: 42.4 MB, less than 65.99% of JavaScript online submissions for Two Sum.
