function trap(heights) {
  let total = 0;
  let left = 0;
  let right = heights.length - 1;

  let maxLeft = heights[0];
  let maxRight = heights[heights.length - 1];

  while (left < right) {
    if (heights[left] < heights[right]) {
      if (heights[left] < maxLeft) {
        total += maxLeft - heights[left];
      } else {
        maxLeft = heights[left];
      }
      left++;
    } else {
      if (heights[right] < maxRight) {
        total += maxRight - heights[right];
      } else {
        maxRight = heights[right];
      }
      right--;
    }
  }

  return total;
}

/*
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

Input: height = [4,2,0,3,2,5]
Output: 9
*/

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
