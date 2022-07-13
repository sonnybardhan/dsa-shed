function quickSort(arr, left, right) {
  if (arr.length === 1) return arr;

  if (left < right) {
    const partition_idx = partition(arr, left, right);
    quickSort(arr, left, partition_idx - 1);
    quickSort(arr, partition_idx + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  let pivot = arr[right];
  let start = left;
  let partition_idx = left;

  for (let start = left; start < right; start++) {
    if (arr[start] < pivot) {
      swap(arr, start, partition_idx);
      partition_idx++;
    }
  }

  swap(arr, partition_idx, right);
  return partition_idx;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function distinctK(arr, k) {
  quickSort(arr, 0, arr.length - 1);
  return arr[arr.length - k];
}

let arr;
arr = [5, 3, 1, 6, 4, 2];
// arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// let left = 0;
// let right = arr.length - 1;
// console.log(distinctK(arr, left, right));
console.log(distinctK(arr, 1));
