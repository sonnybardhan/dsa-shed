//two shifting pointer solution

function maxWater(arr) {
  if (arr.length <= 1) return null;

  let left = 0;
  let right = arr.length - 1;
  let maxArea = 0;

  while (left < right) {
    const currArea = Math.min(arr[left], arr[right]) * (right - left);
    maxArea = Math.max(currArea, maxArea);

    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

/* Complexity analysis
	space = o(1)
	time = o(n)
*/

let arr;
arr = [7, 10, 9, 3, 6];
arr = [4, 8, 1, 2, 3, 9];
// arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// arr = [2, 3, 4, 5, 18, 17, 6];
// arr = [6, 9, 3, 4, 5, 8];

console.log(maxWater(arr));
/*
Test cases
----------

[7,1,2,3,9], 28

*/
