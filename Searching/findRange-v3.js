function binarySearch(arr, left, right, target) {
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

function findRange(arr, target) {
  if (!arr.length) return [-1, -1];

  let idx = binarySearch(arr, 0, arr.length, target);

  if (idx < 0) return [-1, -1];

  let start = idx;
  let end = idx;

  while (idx > -1) {
    start = idx;
    idx = binarySearch(arr, 0, idx - 1, target);
  }

  idx = end;

  while (idx > -1) {
    end = idx;
    idx = binarySearch(arr, idx + 1, arr.length, target);
  }

  return [start, end];
}

let arr = [1, 2, 3, 3, 3, 4, 5];
// //---------0  1  2  3  4  5  6
// let el = 3; //[2,4]

// console.log(binarySearch(arr, 0, arr.length, el));
// console.log(findRange(arr, 3));
// console.log(findRange(arr, 5));
console.log(findRange(arr, 1));
