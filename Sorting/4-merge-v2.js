function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let leftIdx = 0;
  let rightIdx = 0;
  const results = [];

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      results.push(left[leftIdx]);
      leftIdx++;
    } else {
      results.push(right[rightIdx]);
      rightIdx++;
    }
  }

  return [...results, ...left.slice(leftIdx), ...right.slice(rightIdx)];
}

// let arr = [5, 40, 14, 65, -9];
arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// arr = [99, 44, 6, 2, 1, 5];

// arr = [20, 99, 44];
// arr = [1, 2, 3, 4, 5];
// arr = [1, 2, 3, 4, 5, 6];
console.log(mergeSort(arr));
