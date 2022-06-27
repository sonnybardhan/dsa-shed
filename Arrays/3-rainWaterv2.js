function rainWater(arr) {
  let total = 0;
  let maxLeft = 0;
  let maxRight = 0;
  let pLeft = 0;
  let pRight = arr.length - 1;

  while (pLeft < pRight) {
    if (arr[pLeft] < arr[pRight]) {
      if (maxLeft > arr[pLeft]) {
        total += maxLeft - arr[pLeft];
      } else if (arr[pLeft] > maxLeft) {
        maxLeft = arr[pLeft];
      }
      pLeft++;
    } else {
      if (maxRight > arr[pRight]) {
        total += maxRight - arr[pRight];
      } else if (arr[pRight] > maxRight) {
        maxRight = arr[pRight];
      }
      pRight--;
    }
  }
  return total;
}

let arr = [];
arr = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
// arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(rainWater(arr));
