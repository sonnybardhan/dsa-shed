function quickSort(arr, left, right) {
  if (arr.length === 1) return arr;

  if (left < right) {
    let partitionIdx = paritition(arr, left, right);
    quickSort(arr, left, partitionIdx - 1);
    quickSort(arr, partitionIdx + 1, right);
  }
  return arr;
}

function paritition(arr, left, right) {
  let start = left;
  let partitionIdx = left;
  let pivot = right;

  while (start < right) {
    if (arr[start] < arr[pivot]) {
      swap(arr, start, partitionIdx);
      partitionIdx++;
    }
    start++;
  }
  swap(arr, partitionIdx, right);
  return partitionIdx;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

let arr;
arr = [5, 3, 1, 6, 4, 2];
arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
let left = 0;
let right = arr.length - 1;
console.log(quickSort(arr, left, right));
