function twoSum(arr, n) {
  if (n === undefined || n === null) return null;
  if (arr.length <= 1) return null;

  const hash = {};

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    if (hash[val] > -1) {
      return [hash[val], i];
    } else {
      const numToFind = n - val;
      hash[numToFind] = i;
    }
  }
  return null;
}

// const target = 25;
const arr = [1, 3, 7, 9, 2];
// const target = 25;

// console.log(twoSum(arr, 8));
console.log(twoSum(arr, 25));
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

// Runtime: 76 ms, faster than 88.48% of JavaScript online submissions for Two Sum.
// Memory Usage: 43.2 MB, less than 28.71% of JavaScript online submissions for Two Sum.
