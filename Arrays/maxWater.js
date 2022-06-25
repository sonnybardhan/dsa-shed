function maxWater(arr) {
  if (arr.length <= 1) return null;
  let maxArea = 0;

  // for (let i = 0; i < arr.length; i++) {
  //   let j = arr.length - 1;
  //   if (i === j) break;
  //   const currArea = Math.min(arr[i], arr[j]) * (j - i);
  //   maxArea = Math.max(currArea, maxArea);
  // }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      const currArea = Math.min(arr[i], arr[j]) * Math.abs(i - j);
      maxArea = Math.max(currArea, maxArea);
    }
  }
  return maxArea > 0 ? maxArea : null;
}

let arr;
// arr = [7, 10, 9, 3, 6];
// arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// arr = [2, 3, 4, 5, 18, 17, 6];

console.log(maxWater(arr));
/*
Test cases
----------

[7,1,2,3,9], 28


1-5 = -4, 4
4-3 = 1
3-4 = -1, 1
*/
