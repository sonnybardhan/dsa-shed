function quickSelect(arr, left, right, idxToFind) {
  if (arr.length === 1) return arr;

  if (left < right) {
    partitionIdx = partition(arr, left, right);
    if (partitionIdx === idxToFind) {
      return arr[partitionIdx];
    } else if (idxToFind < partitionIdx) {
      return quickSelect(arr, left, partitionIdx - 1, idxToFind);
    } else {
      return quickSelect(arr, partitionIdx + 1, right, idxToFind);
    }
  }
  return -1;
}

function getKthLargest(arr, k) {
  const idxToFind = arr.length - k;
  quickSelect(arr, 0, arr.length - 1, k);
  return arr[idxToFind];
}

function partition(arr, left, right) {
  let pivotElement = arr[right];
  let start = left;
  let partitionIdx = left;

  while (start < right) {
    if (arr[start] < pivotElement) {
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
// console.log(quickSort(arr, left, right));
console.log(getKthLargest(arr, 1));
